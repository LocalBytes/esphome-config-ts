/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rp2040_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rp2040_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Rp2040Ble extends EsphomeComponent<Rp2040BleConfig> {
    componentName: string = "rp2040_ble";
}

export interface Rp2040BleConfig extends CoreCOMPONENTSCHEMA {
    enable_on_boot?: boolean;
    id?: ID;
}
