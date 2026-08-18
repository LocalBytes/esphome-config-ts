/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tlc5947.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tlc5947
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Tlc5947 extends EsphomeComponent<Tlc5947Config> {
    componentName: string = "tlc5947";
}

export interface Tlc5947Config extends CoreCOMPONENT_SCHEMA {
    clock_pin: Pin;
    data_pin: Pin;
    id?: ID;
    lat_pin: Pin;
    num_chips?: number;
    oe_pin?: Pin;
}

export class Tlc5947Output extends EsphomeComponent<Tlc5947OutputConfig> {
    componentName: string = "tlc5947.output";
}

export type Tlc5947OutputConfig = {
        channel: number;
        id: string;
        tlc5947_id?: ID;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
