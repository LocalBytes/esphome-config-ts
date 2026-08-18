/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1325_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1325_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1325SpiDisplay extends EsphomeComponent<Ssd1325SpiDisplayConfig> {
    componentName: string = "ssd1325_spi.display";
}

export type Ssd1325SpiDisplayConfigModel = 'SSD1325_128X32' | 'SSD1325_128X64' | 'SSD1325_96X16' | 'SSD1325_64X48' | 'SSD1327_128X128';
export type Ssd1325SpiDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Ssd1325SpiDisplayConfig = {
        brightness?: any;
        cs_pin?: Pin;
        data_rate?: any;
        dc_pin: Pin;
        external_vcc?: boolean;
        id?: ID;
        model: Ssd1325SpiDisplayConfigModel;
        release_device?: boolean;
        reset_pin?: Pin;
        spi_id?: ID;
        spi_mode?: Ssd1325SpiDisplayConfigSpiMode;
        update_interval?: any;
        lambda?: any;
        pages?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
