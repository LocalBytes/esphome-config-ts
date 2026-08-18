/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cwww.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cwww
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightRGBLIGHTSCHEMA } from "./light.js";

export class CwwwLight extends EsphomeComponent<CwwwLightConfig> {
    componentName: string = "cwww.light";
}

export interface CwwwLightConfig extends LightRGBLIGHTSCHEMA {
    cold_white: ID;
    cold_white_color_temperature?: any;
    constant_brightness?: boolean;
    output_id?: ID;
    warm_white: ID;
    warm_white_color_temperature?: any;
}
