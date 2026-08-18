/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wiegand.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wiegand
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Wiegand extends EsphomeComponent<WiegandConfig> {
    componentName: string = "wiegand";
}

export interface WiegandConfig extends CoreCOMPONENT_SCHEMA {
    d0: Pin;
    d1: Pin;
    id?: ID;
    on_key?: object[];
    on_raw?: object[];
    on_tag?: object[];
}
