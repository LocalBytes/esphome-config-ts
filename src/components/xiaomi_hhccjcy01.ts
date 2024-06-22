/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_hhccjcy01.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_hhccjcy01
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiHhccjcy01Sensor extends EsphomeComponent<XiaomiHhccjcy01SensorConfig> {
    componentName: string = "xiaomi_hhccjcy01.sensor";
}

export interface XiaomiHhccjcy01SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiHhccjcy01SensorConfigMoisture extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface XiaomiHhccjcy01SensorConfigIlluminance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiHhccjcy01SensorConfigConductivity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface XiaomiHhccjcy01SensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export type XiaomiHhccjcy01SensorConfig = {
        id?: ID;
        mac_address: string;
        temperature?: XiaomiHhccjcy01SensorConfigTemperature;
        moisture?: XiaomiHhccjcy01SensorConfigMoisture;
        illuminance?: XiaomiHhccjcy01SensorConfigIlluminance;
        conductivity?: XiaomiHhccjcy01SensorConfigConductivity;
        battery_level?: XiaomiHhccjcy01SensorConfigBatteryLevel;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
