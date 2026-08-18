/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: packages.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/packages
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Packages extends EsphomeComponent<PackagesConfig> {
    componentName: string = "packages";
}

export type PackagesConfigString = PackagesPACKAGESCHEMA;

export interface PackagesConfig extends PackagesPACKAGESCHEMA {
    string: PackagesConfigString;
}

export type PackagesPACKAGESCHEMAFilesVars = Record<string, string>;

export interface PackagesPACKAGESCHEMAFiles {
    path: string;
    vars: PackagesPACKAGESCHEMAFilesVars;
}

export interface PackagesPACKAGESCHEMA {
    file?: any;
    files?: PackagesPACKAGESCHEMAFiles[];
    password?: string;
    path?: string;
    ref?: any;
    refresh?: string;
    url: string;
    username?: string;
}
