/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7920.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7920
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class St7920Display extends EsphomeComponent<St7920DisplayConfig> {
    componentName: string = "st7920.display";
}

export type St7920DisplayConfig = {
        id?: ID;
        width: number;
        height: number;
        update_interval?: any;
        spi_id?: ID;
        cs_pin: Pin;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
