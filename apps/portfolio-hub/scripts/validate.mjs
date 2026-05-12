import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const landings = JSON.parse(await readFile(path.join(rootDir, "data", "landings.json"), "utf8"));

if (!Array.isArray(landings) || landings.length === 0) {
  throw new Error("data/landings.json must contain at least one landing");
}

const ids = new Set();

for (const landing of landings) {
  for (const key of ["id", "title", "category", "summary", "rootDirectory", "projectName"]) {
    if (!landing[key]) {
      throw new Error(`Landing ${landing.id || "(missing id)"} is missing ${key}`);
    }
  }

  if (ids.has(landing.id)) {
    throw new Error(`Duplicated landing id: ${landing.id}`);
  }

  ids.add(landing.id);

  if (landing.publicUrl && !landing.publicUrl.startsWith("https://")) {
    throw new Error(`Landing ${landing.id} publicUrl must be https://`);
  }
}

await access(path.join(rootDir, "index.html"));
console.log(`Validated ${landings.length} portfolio landings.`);
