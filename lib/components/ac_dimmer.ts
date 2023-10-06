/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ac_dimmer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ac_dimmer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AcDimmerOutput extends BaseComponent<AcDimmerOutputConfig> {
    componentName: string = "ac_dimmer.output";
}

export interface AcDimmerOutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id: string;
    gate_pin: Pin;
    zero_cross_pin: Pin;
    init_with_half_cycle?: boolean;
    method?: AcDimmerOutputConfigMethod;
}

export type AcDimmerOutputConfigMethod = 'LEADING_PULSE' | 'LEADING' | 'TRAILING';
