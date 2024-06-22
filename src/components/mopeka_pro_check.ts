/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mopeka_pro_check.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mopeka_pro_check
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class MopekaProCheckSensor extends BaseComponent<MopekaProCheckSensorConfig> {
    componentName: string = "mopeka_pro_check.sensor";
}

export type MopekaProCheckSensorConfigTankType = 'CUSTOM' | '20LB_V' | '30LB_V' | '40LB_V' | 'EUROPE_6KG' | 'EUROPE_11KG' | 'EUROPE_14KG';

export interface MopekaProCheckSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface MopekaProCheckSensorConfigLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface MopekaProCheckSensorConfigDistance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface MopekaProCheckSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export type MopekaProCheckSensorConfig = {
        id?: ID;
        mac_address: string;
        custom_distance_full?: any;
        custom_distance_empty?: any;
        tank_type: MopekaProCheckSensorConfigTankType;
        temperature?: MopekaProCheckSensorConfigTemperature;
        level?: MopekaProCheckSensorConfigLevel;
        distance?: MopekaProCheckSensorConfigDistance;
        battery_level?: MopekaProCheckSensorConfigBatteryLevel;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
