/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: speed.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/speed
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { FanFAN_SCHEMA } from "./fan.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SpeedFan extends BaseComponent<SpeedFanConfig> {
    componentName: string = "speed.fan";
}

export interface SpeedFanConfig extends FanFAN_SCHEMA, CoreCOMPONENT_SCHEMA {
    output_id?: ID;
    output: ID;
    oscillation_output?: ID;
    direction_output?: ID;
    speed_count?: number;
}
