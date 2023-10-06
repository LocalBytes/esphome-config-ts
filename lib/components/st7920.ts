/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7920.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7920
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class St7920Display extends BaseComponent<St7920DisplayConfig> {
    componentName: string = "st7920.display";
}

export interface St7920DisplayConfig extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    width: number;
    height: number;
    update_interval?: any;
    spi_id?: ID;
    cs_pin: Pin;
}
