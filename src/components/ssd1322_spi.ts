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
export type Ssd1322SpiDisplayConfig = {
        id?: ID;
        dc_pin: Pin;
        spi_id?: ID;
        cs_pin?: Pin;
        model: Ssd1322SpiDisplayConfigModel;
        reset_pin?: Pin;
        brightness?: any;
        external_vcc?: boolean;
        update_interval?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
