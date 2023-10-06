/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1322_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1322_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1322SpiDisplay extends BaseComponent<Ssd1322SpiDisplayConfig> {
    componentName: string = "ssd1322_spi.display";
}

export interface Ssd1322SpiDisplayConfig extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    dc_pin: Pin;
    spi_id?: ID;
    cs_pin?: Pin;
    model: Ssd1322SpiDisplayConfigModel;
    reset_pin?: Pin;
    brightness?: any;
    external_vcc?: boolean;
    update_interval?: any;
}

export type Ssd1322SpiDisplayConfigModel = 'SSD1322_256X64';
