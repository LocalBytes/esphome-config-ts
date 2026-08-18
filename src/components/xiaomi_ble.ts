/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";

export class XiaomiBle extends EsphomeComponent<XiaomiBleConfig> {
    componentName: string = "xiaomi_ble";
}

export interface XiaomiBleConfig extends BthomeMithermometerBLE_DEVICE_SCHEMA {
    id?: ID;
}
