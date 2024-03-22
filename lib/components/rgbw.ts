/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rgbw.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rgbw
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { LightRGB_LIGHT_SCHEMA } from "./light.js";

export class RgbwLight extends BaseComponent<RgbwLightConfig> {
    componentName: string = "rgbw.light";
}

export interface RgbwLightConfig extends LightRGB_LIGHT_SCHEMA {
    output_id?: ID;
    red: ID;
    green: ID;
    blue: ID;
    white: ID;
    color_interlock?: boolean;
}
