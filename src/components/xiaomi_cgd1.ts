/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_cgd1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_cgd1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiCgd1Sensor extends EsphomeComponent<XiaomiCgd1SensorConfig> {
    componentName: string = "xiaomi_cgd1.sensor";
}

export interface XiaomiCgd1SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiCgd1SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiCgd1SensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export type XiaomiCgd1SensorConfig = {
        id?: ID;
        bindkey: string;
        mac_address: string;
        temperature?: XiaomiCgd1SensorConfigTemperature;
        humidity?: XiaomiCgd1SensorConfigHumidity;
        battery_level?: XiaomiCgd1SensorConfigBatteryLevel;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
