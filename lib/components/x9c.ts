/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: x9c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/x9c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class X9cOutput extends BaseComponent<X9cOutputConfig> {
    componentName: string = "x9c.output";
}

export interface X9cOutputConfig extends OutputFLOAT_OUTPUT_SCHEMA {
    id?: ID;
    cs_pin: Pin;
    inc_pin: Pin;
    ud_pin: Pin;
    initial_value?: any;
}
