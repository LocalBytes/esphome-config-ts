/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1351_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1351_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ssd1351SpiDisplay extends EsphomeComponent<Ssd1351SpiDisplayConfig> {
    componentName: string = "ssd1351_spi.display";
}

export type Ssd1351SpiDisplayConfigModel = 'SSD1351_128X96' | 'SSD1351_128X128';
export type Ssd1351SpiDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Ssd1351SpiDisplayConfig = {
        brightness?: any;
        cs_pin: Pin;
        data_rate?: any;
        dc_pin: Pin;
        id?: ID;
        model: Ssd1351SpiDisplayConfigModel;
        release_device?: boolean;
        reset_pin?: Pin;
        spi_id?: ID;
        spi_mode?: Ssd1351SpiDisplayConfigSpiMode;
        update_interval?: any;
        lambda?: any;
        pages?: any;
    } & DisplayFULLDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
