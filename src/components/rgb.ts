/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rgb.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rgb
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightRGBLIGHTSCHEMA } from "./light.js";

export class RgbLight extends EsphomeComponent<RgbLightConfig> {
    componentName: string = "rgb.light";
}

export interface RgbLightConfig extends LightRGBLIGHTSCHEMA {
    blue: ID;
    green: ID;
    output_id?: ID;
    red: ID;
}
