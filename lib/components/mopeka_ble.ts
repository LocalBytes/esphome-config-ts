/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mopeka_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mopeka_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";

export class MopekaBle extends BaseComponent<MopekaBleConfig> {
    componentName: string = "mopeka_ble";
}

export interface MopekaBleConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA {
    id?: ID;
    show_sensors_without_sync?: boolean;
}
