/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: color_temperature.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/color_temperature
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { LightRGB_LIGHT_SCHEMA } from "./light.js";

export class ColorTemperatureLight extends BaseComponent<ColorTemperatureLightConfig> {
    componentName: string = "color_temperature.light";
}

export interface ColorTemperatureLightConfig extends LightRGB_LIGHT_SCHEMA {
    output_id?: ID;
    color_temperature: ID;
    brightness: ID;
    cold_white_color_temperature: string;
    warm_white_color_temperature: string;
}
