/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: globals.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/globals
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Globals extends BaseComponent<GlobalsConfig> {
    componentName: string = "globals";
}

export interface GlobalsConfig extends CoreCOMPONENT_SCHEMA {
    id: string;
    type: string;
    initial_value?: string;
    restore_value?: boolean;
}
