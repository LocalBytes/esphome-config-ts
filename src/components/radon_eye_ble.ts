/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: radon_eye_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/radon_eye_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";

export class RadonEyeBle extends EsphomeComponent<RadonEyeBleConfig> {
    componentName: string = "radon_eye_ble";
}

export interface RadonEyeBleConfig extends BthomeMithermometerBLEDEVICESCHEMA {
    id?: ID;
}
