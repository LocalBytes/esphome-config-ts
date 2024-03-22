/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_wx08zm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_wx08zm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiWx08zmBinarySensor extends BaseComponent<XiaomiWx08zmBinarySensorConfig> {
    componentName: string = "xiaomi_wx08zm.binary_sensor";
}

export interface XiaomiWx08zmBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, Esp32BleTrackerESP_BLE_DEVICE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    mac_address: string;
    tablet?: XiaomiWx08zmBinarySensorConfigTablet;
    battery_level?: XiaomiWx08zmBinarySensorConfigBatteryLevel;
}

export interface XiaomiWx08zmBinarySensorConfigTablet extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface XiaomiWx08zmBinarySensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}
