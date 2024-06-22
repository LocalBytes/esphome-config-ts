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
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";

export class XiaomiBle extends EsphomeComponent<XiaomiBleConfig> {
    componentName: string = "xiaomi_ble";
}

export interface XiaomiBleConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA {
    id?: ID;
}
