/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: color.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/color
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Color extends EsphomeComponent<ColorConfig> {
    componentName: string = "color";
}

export interface ColorConfig extends CoreCOMPONENT_SCHEMA {
    id: string;
    red?: any;
    red_int?: number;
    green?: any;
    green_int?: number;
    blue?: any;
    blue_int?: number;
    white?: any;
    white_int?: number;
    hex: string;
}
