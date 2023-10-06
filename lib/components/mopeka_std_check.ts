/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mopeka_std_check.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mopeka_std_check
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class MopekaStdCheckSensor extends BaseComponent<MopekaStdCheckSensorConfig> {
    componentName: string = "mopeka_std_check.sensor";
}

export interface MopekaStdCheckSensorConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    mac_address: string;
    custom_distance_full?: any;
    custom_distance_empty?: any;
    propane_butane_mix?: any;
    tank_type: MopekaStdCheckSensorConfigTankType;
    temperature?: MopekaStdCheckSensorConfigTemperature;
    level?: MopekaStdCheckSensorConfigLevel;
    distance?: MopekaStdCheckSensorConfigDistance;
    battery_level?: MopekaStdCheckSensorConfigBatteryLevel;
}

export type MopekaStdCheckSensorConfigTankType = 'CUSTOM' | 'NORTH_AMERICA_20LB_VERTICAL' | 'NORTH_AMERICA_30LB_VERTICAL' | 'NORTH_AMERICA_40LB_VERTICAL' | 'EUROPE_6KG' | 'EUROPE_11KG' | 'EUROPE_14KG';

export interface MopekaStdCheckSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface MopekaStdCheckSensorConfigLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface MopekaStdCheckSensorConfigDistance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface MopekaStdCheckSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
