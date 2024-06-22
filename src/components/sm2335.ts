/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm2335.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm2335
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { Sm10bitBaseSM10BIT_BASE_CONFIG_SCHEMA } from "./sm10bit_base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sm2335 extends BaseComponent<Sm2335Config> {
    componentName: string = "sm2335";
}

export interface Sm2335Config extends Sm10bitBaseSM10BIT_BASE_CONFIG_SCHEMA {
    id?: ID;
}

export class Sm2335Output extends BaseComponent<Sm2335OutputConfig> {
    componentName: string = "sm2335.output";
}

export type Sm2335OutputConfig = {
        sm2335_id?: ID;
        id: string;
        channel: number;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
