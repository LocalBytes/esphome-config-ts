/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: servo.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/servo
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Servo extends EsphomeComponent<ServoConfig> {
    componentName: string = "servo";
}

export type ServoConfigAutoDetachTime = CorePositiveTimePeriodMilliseconds;
export type ServoConfigTransitionLength = CorePositiveTimePeriodMilliseconds;

export interface ServoConfig extends CoreCOMPONENTSCHEMA {
    auto_detach_time?: ServoConfigAutoDetachTime;
    id: string;
    idle_level?: any;
    max_level?: any;
    min_level?: any;
    output: ID;
    restore?: boolean;
    transition_length?: ServoConfigTransitionLength;
}
