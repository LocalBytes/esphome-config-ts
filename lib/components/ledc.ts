/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ledc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ledc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class LedcOutput extends BaseComponent<LedcOutputConfig> {
    componentName: string = "ledc.output";
}

export interface LedcOutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id: string;
    pin: Pin;
    frequency?: any;
    channel?: number;
}
