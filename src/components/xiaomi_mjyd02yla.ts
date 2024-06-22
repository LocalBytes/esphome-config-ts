/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_mjyd02yla.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_mjyd02yla
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiMjyd02ylaBinarySensor extends EsphomeComponent<XiaomiMjyd02ylaBinarySensorConfig> {
    componentName: string = "xiaomi_mjyd02yla.binary_sensor";
}

export interface XiaomiMjyd02ylaBinarySensorConfigIdleTime extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface XiaomiMjyd02ylaBinarySensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface XiaomiMjyd02ylaBinarySensorConfigIlluminance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiMjyd02ylaBinarySensorConfigLight extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export type XiaomiMjyd02ylaBinarySensorConfig = {
        id?: any;
        device_class?: any;
        mac_address: string;
        bindkey: string;
        idle_time?: XiaomiMjyd02ylaBinarySensorConfigIdleTime;
        battery_level?: XiaomiMjyd02ylaBinarySensorConfigBatteryLevel;
        illuminance?: XiaomiMjyd02ylaBinarySensorConfigIlluminance;
        light?: XiaomiMjyd02ylaBinarySensorConfigLight;
    } & BinarySensorBINARY_SENSOR_SCHEMA & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
