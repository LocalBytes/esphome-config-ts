/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tm1621.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tm1621
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tm1621Display extends EsphomeComponent<Tm1621DisplayConfig> {
    componentName: string = "tm1621.display";
}

export type Tm1621DisplayConfig = {
        id?: ID;
        cs_pin: Pin;
        data_pin: Pin;
        read_pin: Pin;
        write_pin: Pin;
        update_interval?: any;
    } & DisplayBASIC_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
