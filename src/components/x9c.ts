/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: x9c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/x9c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds } from "./esphome.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";

export class X9cOutput extends EsphomeComponent<X9cOutputConfig> {
    componentName: string = "x9c.output";
}

export type X9cOutputConfigStepDelay = CorePositiveTimePeriodMicroseconds;

export interface X9cOutputConfig extends OutputFLOATOUTPUTSCHEMA {
    cs_pin: Pin;
    id?: ID;
    inc_pin: Pin;
    initial_value?: any;
    step_delay?: X9cOutputConfigStepDelay;
    ud_pin: Pin;
}
