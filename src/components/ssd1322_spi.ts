/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1322_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1322_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1322SpiDisplay extends EsphomeComponent<Ssd1322SpiDisplayConfig> {
    componentName: string = "ssd1322_spi.display";
}

export type Ssd1322SpiDisplayConfigModel = 'SSD1322_256X64';
export type Ssd1322SpiDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Ssd1322SpiDisplayConfig = {
        brightness?: any;
        cs_pin?: Pin;
        data_rate?: any;
        dc_pin: Pin;
        external_vcc?: boolean;
        id?: ID;
        model: Ssd1322SpiDisplayConfigModel;
        release_device?: boolean;
        reset_pin?: Pin;
        spi_id?: ID;
        spi_mode?: Ssd1322SpiDisplayConfigSpiMode;
        update_interval?: any;
        lambda?: any;
        pages?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
