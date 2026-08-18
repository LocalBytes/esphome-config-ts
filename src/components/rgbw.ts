/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rgbw.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rgbw
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightRGB_LIGHT_SCHEMA } from "./light.js";

export class RgbwLight extends EsphomeComponent<RgbwLightConfig> {
    componentName: string = "rgbw.light";
}

export interface RgbwLightConfig extends LightRGB_LIGHT_SCHEMA {
    blue: ID;
    color_interlock?: boolean;
    green: ID;
    output_id?: ID;
    red: ID;
    white: ID;
}
