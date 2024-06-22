/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_cgdk2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_cgdk2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiCgdk2Sensor extends EsphomeComponent<XiaomiCgdk2SensorConfig> {
    componentName: string = "xiaomi_cgdk2.sensor";
}

export interface XiaomiCgdk2SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiCgdk2SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiCgdk2SensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export type XiaomiCgdk2SensorConfig = {
        id?: ID;
        bindkey: string;
        mac_address: string;
        temperature?: XiaomiCgdk2SensorConfigTemperature;
        humidity?: XiaomiCgdk2SensorConfigHumidity;
        battery_level?: XiaomiCgdk2SensorConfigBatteryLevel;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
