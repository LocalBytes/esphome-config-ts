/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tlc59208f.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tlc59208f
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Tlc59208f extends EsphomeComponent<Tlc59208fConfig> {
    componentName: string = "tlc59208f";
}

export interface Tlc59208fConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    i2c_id?: ID;
    address?: any;
}

export class Tlc59208fOutput extends EsphomeComponent<Tlc59208fOutputConfig> {
    componentName: string = "tlc59208f.output";
}

export interface Tlc59208fOutputConfig extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    tlc59208f_id?: ID;
    channel: number;
}
