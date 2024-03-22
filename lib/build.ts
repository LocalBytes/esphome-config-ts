import {Project} from "ts-morph";
import * as fs from "fs";
import {generateClass, handleIndex} from "./generators.js";
import {makeHeader} from "./utils.js";


let project = new Project({
    tsConfigFilePath: "./tsconfig.json",
});

let totals = {
    all: 0, files: 0, classes: 0, errors: 0,
}


// let files = ['esphome.json'];
let files = fs.readdirSync("./lib/components/source");

handleIndex(project.getSourceFileOrThrow("./lib/base.ts"));
files.forEach(file => {
    totals.all++;
    if (!file.endsWith(".json")) {
        return;
    }
    const outName = file.replace(".json", "");

    let config = JSON.parse(fs.readFileSync(`./lib/components/source/${file}`, "utf-8"));

    if (Object.entries(config ?? {}).length === 0) {
        console.warn(`Skipping ${file} as it has no config.`);
        return;
    }

    let source = project.createSourceFile(`./lib/components/${outName}.ts`, makeHeader(file), {overwrite: true});
    totals.files++;

    console.debug(`Generating ${file}...`);

    source.addImportDeclaration({namedImports: ["ID", "Pin"], moduleSpecifier: "../base.js", isTypeOnly: true})
    source.addImportDeclaration({namedImports: ["BaseComponent"], moduleSpecifier: "../base.js"})

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

    project.saveSync();
});

console.log(totals);
