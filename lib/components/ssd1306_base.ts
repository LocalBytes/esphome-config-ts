/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1306_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1306_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Ssd1306Base extends BaseComponent {
    componentName: string = "ssd1306_base";
}

export interface Ssd1306BaseSSD1306_SCHEMA extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    model: Ssd1306BaseSSD1306_SCHEMAModel;
    reset_pin?: Pin;
    brightness?: any;
    contrast?: any;
    external_vcc?: boolean;
    flip_x?: boolean;
    flip_y?: boolean;
    offset_x?: number;
    offset_y?: number;
    invert?: boolean;
    update_interval?: any;
}

export type Ssd1306BaseSSD1306_SCHEMAModel = 'SSD1306_128X32' | 'SSD1306_128X64' | 'SSD1306_96X16' | 'SSD1306_64X48' | 'SSD1306_64X32' | 'SSD1306_72X40' | 'SH1106_128X32' | 'SH1106_128X64' | 'SH1106_96X16' | 'SH1106_64X48' | 'SH1107_128X64' | 'SSD1305_128X32' | 'SSD1305_128X64';
