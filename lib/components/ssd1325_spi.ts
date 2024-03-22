/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1325_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1325_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1325SpiDisplay extends BaseComponent<Ssd1325SpiDisplayConfig> {
    componentName: string = "ssd1325_spi.display";
}

export interface Ssd1325SpiDisplayConfig extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    dc_pin: Pin;
    spi_id?: ID;
    cs_pin?: Pin;
    model: Ssd1325SpiDisplayConfigModel;
    reset_pin?: Pin;
    brightness?: any;
    external_vcc?: boolean;
    update_interval?: any;
}

export type Ssd1325SpiDisplayConfigModel = 'SSD1325_128X32' | 'SSD1325_128X64' | 'SSD1325_96X16' | 'SSD1325_64X48' | 'SSD1327_128X128';
