/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7735.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7735
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class St7735Display extends BaseComponent<St7735DisplayConfig> {
    componentName: string = "st7735.display";
}

export interface St7735DisplayConfig extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    dc_pin: Pin;
    device_width: number;
    device_height: number;
    col_start: number;
    row_start: number;
    eight_bit_color?: boolean;
    use_bgr?: boolean;
    invert_colors?: boolean;
    spi_id?: ID;
    cs_pin: Pin;
    model: St7735DisplayConfigModel;
    reset_pin?: Pin;
    update_interval?: any;
}

export type St7735DisplayConfigModel = 'INITR_GREENTAB' | 'INITR_REDTAB' | 'INITR_BLACKTAB' | 'INITR_MINI160X80' | 'INITR_18BLACKTAB' | 'INITR_18REDTAB';
