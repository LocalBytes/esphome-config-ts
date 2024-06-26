/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1306_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1306_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Ssd1306Base extends EsphomeComponent {
    componentName: string = "ssd1306_base";
}

export type Ssd1306BaseSSD1306_SCHEMAModel = 'SSD1306_128X32' | 'SSD1306_128X64' | 'SSD1306_96X16' | 'SSD1306_64X48' | 'SSD1306_64X32' | 'SSD1306_72X40' | 'SH1106_128X32' | 'SH1106_128X64' | 'SH1106_96X16' | 'SH1106_64X48' | 'SH1107_128X64' | 'SSD1305_128X32' | 'SSD1305_128X64';
export type Ssd1306BaseSSD1306_SCHEMA = {
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
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
