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

export type PackagesConfigString = PackagesPACKAGE_SCHEMA;

export interface PackagesConfig extends PackagesPACKAGE_SCHEMA {
    string: PackagesConfigString;
}

export type PackagesPACKAGE_SCHEMAFilesVars = Record<string, string>;

export interface PackagesPACKAGE_SCHEMAFiles {
    path: string;
    vars: PackagesPACKAGE_SCHEMAFilesVars;
}

export interface PackagesPACKAGE_SCHEMA {
    file?: any;
    files?: PackagesPACKAGE_SCHEMAFiles[];
    password?: string;
    path?: string;
    ref?: any;
    refresh?: string;
    url: string;
    username?: string;
}
