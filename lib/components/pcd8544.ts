/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pcd8544.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pcd8544
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pcd8544Display extends BaseComponent<Pcd8544DisplayConfig> {
    componentName: string = "pcd8544.display";
}

export interface Pcd8544DisplayConfig extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    dc_pin: Pin;
    reset_pin: Pin;
    cs_pin: Pin;
    contrast?: number;
    update_interval?: any;
    spi_id?: ID;
}
