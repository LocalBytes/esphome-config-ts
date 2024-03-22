/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: inkbird_ibsth1_mini.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/inkbird_ibsth1_mini
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class InkbirdIbsth1MiniSensor extends BaseComponent<InkbirdIbsth1MiniSensorConfig> {
    componentName: string = "inkbird_ibsth1_mini.sensor";
}

export interface InkbirdIbsth1MiniSensorConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    mac_address: string;
    temperature?: InkbirdIbsth1MiniSensorConfigTemperature;
    external_temperature?: InkbirdIbsth1MiniSensorConfigExternalTemperature;
    humidity?: InkbirdIbsth1MiniSensorConfigHumidity;
    battery_level?: InkbirdIbsth1MiniSensorConfigBatteryLevel;
}

export interface InkbirdIbsth1MiniSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface InkbirdIbsth1MiniSensorConfigExternalTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface InkbirdIbsth1MiniSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface InkbirdIbsth1MiniSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}
