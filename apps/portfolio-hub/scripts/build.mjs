import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

await import("./validate.mjs");

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of ["index.html", "styles.css", "app.js", "data"]) {
  await cp(path.join(rootDir, entry), path.join(distDir, entry), {
    recursive: true,
  });
}

console.log("Built portfolio hub to dist/.");
