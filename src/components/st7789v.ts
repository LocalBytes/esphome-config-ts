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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class St7789vDisplay extends EsphomeComponent<St7789vDisplayConfig> {
    componentName: string = "st7789v.display";
}

export type St7789vDisplayConfigModel = 'TTGO_TDISPLAY_135X240' | 'ADAFRUIT_FUNHOUSE_240X240' | 'ADAFRUIT_RR_280X240' | 'ADAFRUIT_S2_TFT_FEATHER_240X135' | 'LILYGO_T-EMBED_170X320' | 'WAVESHARE_1.47IN_172X320' | 'CUSTOM';
export type St7789vDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type St7789vDisplayConfig = {
        backlight_pin?: Pin;
        cs_pin?: Pin;
        data_rate?: any;
        dc_pin?: Pin;
        eightbitcolor?: boolean;
        height?: number;
        id?: ID;
        model: St7789vDisplayConfigModel;
        offset_height?: number;
        offset_width?: number;
        power_supply?: ID;
        release_device?: boolean;
        reset_pin?: Pin;
        spi_id?: ID;
        spi_mode?: St7789vDisplayConfigSpiMode;
        update_interval?: any;
        width?: number;
        lambda?: any;
        pages?: any;
    } & DisplayFULLDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
