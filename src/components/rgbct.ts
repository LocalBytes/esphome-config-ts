/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rgbct.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rgbct
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightRGBLIGHTSCHEMA } from "./light.js";

export class RgbctLight extends EsphomeComponent<RgbctLightConfig> {
    componentName: string = "rgbct.light";
}

export interface RgbctLightConfig extends LightRGBLIGHTSCHEMA {
    blue: ID;
    cold_white_color_temperature: string;
    color_interlock?: boolean;
    color_temperature: ID;
    green: ID;
    output_id?: ID;
    red: ID;
    warm_white_color_temperature: string;
    white_brightness: ID;
}
