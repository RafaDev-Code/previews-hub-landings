#!/usr/bin/env node

import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const previewHost = process.env.PREVIEW_HOST || "127.0.0.1";
const hubHost = process.env.HUB_HOST || "127.0.0.1";
const requestedHubPort = Number(process.env.HUB_PORT || 5170);
const landingBasePort = Number(process.env.LANDING_BASE_PORT || 5300);
const shouldStartAll = process.env.START_ALL === "1";

const processes = new Map();
const startPromises = new Map();
const logs = new Map();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function asJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body),
  });
  res.end(body);
}

function asHtml(res, body) {
  res.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
    "content-length": Buffer.byteLength(body),
  });
  res.end(body);
}

function normalizePreviewPath(rawPath) {
  const prefix = "restaurant-templates/";
  return rawPath.startsWith(prefix) ? rawPath.slice(prefix.length) : rawPath;
}

function toTitle(value) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join(" ");
}

function templateSortName(name) {
  const match = name.match(/^template-(\d+)-(.+)$/);
  return {
    order: match ? Number(match[1]) : 999,
    slug: match ? match[2] : name,
  };
}

function getState(id) {
  const state = processes.get(id);
  if (!state) {
    return {
      status: "stopped",
      external: false,
      startedAt: null,
      exitCode: null,
    };
  }

  return {
    status: state.status,
    external: Boolean(state.external),
    startedAt: state.startedAt || null,
    exitCode: state.exitCode ?? null,
    error: state.error || null,
  };
}

function pushLog(id, chunk) {
  const lines = String(chunk)
    .replace(/\u001b\[[0-9;]*m/g, "")
    .split(/\r?\n/)
    .filter(Boolean);

  if (!lines.length) {
    return;
  }

  const current = logs.get(id) || [];
  current.push(...lines.map((line) => `[${new Date().toLocaleTimeString()}] ${line}`));
  logs.set(id, current.slice(-180));
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

async function discoverLandings() {
  const categories = await readJson(path.join(rootDir, "categories.json"), []);
  const variants = await readJson(path.join(rootDir, "variants.json"), []);
  const variantByPath = new Map();

  for (const category of variants) {
    for (const variant of category.variants || []) {
      variantByPath.set(normalizePreviewPath(variant.path), variant.name);
    }
  }

  const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
  const landings = [];
  let index = 0;

  for (const category of categories) {
    const categoryDir = path.join(rootDir, category.slug);
    const entries = await readdir(categoryDir, { withFileTypes: true }).catch(() => []);
    const templateDirs = entries
      .filter((entry) => entry.isDirectory() && entry.name.startsWith("template-"))
      .map((entry) => entry.name)
      .sort((left, right) => {
        const leftParts = templateSortName(left);
        const rightParts = templateSortName(right);
        return leftParts.order - rightParts.order || left.localeCompare(right);
      });

    for (const templateDir of templateDirs) {
      const landingDir = path.join(categoryDir, templateDir, "landing");
      const packagePath = path.join(landingDir, "package.json");

      if (!existsSync(packagePath)) {
        continue;
      }

      const relativePath = path.relative(rootDir, landingDir).split(path.sep).join("/");
      const packageJson = await readJson(packagePath, {});
      const template = templateSortName(templateDir);
      const variantName = variantByPath.get(relativePath) || toTitle(template.slug);
      const port = landingBasePort + index;

      landings.push({
        id: `${category.slug}--${templateDir}`,
        categorySlug: category.slug,
        categoryLabel: category.label || toTitle(category.slug),
        templateDir,
        templateOrder: template.order,
        variantName,
        styleSlug: template.slug,
        packageName: packageJson.name || "",
        relativePath,
        absolutePath: landingDir,
        port,
        url: `http://${previewHost}:${port}/`,
      });

      index += 1;
    }
  }

  const knownCategorySlugs = new Set(categories.map((category) => category.slug));
  const rootEntries = await readdir(rootDir, { withFileTypes: true }).catch(() => []);
  const unknownCategoryDirs = rootEntries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .filter((slug) => !knownCategorySlugs.has(slug) && !["node_modules", "tools"].includes(slug));

  for (const categorySlug of unknownCategoryDirs) {
    const category = categoryBySlug.get(categorySlug) || {
      slug: categorySlug,
      label: toTitle(categorySlug),
    };
    const categoryDir = path.join(rootDir, categorySlug);
    const entries = await readdir(categoryDir, { withFileTypes: true }).catch(() => []);

    for (const entry of entries) {
      if (!entry.isDirectory() || !entry.name.startsWith("template-")) {
        continue;
      }

      const landingDir = path.join(categoryDir, entry.name, "landing");
      const packagePath = path.join(landingDir, "package.json");

      if (!existsSync(packagePath)) {
        continue;
      }

      const relativePath = path.relative(rootDir, landingDir).split(path.sep).join("/");
      const packageJson = await readJson(packagePath, {});
      const template = templateSortName(entry.name);
      const port = landingBasePort + index;

      landings.push({
        id: `${categorySlug}--${entry.name}`,
        categorySlug,
        categoryLabel: category.label,
        templateDir: entry.name,
        templateOrder: template.order,
        variantName: variantByPath.get(relativePath) || toTitle(template.slug),
        styleSlug: template.slug,
        packageName: packageJson.name || "",
        relativePath,
        absolutePath: landingDir,
        port,
        url: `http://${previewHost}:${port}/`,
      });

      index += 1;
    }
  }

  return {
    categories: categories.map((category) => ({
      slug: category.slug,
      label: category.label || toTitle(category.slug),
    })),
    landings,
  };
}

function isPortFree(port, host) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close(() => resolve(true));
    });
    server.listen(port, host);
  });
}

