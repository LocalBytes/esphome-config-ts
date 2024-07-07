import * as fs from "node:fs";
import * as Path from "node:path";

import {Project} from "ts-morph";

import {generateClass, handleIndex} from "./generators.js";
import {makeHeader} from "../lib/utils.js";

const srcPath = (path: string | Array<string>) => Path.join("./src", ...(Array.isArray(path) ? path : [path]));

let project = new Project({
    tsConfigFilePath: "./tsconfig.json",
});

let totals = {
    all: 0, files: 0, classes: 0, errors: 0,
}

// let files = ['esphome.json'];
let files = fs.readdirSync(srcPath("components/source"));

handleIndex(project.getSourceFileOrThrow(srcPath("./lib/base.ts")));

let barrel = project.createSourceFile(
    srcPath("./components/index.ts"),
    "// This file is generated, do not edit it manually.",
    {overwrite: true}
);

files.forEach(file => {
    totals.all++;
    if (!file.endsWith(".json")) {
        return;
    }
    const outName = file.replace(".json", "");

    let config = JSON.parse(fs.readFileSync(srcPath(`./components/source/${file}`), "utf-8"));

    if (Object.entries(config ?? {}).length === 0) {
        console.warn(`Skipping ${file} as it has no config.`);
        return;
    }

    let source = project.createSourceFile(srcPath(`./components/${outName}.ts`), makeHeader(file), {overwrite: true});
    totals.files++;

    console.debug(`Generating ${file}...`);

    source.addImportDeclaration({
        moduleSpecifier: "@/lib/base.js",
        namedImports: [
            {name: "ID", isTypeOnly: true},
            {name: "Pin", isTypeOnly: true},
            {name: "EsphomeComponent"}
        ],
    })

    Object.entries(config).forEach(([key, value]) => {

        try {
            generateClass(source, key, value);
            totals.classes++;
        } catch (e) {
            console.error(`Error generating ${key}`, e);
            totals.errors++;

            //Re-throw to stop the build whilst we're developing, remove this when we're done.
            throw e;
        }
    });

    barrel.addExportDeclaration({moduleSpecifier: `./${outName}.js`});
    project.saveSync();
});

console.log(totals);
