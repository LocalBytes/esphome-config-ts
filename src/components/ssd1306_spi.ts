/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1306_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1306_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Ssd1306BaseSSD1306_SCHEMA } from "./ssd1306_base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1306SpiDisplay extends EsphomeComponent<Ssd1306SpiDisplayConfig> {
    componentName: string = "ssd1306_spi.display";
}

export type Ssd1306SpiDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Ssd1306SpiDisplayConfig = {
        cs_pin: Pin;
        data_rate?: any;
        dc_pin: Pin;
        id?: ID;
        release_device?: boolean;
        spi_id?: ID;
        spi_mode?: Ssd1306SpiDisplayConfigSpiMode;
    } & Ssd1306BaseSSD1306_SCHEMA & CoreCOMPONENT_SCHEMA;
