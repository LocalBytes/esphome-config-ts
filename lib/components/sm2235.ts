/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm2235.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm2235
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { Sm10bitBaseSM10BIT_BASE_CONFIG_SCHEMA } from "./sm10bit_base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sm2235 extends BaseComponent<Sm2235Config> {
    componentName: string = "sm2235";
}

export interface Sm2235Config extends Sm10bitBaseSM10BIT_BASE_CONFIG_SCHEMA {
    id?: ID;
}

export class Sm2235Output extends BaseComponent<Sm2235OutputConfig> {
    componentName: string = "sm2235.output";
}

export interface Sm2235OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    sm2235_id?: ID;
    id: string;
    channel: number;
}
