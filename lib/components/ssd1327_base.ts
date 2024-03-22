/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1327_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1327_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Ssd1327Base extends BaseComponent {
    componentName: string = "ssd1327_base";
}

export interface Ssd1327BaseSSD1327_SCHEMA extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    model: Ssd1327BaseSSD1327_SCHEMAModel;
    reset_pin?: Pin;
    brightness?: any;
    update_interval?: any;
}

export type Ssd1327BaseSSD1327_SCHEMAModel = 'SSD1327_128X128';
