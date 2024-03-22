/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rgbct.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rgbct
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { LightRGB_LIGHT_SCHEMA } from "./light.js";

export class RgbctLight extends BaseComponent<RgbctLightConfig> {
    componentName: string = "rgbct.light";
}

export interface RgbctLightConfig extends LightRGB_LIGHT_SCHEMA {
    output_id?: ID;
    red: ID;
    green: ID;
    blue: ID;
    color_temperature: ID;
    white_brightness: ID;
    cold_white_color_temperature: string;
    warm_white_color_temperature: string;
    color_interlock?: boolean;
}
