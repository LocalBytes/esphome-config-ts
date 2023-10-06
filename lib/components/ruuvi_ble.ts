/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ruuvi_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ruuvi_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";

export class RuuviBle extends BaseComponent<RuuviBleConfig> {
    componentName: string = "ruuvi_ble";
}

export interface RuuviBleConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA {
    id?: ID;
}
