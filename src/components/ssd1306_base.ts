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
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Ssd1306Base extends EsphomeComponent {
    componentName: string = "ssd1306_base";
}

export type Ssd1306BaseSSD1306SCHEMAModel = 'SSD1306_128X32' | 'SSD1306_128X64' | 'SSD1306_96X16' | 'SSD1306_64X48' | 'SSD1306_64X32' | 'SSD1306_72X40' | 'SH1106_128X32' | 'SH1106_128X64' | 'SH1106_96X16' | 'SH1106_64X48' | 'SH1107_128X64' | 'SH1107_128X128' | 'SSD1305_128X32' | 'SSD1305_128X64';
export type Ssd1306BaseSSD1306SCHEMA = {
        brightness?: any;
        contrast?: any;
        external_vcc?: boolean;
        flip_x?: boolean;
        flip_y?: boolean;
        invert?: boolean;
        model: Ssd1306BaseSSD1306SCHEMAModel;
        offset_x?: number;
        offset_y?: number;
        reset_pin?: Pin;
        update_interval?: any;
    } & DisplayFULLDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
