/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_cgpr1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_cgpr1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiCgpr1BinarySensor extends EsphomeComponent<XiaomiCgpr1BinarySensorConfig> {
    componentName: string = "xiaomi_cgpr1.binary_sensor";
}

export interface XiaomiCgpr1BinarySensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
}

export interface XiaomiCgpr1BinarySensorConfigIdleTime extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface XiaomiCgpr1BinarySensorConfigIlluminance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export type XiaomiCgpr1BinarySensorConfig = {
        id?: any;
        device_class?: any;
        bindkey: string;
        mac_address: string;
        battery_level?: XiaomiCgpr1BinarySensorConfigBatteryLevel;
        idle_time?: XiaomiCgpr1BinarySensorConfigIdleTime;
        illuminance?: XiaomiCgpr1BinarySensorConfigIlluminance;
    } & BinarySensorBINARY_SENSOR_SCHEMA & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
