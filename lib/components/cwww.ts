/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cwww.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cwww
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { LightRGB_LIGHT_SCHEMA } from "./light.js";

export class CwwwLight extends BaseComponent<CwwwLightConfig> {
    componentName: string = "cwww.light";
}

export interface CwwwLightConfig extends LightRGB_LIGHT_SCHEMA {
    output_id?: ID;
    cold_white: ID;
    warm_white: ID;
    cold_white_color_temperature?: any;
    warm_white_color_temperature?: any;
    constant_brightness?: boolean;
}
