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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1351SpiDisplay extends BaseComponent<Ssd1351SpiDisplayConfig> {
    componentName: string = "ssd1351_spi.display";
}

export type Ssd1351SpiDisplayConfigModel = 'SSD1351_128X96' | 'SSD1351_128X128';
export type Ssd1351SpiDisplayConfig = {
        id?: ID;
        dc_pin: Pin;
        spi_id?: ID;
        cs_pin: Pin;
        model: Ssd1351SpiDisplayConfigModel;
        reset_pin?: Pin;
        brightness?: any;
        update_interval?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
