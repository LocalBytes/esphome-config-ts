/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: monochromatic.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/monochromatic
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightBRIGHTNESSONLYLIGHTSCHEMA } from "./light.js";

export class MonochromaticLight extends EsphomeComponent<MonochromaticLightConfig> {
    componentName: string = "monochromatic.light";
}

export interface MonochromaticLightConfig extends LightBRIGHTNESSONLYLIGHTSCHEMA {
    output: ID;
    output_id?: ID;
}
