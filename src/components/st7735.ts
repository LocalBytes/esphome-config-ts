/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7735.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7735
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class St7735Display extends EsphomeComponent<St7735DisplayConfig> {
    componentName: string = "st7735.display";
}

export type St7735DisplayConfigModel = 'INITR_GREENTAB' | 'INITR_REDTAB' | 'INITR_BLACKTAB' | 'INITR_MINI160X80' | 'INITR_18BLACKTAB' | 'INITR_18REDTAB';
export type St7735DisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type St7735DisplayConfig = {
        col_start: number;
        cs_pin: Pin;
        data_rate?: any;
        dc_pin: Pin;
        device_height: number;
        device_width: number;
        eight_bit_color?: boolean;
        id?: ID;
        invert_colors?: boolean;
        model: St7735DisplayConfigModel;
        release_device?: boolean;
        reset_pin?: Pin;
        row_start: number;
        spi_id?: ID;
        spi_mode?: St7735DisplayConfigSpiMode;
        update_interval?: any;
        use_bgr?: boolean;
    } & DisplayFULLDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
