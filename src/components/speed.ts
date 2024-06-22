/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: speed.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/speed
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { FanFAN_SCHEMA } from "./fan.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SpeedFan extends BaseComponent<SpeedFanConfig> {
    componentName: string = "speed.fan";
}

export type SpeedFanConfig = {
        output_id?: ID;
        output: ID;
        oscillation_output?: ID;
        direction_output?: ID;
        speed_count?: number;
    } & FanFAN_SCHEMA & CoreCOMPONENT_SCHEMA;
