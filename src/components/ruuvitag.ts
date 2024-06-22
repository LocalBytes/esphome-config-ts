/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ruuvitag.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ruuvitag
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class RuuvitagSensor extends BaseComponent<RuuvitagSensorConfig> {
    componentName: string = "ruuvitag.sensor";
}

export interface RuuvitagSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface RuuvitagSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface RuuvitagSensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface RuuvitagSensorConfigAcceleration extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface RuuvitagSensorConfigAccelerationX extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface RuuvitagSensorConfigAccelerationY extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface RuuvitagSensorConfigAccelerationZ extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface RuuvitagSensorConfigBatteryVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface RuuvitagSensorConfigTxPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface RuuvitagSensorConfigMovementCounter extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface RuuvitagSensorConfigMeasurementSequenceNumber extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export type RuuvitagSensorConfig = {
        id?: ID;
        mac_address: string;
        temperature?: RuuvitagSensorConfigTemperature;
        humidity?: RuuvitagSensorConfigHumidity;
        pressure?: RuuvitagSensorConfigPressure;
        acceleration?: RuuvitagSensorConfigAcceleration;
        acceleration_x?: RuuvitagSensorConfigAccelerationX;
        acceleration_y?: RuuvitagSensorConfigAccelerationY;
        acceleration_z?: RuuvitagSensorConfigAccelerationZ;
        battery_voltage?: RuuvitagSensorConfigBatteryVoltage;
        tx_power?: RuuvitagSensorConfigTxPower;
        movement_counter?: RuuvitagSensorConfigMovementCounter;
        measurement_sequence_number?: RuuvitagSensorConfigMeasurementSequenceNumber;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
