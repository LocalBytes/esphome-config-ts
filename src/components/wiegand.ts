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

export class Wiegand extends EsphomeComponent<WiegandConfig> {
    componentName: string = "wiegand";
}

export interface WiegandConfig {
    id?: ID;
    d0: Pin;
    d1: Pin;
    on_tag?: object[];
    on_raw?: object[];
    on_key?: object[];
}
