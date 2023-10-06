/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: packages.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/packages
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";

export class Packages extends BaseComponent<PackagesConfig> {
    componentName: string = "packages";
}

export interface PackagesConfig {
    string: PackagesConfigString;
}

export interface PackagesConfigString {
    url: string;
    username?: string;
    password?: string;
    file?: any;
    files?: any[];
    ref?: any;
    refresh?: string;
}
