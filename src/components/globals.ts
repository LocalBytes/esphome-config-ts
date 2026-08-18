/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: globals.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/globals
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Globals extends EsphomeComponent<GlobalsConfig> {
    componentName: string = "globals";
}

export interface GlobalsConfig extends CoreCOMPONENT_SCHEMA {
    id: string;
    initial_value?: string;
    max_restore_data_length?: number;
    restore_value?: boolean;
    type: string;
}
