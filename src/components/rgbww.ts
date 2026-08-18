/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rgbww.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rgbww
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightRGB_LIGHT_SCHEMA } from "./light.js";

export class RgbwwLight extends EsphomeComponent<RgbwwLightConfig> {
    componentName: string = "rgbww.light";
}

export interface RgbwwLightConfig extends LightRGB_LIGHT_SCHEMA {
    blue: ID;
    cold_white: ID;
    cold_white_color_temperature?: any;
    color_interlock?: boolean;
    constant_brightness?: boolean;
    green: ID;
    output_id?: ID;
    red: ID;
    warm_white: ID;
    warm_white_color_temperature?: any;
}
