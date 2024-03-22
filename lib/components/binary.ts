/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: binary.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/binary
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { FanFAN_SCHEMA } from "./fan.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { LightBINARY_LIGHT_SCHEMA } from "./light.js";

export class BinaryFan extends BaseComponent<BinaryFanConfig> {
    componentName: string = "binary.fan";
}

export interface BinaryFanConfig extends FanFAN_SCHEMA, CoreCOMPONENT_SCHEMA {
    output_id?: ID;
    output: ID;
    direction_output?: ID;
    oscillation_output?: ID;
}

export class BinaryLight extends BaseComponent<BinaryLightConfig> {
    componentName: string = "binary.light";
}

export interface BinaryLightConfig extends LightBINARY_LIGHT_SCHEMA {
    output_id?: ID;
    output: ID;
}
