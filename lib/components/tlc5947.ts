/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tlc5947.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tlc5947
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Tlc5947 extends BaseComponent<Tlc5947Config> {
    componentName: string = "tlc5947";
}

export interface Tlc5947Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    data_pin: Pin;
    clock_pin: Pin;
    lat_pin: Pin;
    oe_pin?: Pin;
    num_chips?: number;
}

export class Tlc5947Output extends BaseComponent<Tlc5947OutputConfig> {
    componentName: string = "tlc5947.output";
}

export interface Tlc5947OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    tlc5947_id?: ID;
    id: string;
    channel: number;
}
