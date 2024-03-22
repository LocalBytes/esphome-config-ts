/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: servo.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/servo
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Servo extends BaseComponent<ServoConfig> {
    componentName: string = "servo";
}

export interface ServoConfig extends CoreCOMPONENT_SCHEMA {
    id: string;
    output: ID;
    min_level?: any;
    idle_level?: any;
    max_level?: any;
    restore?: boolean;
    auto_detach_time?: ServoConfigAutoDetachTime;
    transition_length?: ServoConfigTransitionLength;
}

export interface ServoConfigAutoDetachTime extends CorePositiveTimePeriodMilliseconds {
}

export interface ServoConfigTransitionLength extends CorePositiveTimePeriodMilliseconds {
}
