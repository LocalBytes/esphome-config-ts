/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: xiaomi_lywsdcgq.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_lywsdcgq
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiLywsdcgqSensor extends EsphomeComponent<XiaomiLywsdcgqSensorConfig> {
    componentName: string = "xiaomi_lywsdcgq.sensor";
}

export interface XiaomiLywsdcgqSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiLywsdcgqSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiLywsdcgqSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export type XiaomiLywsdcgqSensorConfig = {
        id?: ID;
        mac_address: string;
        temperature?: XiaomiLywsdcgqSensorConfigTemperature;
        humidity?: XiaomiLywsdcgqSensorConfigHumidity;
        battery_level?: XiaomiLywsdcgqSensorConfigBatteryLevel;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
