/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1331_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1331_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1331SpiDisplay extends BaseComponent<Ssd1331SpiDisplayConfig> {
    componentName: string = "ssd1331_spi.display";
}

export interface Ssd1331SpiDisplayConfig extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    dc_pin: Pin;
    spi_id?: ID;
    cs_pin: Pin;
    reset_pin?: Pin;
    brightness?: any;
    update_interval?: any;
}
