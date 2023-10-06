/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm2335.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm2335
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { Sm10bitBaseSM10BIT_BASE_CONFIG_SCHEMA } from "./sm10bit_base.js";
import { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sm2335 extends BaseComponent<Sm2335Config> {
    componentName: string = "sm2335";
}

export interface Sm2335Config extends Sm10bitBaseSM10BIT_BASE_CONFIG_SCHEMA {
    id?: ID;
}

export class Sm2335Output extends BaseComponent<Sm2335OutputConfig> {
    componentName: string = "sm2335.output";
}

export interface Sm2335OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    sm2335_id?: ID;
    id: string;
    channel: number;
}
