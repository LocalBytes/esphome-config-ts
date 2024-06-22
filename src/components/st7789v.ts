/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7789v.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7789v
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class St7789vDisplay extends BaseComponent<St7789vDisplayConfig> {
    componentName: string = "st7789v.display";
}

export type St7789vDisplayConfigModel = 'TTGO_TDISPLAY_135X240' | 'ADAFRUIT_FUNHOUSE_240X240' | 'ADAFRUIT_RR_280X240' | 'ADAFRUIT_S2_TFT_FEATHER_240X135' | 'CUSTOM';
export type St7789vDisplayConfig = {
        id?: ID;
        model: St7789vDisplayConfigModel;
        reset_pin: Pin;
        dc_pin: Pin;
        backlight_pin?: Pin;
        power_supply?: ID;
        eightbitcolor?: boolean;
        height?: number;
        width?: number;
        offset_height?: number;
        offset_width?: number;
        update_interval?: any;
        spi_id?: ID;
        cs_pin?: Pin;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
