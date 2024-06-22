/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_jqjcy01ym.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_jqjcy01ym
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiJqjcy01ymSensor extends BaseComponent<XiaomiJqjcy01ymSensorConfig> {
    componentName: string = "xiaomi_jqjcy01ym.sensor";
}

export interface XiaomiJqjcy01ymSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiJqjcy01ymSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiJqjcy01ymSensorConfigFormaldehyde extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface XiaomiJqjcy01ymSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export type XiaomiJqjcy01ymSensorConfig = {
        id?: ID;
        mac_address: string;
        temperature?: XiaomiJqjcy01ymSensorConfigTemperature;
        humidity?: XiaomiJqjcy01ymSensorConfigHumidity;
        formaldehyde?: XiaomiJqjcy01ymSensorConfigFormaldehyde;
        battery_level?: XiaomiJqjcy01ymSensorConfigBatteryLevel;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