async function findFreePort(startPort, host) {
  for (let port = startPort; port < startPort + 80; port += 1) {
    if (await isPortFree(port, host)) {
      return port;
    }
  }

  throw new Error(`No free port found from ${startPort}`);
}

async function isReachable(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 900);

  try {
    await fetch(url, {
      method: "GET",
      redirect: "manual",
      signal: controller.signal,
    });
    return true;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function waitForLanding(landing, child, timeoutMs = 60000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    const state = processes.get(landing.id);

    if (child.exitCode !== null || (state && state.exitCode !== null)) {
      throw new Error(`Dev server exited before ${landing.variantName} was ready`);
    }

    if (await isReachable(landing.url)) {
      return;
    }

    await sleep(600);
  }

  throw new Error(`Timed out waiting for ${landing.url}`);
}

function serializeLandings(landings, categories) {
  return {
    categories,
    landings: landings.map((landing) => ({
      ...landing,
      state: getState(landing.id),
      absolutePath: undefined,
    })),
  };
}

function stopChild(child) {
  if (!child || child.exitCode !== null) {
    return;
  }

  if (process.platform === "win32") {
    child.kill("SIGTERM");
    return;
  }

  try {
    process.kill(-child.pid, "SIGTERM");
  } catch {
    child.kill("SIGTERM");
  }

  setTimeout(() => {
    if (child.exitCode === null) {
      try {
        process.kill(-child.pid, "SIGKILL");
      } catch {
        child.kill("SIGKILL");
      }
    }
  }, 2500).unref();
}

