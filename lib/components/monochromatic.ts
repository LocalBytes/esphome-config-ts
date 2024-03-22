/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: monochromatic.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/monochromatic
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { LightBRIGHTNESS_ONLY_LIGHT_SCHEMA } from "./light.js";

export class MonochromaticLight extends BaseComponent<MonochromaticLightConfig> {
    componentName: string = "monochromatic.light";
}

export interface MonochromaticLightConfig extends LightBRIGHTNESS_ONLY_LIGHT_SCHEMA {
    output_id?: ID;
    output: ID;
}
