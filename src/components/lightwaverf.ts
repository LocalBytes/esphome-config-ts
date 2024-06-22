/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lightwaverf.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lightwaverf
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Lightwaverf extends EsphomeComponent<LightwaverfConfig> {
    componentName: string = "lightwaverf";
}

export interface LightwaverfConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    read_pin?: Pin;
    write_pin?: Pin;
    update_interval?: any;
}
