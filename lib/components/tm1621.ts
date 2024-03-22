/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tm1621.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tm1621
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tm1621Display extends BaseComponent<Tm1621DisplayConfig> {
    componentName: string = "tm1621.display";
}

export interface Tm1621DisplayConfig extends DisplayBASIC_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    cs_pin: Pin;
    data_pin: Pin;
    read_pin: Pin;
    write_pin: Pin;
    update_interval?: any;
}
