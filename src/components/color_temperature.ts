/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: color_temperature.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/color_temperature
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightRGBLIGHTSCHEMA } from "./light.js";

export class ColorTemperatureLight extends EsphomeComponent<ColorTemperatureLightConfig> {
    componentName: string = "color_temperature.light";
}

export interface ColorTemperatureLightConfig extends LightRGBLIGHTSCHEMA {
    brightness: ID;
    cold_white_color_temperature: string;
    color_temperature: ID;
    output_id?: ID;
    warm_white_color_temperature: string;
}
