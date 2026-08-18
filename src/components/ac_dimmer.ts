/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ac_dimmer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ac_dimmer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AcDimmerOutput extends EsphomeComponent<AcDimmerOutputConfig> {
    componentName: string = "ac_dimmer.output";
}

export type AcDimmerOutputConfigMethod = 'LEADING_PULSE' | 'LEADING' | 'TRAILING';
export type AcDimmerOutputConfigZeroCrossInterruptType = 'RISING' | 'FALLING' | 'ANY';
export type AcDimmerOutputConfig = {
        gate_pin: Pin;
        id: string;
        init_with_half_cycle?: boolean;
        method?: AcDimmerOutputConfigMethod;
        zero_cross_interrupt_type?: AcDimmerOutputConfigZeroCrossInterruptType;
        zero_cross_pin: Pin;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
