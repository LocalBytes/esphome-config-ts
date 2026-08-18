/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1331_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1331_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1331SpiDisplay extends EsphomeComponent<Ssd1331SpiDisplayConfig> {
    componentName: string = "ssd1331_spi.display";
}

export type Ssd1331SpiDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Ssd1331SpiDisplayConfig = {
        brightness?: any;
        cs_pin: Pin;
        data_rate?: any;
        dc_pin: Pin;
        id?: ID;
        release_device?: boolean;
        reset_pin?: Pin;
        spi_id?: ID;
        spi_mode?: Ssd1331SpiDisplayConfigSpiMode;
        update_interval?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
