export function ucfirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toCamelCase(str: string): string {
    return str.replace(/[-_.]+([a-zA-Z0-9])/g, g => g[g.length - 1].toUpperCase())
}

export function toUpperCamelCase(str: string): string {
    return ucfirst(toCamelCase(str));
}

export function fileNameFromComponent(str: string): string {
    let file = str.split(".")[0];
// console.log(file)
    if (file == "core") {
        file = "esphome"
    }

    return file;

}

export type ArrayMaybe<T> = T | T[];

export function ensureArray<TValue>(value: ArrayMaybe<TValue>): TValue[] {
    return Array.isArray(value) ? value : [value];
}

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
}

export function isNumeric(str: any): boolean {
    if (typeof str != "string") return false // we only process strings!
    // @ts-ignore
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export function makeHeader(file?: string): string {
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
 * © Allport-IT Ltd (t/a Local Bytes)
 **/`;

    return header;
}
