/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1351_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1351_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1351SpiDisplay extends BaseComponent<Ssd1351SpiDisplayConfig> {
    componentName: string = "ssd1351_spi.display";
}

export interface Ssd1351SpiDisplayConfig extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    dc_pin: Pin;
    spi_id?: ID;
    cs_pin: Pin;
    model: Ssd1351SpiDisplayConfigModel;
    reset_pin?: Pin;
    brightness?: any;
    update_interval?: any;
}

export type Ssd1351SpiDisplayConfigModel = 'SSD1351_128X96' | 'SSD1351_128X128';
