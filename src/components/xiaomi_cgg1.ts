/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_cgg1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_cgg1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiCgg1Sensor extends EsphomeComponent<XiaomiCgg1SensorConfig> {
    componentName: string = "xiaomi_cgg1.sensor";
}

export interface XiaomiCgg1SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiCgg1SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiCgg1SensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export type XiaomiCgg1SensorConfig = {
        id?: ID;
        bindkey?: any;
        mac_address: string;
        temperature?: XiaomiCgg1SensorConfigTemperature;
        humidity?: XiaomiCgg1SensorConfigHumidity;
        battery_level?: XiaomiCgg1SensorConfigBatteryLevel;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
