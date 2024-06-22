/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sn74hc165.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sn74hc165
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sn74hc165 extends EsphomeComponent<Sn74hc165Config> {
    componentName: string = "sn74hc165";
}

export interface Sn74hc165Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    data_pin: Pin;
    clock_pin: Pin;
    load_pin: Pin;
    clock_inhibit_pin?: Pin;
    sr_count?: number;
}
