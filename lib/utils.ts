export function ucfirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toCamelCase(str: string) {
    return str.replace(/[-_.]([a-z])/g, g => g[1].toUpperCase())
}

export function toUpperCamelCase(str: string) {
    return ucfirst(toCamelCase(str));
}

export function fileNameFromComponent(str: string) {
    let file = str.split(".")[0];
// console.log(file)
    if (file == "core") {
        file = "esphome"
    }

    return file;

}

export function ensureArray<TValue>(value: TValue | TValue[]): TValue[] {
    return Array.isArray(value) ? value : [value];
}

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
}

export function isNumeric(str: any) {
    if (typeof str != "string") return false // we only process strings!
    // @ts-ignore
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export function makeHeader(file?: string) {
    let header = `/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * `;

    if (file) {
        header += `
 * Schema: ${file} 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/${file.replace(".json", "")}
 * `;
    }

    header += `
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/`;

    return header;
}
