/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_gcls002.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_gcls002
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiGcls002Sensor extends BaseComponent<XiaomiGcls002SensorConfig> {
    componentName: string = "xiaomi_gcls002.sensor";
}

export interface XiaomiGcls002SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiGcls002SensorConfigMoisture extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface XiaomiGcls002SensorConfigIlluminance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiGcls002SensorConfigConductivity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type XiaomiGcls002SensorConfig = {
        id?: ID;
        mac_address: string;
        temperature?: XiaomiGcls002SensorConfigTemperature;
        moisture?: XiaomiGcls002SensorConfigMoisture;
        illuminance?: XiaomiGcls002SensorConfigIlluminance;
        conductivity?: XiaomiGcls002SensorConfigConductivity;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
