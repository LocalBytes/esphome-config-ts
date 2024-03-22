/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: radon_eye_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/radon_eye_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";

export class RadonEyeBle extends BaseComponent<RadonEyeBleConfig> {
    componentName: string = "radon_eye_ble";
}

export interface RadonEyeBleConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA {
    id?: ID;
}
