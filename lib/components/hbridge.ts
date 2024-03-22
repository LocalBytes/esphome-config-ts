/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hbridge.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hbridge
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { FanFAN_SCHEMA } from "./fan.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { LightRGB_LIGHT_SCHEMA } from "./light.js";

export class HbridgeFan extends BaseComponent<HbridgeFanConfig> {
    componentName: string = "hbridge.fan";
}

export interface HbridgeFanConfig extends FanFAN_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    pin_a: ID;
    pin_b: ID;
    decay_mode?: HbridgeFanConfigDecayMode;
    speed_count?: number;
    enable_pin?: ID;
}

export type HbridgeFanConfigDecayMode = 'SLOW' | 'FAST';

export class HbridgeLight extends BaseComponent<HbridgeLightConfig> {
    componentName: string = "hbridge.light";
}

export interface HbridgeLightConfig extends LightRGB_LIGHT_SCHEMA {
    output_id?: ID;
    pin_a: ID;
    pin_b: ID;
}