async function startLanding(landing) {
  if (startPromises.has(landing.id)) {
    return startPromises.get(landing.id);
  }

  const promise = (async () => {
    const current = processes.get(landing.id);

    if (current?.status === "running" || current?.status === "starting") {
      return { ...landing, state: getState(landing.id) };
    }

    if (await isReachable(landing.url)) {
      processes.set(landing.id, {
        status: "running",
        external: true,
        startedAt: new Date().toISOString(),
        exitCode: null,
      });
      return { ...landing, state: getState(landing.id) };
    }

    pushLog(landing.id, `Starting ${landing.relativePath} on ${landing.url}`);

    const child = spawn(
      "npm",
      [
        "run",
        "dev",
        "--",
        "--host",
        previewHost,
        "--port",
        String(landing.port),
        "--strictPort",
      ],
      {
        cwd: landing.absolutePath,
        detached: process.platform !== "win32",
        env: {
          ...process.env,
          BROWSER: "none",
          FORCE_COLOR: "0",
          NO_COLOR: "1",
        },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );

    processes.set(landing.id, {
      child,
      status: "starting",
      external: false,
      startedAt: new Date().toISOString(),
      exitCode: null,
    });

    child.stdout.on("data", (chunk) => pushLog(landing.id, chunk));
    child.stderr.on("data", (chunk) => pushLog(landing.id, chunk));
    child.on("exit", (code, signal) => {
      const state = processes.get(landing.id) || {};
      processes.set(landing.id, {
        ...state,
        child: null,
        status: state.status === "starting" ? "error" : "stopped",
        exitCode: code ?? signal,
        error: state.status === "starting" ? `Exited with ${code ?? signal}` : null,
      });
      pushLog(landing.id, `Process exited with ${code ?? signal}`);
    });

    try {
      await waitForLanding(landing, child);
      const state = processes.get(landing.id) || {};
      processes.set(landing.id, {
        ...state,
        status: "running",
        exitCode: null,
        error: null,
      });
      return { ...landing, state: getState(landing.id) };
    } catch (error) {
      const state = processes.get(landing.id) || {};
      processes.set(landing.id, {
        ...state,
        status: "error",
        error: error.message,
      });
      pushLog(landing.id, error.message);
      stopChild(child);
      throw error;
    }
  })().finally(() => {
    startPromises.delete(landing.id);
  });

  startPromises.set(landing.id, promise);
  return promise;
}

async function startMany(landings, ids) {
  const selected = ids
    ? ids.map((id) => landings.find((landing) => landing.id === id)).filter(Boolean)
    : landings;
  const results = [];
  const errors = [];
  let cursor = 0;

  async function worker() {
    while (cursor < selected.length) {
      const landing = selected[cursor];
      cursor += 1;

      try {
        results.push(await startLanding(landing));
      } catch (error) {
        errors.push({
          id: landing.id,
          message: error.message,
        });
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(4, selected.length) }, () => worker()));
  return { results, errors };
}

function stopLanding(id) {
  const state = processes.get(id);

  if (!state) {
    return;
  }

  if (state.child) {
    stopChild(state.child);
  }

  processes.set(id, {
    ...state,
    child: null,
    status: state.external ? "running" : "stopped",
    exitCode: null,
  });
}

async function readBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function dashboardHtml() {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Landing Preview Hub</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f6f7f5;
        --panel: #ffffff;
        --panel-soft: #eef4f2;
        --ink: #18211f;
        --muted: #66716f;
        --line: #d9dfdc;
        --green: #087f6d;
        --green-dark: #055e52;
        --coral: #df5f3d;
        --amber: #c4861f;
        --blue: #345f9f;
        --shadow: 0 12px 34px rgba(24, 33, 31, 0.08);
        font-family:
          Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: var(--bg);
        color: var(--ink);
      }

      button,
      input,
      select {
        font: inherit;
      }

      button {
        min-height: 36px;
        border: 1px solid var(--line);
        border-radius: 7px;
        background: #fff;
        color: var(--ink);
        cursor: pointer;
      }

      button:hover {
        border-color: #aab6b2;
      }

      button.primary {
        border-color: var(--green);
        background: var(--green);
        color: #fff;
      }

      button.primary:hover {
        background: var(--green-dark);
      }

      button.warn {
        border-color: #f1c7b8;
        color: #9f3f24;
      }

      button:disabled {
        cursor: wait;
        opacity: 0.62;
      }

      .topbar {
        position: sticky;
        top: 0;
        z-index: 20;
        display: grid;
        grid-template-columns: minmax(220px, 1fr) auto;
        gap: 18px;
        align-items: center;
        padding: 16px 22px;
        border-bottom: 1px solid var(--line);
        background: rgba(246, 247, 245, 0.94);
        backdrop-filter: blur(14px);
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 14px;
        min-width: 0;
      }

      .mark {
        display: grid;
        width: 42px;
        height: 42px;
        flex: 0 0 auto;
        place-items: center;
        border-radius: 8px;
        background: var(--green);
        color: #fff;
        font-weight: 800;
      }

      .brand h1 {
        margin: 0;
        overflow: hidden;
        font-size: 19px;
        line-height: 1.1;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .brand p,
      .stat p,
      .landing-card p,
      .frame-title p,
      .empty p {
        margin: 0;
        color: var(--muted);
      }

      .top-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;
      }

      .app-shell {
        display: grid;
        grid-template-columns: 280px minmax(0, 1fr);
        min-height: calc(100vh - 75px);
      }

      .sidebar {
        position: sticky;
        top: 75px;
        align-self: start;
        height: calc(100vh - 75px);
        overflow: auto;
        border-right: 1px solid var(--line);
        background: #fbfcfb;
        padding: 18px;
      }

      .main {
        min-width: 0;
        padding: 18px;
      }

      .search {
        display: grid;
        gap: 7px;
        margin-bottom: 18px;
      }

      .search span,
      .section-label {
        color: #3d4845;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      .search input,
      .toolbar select {
        width: 100%;
        height: 38px;
        border: 1px solid var(--line);
        border-radius: 7px;
        background: #fff;
        color: var(--ink);
        padding: 0 10px;
      }

      .filters {
        display: grid;
        gap: 7px;
        margin-top: 9px;
      }

      .filter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
        padding: 8px 10px;
        text-align: left;
      }

      .filter.active {
        border-color: #b7d8cf;
        background: var(--panel-soft);
        color: var(--green-dark);
      }

      .filter-count {
        color: var(--muted);
        font-size: 12px;
      }

      .sidebar-block {
        margin-top: 20px;
        padding-top: 18px;
        border-top: 1px solid var(--line);
      }

      .stat-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
        margin-top: 10px;
      }

      .stat {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        padding: 10px;
      }

      .stat strong {
        display: block;
        font-size: 20px;
        line-height: 1;
      }

      .stat p {
        margin-top: 5px;
        font-size: 12px;
      }

      .toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 14px;
      }

      .toolbar-left,
      .toolbar-right,
      .segmented {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
      }

      .segmented {
        gap: 0;
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
      }

      .segmented button {
        border: 0;
        border-radius: 0;
        background: transparent;
        padding: 0 13px;
      }

      .segmented button.active {
        background: var(--ink);
        color: #fff;
      }

      .landing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
        gap: 12px;
      }

      .landing-card {
        display: grid;
        gap: 14px;
        min-height: 206px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--panel);
        padding: 14px;
        box-shadow: var(--shadow);
      }

      .landing-card.selected {
        border-color: #80bbae;
        box-shadow: 0 0 0 2px rgba(8, 127, 109, 0.13), var(--shadow);
      }

      .card-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }

      .landing-card h2 {
        margin: 4px 0 0;
        font-size: 18px;
        line-height: 1.15;
      }

      .category {
        color: var(--green-dark);
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      .status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-width: 86px;
        justify-content: center;
        border-radius: 999px;
        padding: 5px 8px;
        background: #edf0ee;
        color: #4c5754;
        font-size: 12px;
        font-weight: 700;
      }

      .status::before {
        content: "";
        width: 7px;
        height: 7px;
        border-radius: 999px;
        background: currentColor;
      }

      .status.running {
        background: #e5f5ed;
        color: var(--green-dark);
      }

      .status.starting {
        background: #fff4d9;
        color: var(--amber);
      }

      .status.error {
        background: #fde8e0;
        color: var(--coral);
      }

      .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .meta span {
        max-width: 100%;
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: 999px;
        color: #3d4845;
        font-size: 12px;
        padding: 5px 8px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .card-actions {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto auto;
        gap: 8px;
        align-items: center;
      }

      .check {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        color: #3d4845;
        font-size: 14px;
        font-weight: 700;
      }

      .check input {
        width: 18px;
        height: 18px;
        accent-color: var(--green);
      }

      .compare-pane {
        display: grid;
        gap: 14px;
      }

      .compare-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
        gap: 14px;
        align-items: start;
      }

      .frame-panel {
        min-width: 0;
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        box-shadow: var(--shadow);
      }

      .frame-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 54px;
        border-bottom: 1px solid var(--line);
        padding: 10px 12px;
      }

      .frame-title {
        min-width: 0;
      }

      .frame-title strong,
      .frame-title p {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .frame-title p {
        margin-top: 2px;
        font-size: 12px;
      }

      .frame-actions {
        display: flex;
        flex: 0 0 auto;
        gap: 6px;
      }

      .frame-shell {
        position: relative;
        overflow: hidden;
        background: #e7ebe9;
      }

      .frame-shell iframe {
        display: block;
        width: var(--frame-width);
        height: var(--frame-height);
        border: 0;
        background: #fff;
        transform: scale(var(--frame-scale));
        transform-origin: top left;
      }

      .empty {
        display: grid;
        min-height: 280px;
        place-items: center;
        border: 1px dashed #bac4c0;
        border-radius: 8px;
        background: #fff;
        padding: 24px;
        text-align: center;
      }

      .empty strong {
        display: block;
        margin-bottom: 6px;
      }

      .hidden {
        display: none !important;
      }

      @media (max-width: 920px) {
        .topbar,
        .app-shell {
          grid-template-columns: 1fr;
        }

        .top-actions {
          justify-content: flex-start;
        }

        .sidebar {
          position: static;
          height: auto;
          border-right: 0;
          border-bottom: 1px solid var(--line);
        }

        .compare-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 560px) {
        .topbar,
        .main,
        .sidebar {
          padding: 14px;
        }

        .brand h1 {
          white-space: normal;
        }

        .card-actions {
          grid-template-columns: 1fr;
        }

        .card-actions button {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <header class="topbar">
      <div class="brand">
        <div class="mark">LP</div>
        <div>
          <h1>Landing Preview Hub</h1>
          <p id="subtitle">Cargando landings...</p>
        </div>
      </div>
      <div class="top-actions">
        <button id="startVisible" type="button">Iniciar visibles</button>
        <button id="startAll" type="button">Iniciar todas</button>
        <button id="compareSelected" class="primary" type="button">Comparar</button>
      </div>
    </header>

    <div class="app-shell">
      <aside class="sidebar">
        <label class="search">
          <span>Buscar</span>
          <input id="search" type="search" placeholder="Categoria, estilo o carpeta">
        </label>

        <div>
          <div class="section-label">Categorias</div>
          <div id="filters" class="filters"></div>
        </div>

        <div class="sidebar-block">
          <div class="section-label">Estado</div>
          <div id="stats" class="stat-grid"></div>
        </div>
      </aside>

      <main class="main">
        <div class="toolbar">
          <div class="toolbar-left">
            <div class="segmented">
              <button id="listMode" class="active" type="button">Lista</button>
              <button id="compareMode" type="button">Comparar</button>
            </div>
            <button id="selectVisible" type="button">Seleccionar visibles</button>
            <button id="clearSelected" type="button">Limpiar</button>
          </div>
          <div class="toolbar-right">
            <select id="frameSize" aria-label="Viewport">
              <option value="desktop">Desktop 1440</option>
              <option value="tablet">Tablet 820</option>
              <option value="mobile">Mobile 390</option>
            </select>
          </div>
        </div>

        <section id="listPane">
          <div id="cards" class="landing-grid"></div>
        </section>

        <section id="comparePane" class="compare-pane hidden">
          <div id="frames" class="compare-grid"></div>
        </section>
      </main>
    </div>

    <script>
      const frameSizes = {
        desktop: { width: 1440, height: 900 },
        tablet: { width: 820, height: 980 },
        mobile: { width: 390, height: 844 },
      };

      let landings = [];
      let categories = [];
      let activeCategory = "all";
      let query = "";
      let selected = new Set();
      let mode = "list";
      let frameSize = "desktop";
      let busy = new Set();

      const el = {
        subtitle: document.querySelector("#subtitle"),
        filters: document.querySelector("#filters"),
        stats: document.querySelector("#stats"),
        search: document.querySelector("#search"),
        cards: document.querySelector("#cards"),
        listPane: document.querySelector("#listPane"),
        comparePane: document.querySelector("#comparePane"),
        frames: document.querySelector("#frames"),
        listMode: document.querySelector("#listMode"),
        compareMode: document.querySelector("#compareMode"),
        frameSize: document.querySelector("#frameSize"),
        startVisible: document.querySelector("#startVisible"),
        startAll: document.querySelector("#startAll"),
        compareSelected: document.querySelector("#compareSelected"),
        selectVisible: document.querySelector("#selectVisible"),
        clearSelected: document.querySelector("#clearSelected"),
      };

      function escapeHtml(value) {
        return String(value)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#039;");
      }

      function statusLabel(status) {
        return {
          running: "online",
          starting: "iniciando",
          stopped: "apagada",
          error: "error",
        }[status] || status;
      }

      function filteredLandings() {
        const needle = query.trim().toLowerCase();
        return landings.filter((landing) => {
          const categoryMatch = activeCategory === "all" || landing.categorySlug === activeCategory;
          const haystack = [
            landing.categoryLabel,
            landing.variantName,
            landing.templateDir,
            landing.relativePath,
            landing.packageName,
          ]
            .join(" ")
            .toLowerCase();

          return categoryMatch && (!needle || haystack.includes(needle));
        });
      }

      function countByStatus(status) {
        return landings.filter((landing) => landing.state.status === status).length;
      }

      function renderFilters() {
        const counts = new Map();
        for (const landing of landings) {
          counts.set(landing.categorySlug, (counts.get(landing.categorySlug) || 0) + 1);
        }

        const filters = [
          { slug: "all", label: "Todas", count: landings.length },
          ...categories.map((category) => ({
            ...category,
            count: counts.get(category.slug) || 0,
          })),
        ];

        el.filters.innerHTML = filters
          .map(
            (filter) => \`
              <button class="filter \${filter.slug === activeCategory ? "active" : ""}" type="button" data-filter="\${escapeHtml(filter.slug)}">
                <span>\${escapeHtml(filter.label)}</span>
                <span class="filter-count">\${filter.count}</span>
              </button>
            \`,
          )
          .join("");
      }

      function renderStats() {
        const selectedCount = selected.size;
        el.subtitle.textContent = \`\${landings.length} landings / \${selectedCount} seleccionadas\`;
        el.stats.innerHTML = [
          ["Total", landings.length],
          ["Online", countByStatus("running")],
          ["Inicio", countByStatus("starting")],
          ["Error", countByStatus("error")],
        ]
          .map(
            ([label, value]) => \`
              <div class="stat">
                <strong>\${value}</strong>
                <p>\${label}</p>
              </div>
            \`,
          )
          .join("");
      }

      function renderCards() {
        const list = filteredLandings();

        if (!list.length) {
          el.cards.innerHTML = \`
            <div class="empty">
              <div>
                <strong>Sin resultados</strong>
                <p>Cambia el filtro o la busqueda.</p>
              </div>
            </div>
          \`;
          return;
        }

        el.cards.innerHTML = list
          .map((landing) => {
            const status = landing.state.status;
            const isBusy = busy.has(landing.id) || status === "starting";

            return \`
              <article class="landing-card \${selected.has(landing.id) ? "selected" : ""}">
                <div class="card-head">
                  <div>
                    <div class="category">\${escapeHtml(landing.categoryLabel)}</div>
                    <h2>\${escapeHtml(landing.variantName)}</h2>
                    <p>\${escapeHtml(landing.templateDir)}</p>
                  </div>
                  <span class="status \${escapeHtml(status)}">\${escapeHtml(statusLabel(status))}</span>
                </div>
                <div class="meta">
                  <span>\${escapeHtml(landing.relativePath)}</span>
                  <span>:\${landing.port}</span>
                </div>
                <div class="card-actions">
                  <label class="check">
                    <input type="checkbox" data-select="\${escapeHtml(landing.id)}" \${selected.has(landing.id) ? "checked" : ""}>
                    Comparar
                  </label>
                  <button type="button" data-start="\${escapeHtml(landing.id)}" \${isBusy ? "disabled" : ""}>\${isBusy ? "Iniciando" : "Iniciar"}</button>
                  <button class="primary" type="button" data-open="\${escapeHtml(landing.id)}" \${isBusy ? "disabled" : ""}>Abrir</button>
                </div>
              </article>
            \`;
          })
          .join("");
      }

      function renderMode() {
        el.listPane.classList.toggle("hidden", mode !== "list");
        el.comparePane.classList.toggle("hidden", mode !== "compare");
        el.listMode.classList.toggle("active", mode === "list");
        el.compareMode.classList.toggle("active", mode === "compare");
      }

      function renderFrames() {
        const ids = Array.from(selected);
        const size = frameSizes[frameSize];

        if (!ids.length) {
          el.frames.innerHTML = \`
            <div class="empty">
              <div>
                <strong>No hay landings seleccionadas</strong>
                <p>Selecciona una o mas desde la lista.</p>
              </div>
            </div>
          \`;
          return;
        }

        el.frames.innerHTML = ids
          .map((id) => landings.find((landing) => landing.id === id))
          .filter(Boolean)
          .map((landing) => {
            const running = landing.state.status === "running";
            const src = running ? landing.url : "about:blank";
            const label = \`\${landing.categoryLabel} / \${landing.variantName}\`;

            return \`
              <article class="frame-panel" data-frame="\${escapeHtml(landing.id)}">
                <div class="frame-head">
                  <div class="frame-title">
                    <strong>\${escapeHtml(label)}</strong>
                    <p>\${escapeHtml(landing.relativePath)}</p>
                  </div>
                  <div class="frame-actions">
                    <button type="button" data-reload="\${escapeHtml(landing.id)}">Recargar</button>
                    <button class="primary" type="button" data-open="\${escapeHtml(landing.id)}">Abrir</button>
                  </div>
                </div>
                <div class="frame-shell" style="--frame-width: \${size.width}px; --frame-height: \${size.height}px; --frame-scale: 1;">
                  <iframe title="\${escapeHtml(label)}" src="\${escapeHtml(src)}"></iframe>
                </div>
              </article>
            \`;
          })
          .join("");

        resizeFrames();
      }

      function resizeFrames() {
        const size = frameSizes[frameSize];

        for (const shell of document.querySelectorAll(".frame-shell")) {
          const scale = Math.min(1, shell.clientWidth / size.width);
          shell.style.setProperty("--frame-scale", String(scale));
          shell.style.height = Math.ceil(size.height * scale) + "px";
        }
      }

      function render() {
        renderFilters();
        renderStats();
        renderCards();
        renderMode();

        if (mode === "compare") {
          renderFrames();
        }
      }

      async function refreshLandings() {
        const response = await fetch("/api/landings");
        const data = await response.json();
        landings = data.landings;
        categories = data.categories;
        render();
      }

      async function startIds(ids) {
        if (!ids.length) {
          return;
        }

        ids.forEach((id) => busy.add(id));
        render();

        try {
          await fetch("/api/start", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ ids }),
          });
        } finally {
          ids.forEach((id) => busy.delete(id));
          await refreshLandings();
        }
      }

      async function startOne(id) {
        await startIds([id]);
        return landings.find((landing) => landing.id === id);
      }

      async function openLanding(id) {
        const landing = await startOne(id);

        if (landing?.url) {
          window.open(landing.url, "_blank", "noopener,noreferrer");
        }
      }

      async function compareSelected() {
        mode = "compare";
        renderMode();
        renderFrames();
        await startIds(Array.from(selected));
        renderFrames();
      }

      el.filters.addEventListener("click", (event) => {
        const button = event.target.closest("[data-filter]");
        if (!button) return;
        activeCategory = button.dataset.filter;
        render();
      });

      el.search.addEventListener("input", (event) => {
        query = event.target.value;
        render();
      });

      el.cards.addEventListener("change", (event) => {
        const checkbox = event.target.closest("[data-select]");
        if (!checkbox) return;

        if (checkbox.checked) {
          selected.add(checkbox.dataset.select);
        } else {
          selected.delete(checkbox.dataset.select);
        }

        render();
      });

      document.addEventListener("click", async (event) => {
        const startButton = event.target.closest("[data-start]");
        const openButton = event.target.closest("[data-open]");
        const reloadButton = event.target.closest("[data-reload]");

        if (startButton) {
          await startOne(startButton.dataset.start);
        }

        if (openButton) {
          await openLanding(openButton.dataset.open);
        }

        if (reloadButton) {
          const id = reloadButton.dataset.reload;
          const frame = document.querySelector(\`[data-frame="\${CSS.escape(id)}"] iframe\`);
          const landing = await startOne(id);
          if (frame && landing?.url) {
            frame.src = landing.url;
          }
        }
      });

      el.startVisible.addEventListener("click", () => {
        startIds(filteredLandings().map((landing) => landing.id));
      });

      el.startAll.addEventListener("click", () => {
        startIds(landings.map((landing) => landing.id));
      });

      el.compareSelected.addEventListener("click", compareSelected);

      el.listMode.addEventListener("click", () => {
        mode = "list";
        render();
      });

      el.compareMode.addEventListener("click", compareSelected);

      el.frameSize.addEventListener("change", (event) => {
        frameSize = event.target.value;
        renderFrames();
      });

      el.selectVisible.addEventListener("click", () => {
        for (const landing of filteredLandings()) {
          selected.add(landing.id);
        }
        render();
      });

      el.clearSelected.addEventListener("click", () => {
        selected.clear();
        render();
      });

      window.addEventListener("resize", resizeFrames);

      refreshLandings();
      setInterval(refreshLandings, 5000);
    </script>
  </body>
</html>`;
}

const { categories, landings } = await discoverLandings();
const landingById = new Map(landings.map((landing) => [landing.id, landing]));

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

    if (url.pathname === "/") {
      asHtml(res, dashboardHtml());
      return;
    }

    if (url.pathname === "/api/landings") {
      asJson(res, 200, serializeLandings(landings, categories));
      return;
    }

    if (url.pathname === "/api/start" && req.method === "POST") {
      const body = await readBody(req);
      const ids = Array.isArray(body.ids) ? body.ids : [];
      const result = await startMany(landings, ids);
      asJson(res, result.errors.length ? 207 : 200, {
        ...result,
        catalog: serializeLandings(landings, categories),
      });
      return;
    }

    if (url.pathname.startsWith("/api/start/") && req.method === "POST") {
      const id = decodeURIComponent(url.pathname.replace("/api/start/", ""));
      const landing = landingById.get(id);

      if (!landing) {
        asJson(res, 404, { error: "Landing not found" });
        return;
      }

      try {
        const result = await startLanding(landing);
        asJson(res, 200, result);
      } catch (error) {
        asJson(res, 500, { error: error.message, logs: logs.get(id) || [] });
      }
      return;
    }

    if (url.pathname === "/api/stop" && req.method === "POST") {
      const body = await readBody(req);
      const ids = Array.isArray(body.ids) ? body.ids : [];
      ids.forEach(stopLanding);
      asJson(res, 200, serializeLandings(landings, categories));
      return;
    }

    if (url.pathname.startsWith("/api/logs/")) {
      const id = decodeURIComponent(url.pathname.replace("/api/logs/", ""));
      asJson(res, 200, { id, logs: logs.get(id) || [] });
      return;
    }

    asJson(res, 404, { error: "Not found" });
  } catch (error) {
    asJson(res, 500, { error: error.message });
  }
});

const hubPort = await findFreePort(requestedHubPort, hubHost);

server.listen(hubPort, hubHost, () => {
  const hubUrl = `http://${hubHost}:${hubPort}/`;
  console.log(`Preview hub: ${hubUrl}`);
  console.log(`Landings: ${landings.length}`);
  console.log(`Landing ports: ${landingBasePort}-${landingBasePort + landings.length - 1}`);

  if (shouldStartAll) {
    console.log("Starting all landings...");
    startMany(landings).then(({ errors }) => {
      if (errors.length) {
        console.log(`Started with ${errors.length} errors`);
      } else {
        console.log("All landings are ready");
      }
    });
  }
});

function shutdown(signal) {
  console.log(`Received ${signal}. Stopping preview processes...`);
  for (const state of processes.values()) {
    if (state.child) {
      stopChild(state.child);
    }
  }
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 3000).unref();
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
