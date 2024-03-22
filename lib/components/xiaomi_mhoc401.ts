/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_mhoc401.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_mhoc401
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiMhoc401Sensor extends BaseComponent<XiaomiMhoc401SensorConfig> {
    componentName: string = "xiaomi_mhoc401.sensor";
}

export interface XiaomiMhoc401SensorConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    bindkey: string;
    mac_address: string;
    temperature?: XiaomiMhoc401SensorConfigTemperature;
    humidity?: XiaomiMhoc401SensorConfigHumidity;
    battery_level?: XiaomiMhoc401SensorConfigBatteryLevel;
}

export interface XiaomiMhoc401SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiMhoc401SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface XiaomiMhoc401SensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}
