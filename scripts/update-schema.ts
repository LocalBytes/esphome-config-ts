import AdmZip from "adm-zip";
import * as fs from "node:fs";
import * as path from "node:path";

const version = process.argv[2] ?? "dev";
const url = `https://schema.esphome.io/${version}/schema.zip`;
const dest = path.join("src", "components", "source");

console.log(`Fetching schema ${version} from ${url}...`);

const response = await fetch(url);
if (!response.ok) {
    console.error(`Failed to fetch schema: ${response.status} ${response.statusText}`);
    process.exit(1);
}

const buffer = Buffer.from(await response.arrayBuffer());
const zip = new AdmZip(buffer);

fs.rmSync(dest, {recursive: true, force: true});
fs.mkdirSync(dest, {recursive: true});

let count = 0;
for (const entry of zip.getEntries()) {
    const name = entry.entryName;
    if (!name.startsWith("schema/") || !name.endsWith(".json") || entry.isDirectory) {
        continue;
    }
    const outPath = path.join(dest, path.basename(name));
    fs.writeFileSync(outPath, entry.getData());
    count++;
}

console.log(`Extracted ${count} schema files to ${dest}`);
