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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class RuuvitagSensor extends EsphomeComponent<RuuvitagSensorConfig> {
    componentName: string = "ruuvitag.sensor";
}

export interface RuuvitagSensorConfigAcceleration extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigAccelerationX extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigAccelerationY extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigAccelerationZ extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigBatteryVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigMeasurementSequenceNumber extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface RuuvitagSensorConfigMovementCounter extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface RuuvitagSensorConfigPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigTxPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type RuuvitagSensorConfig = {
        acceleration?: RuuvitagSensorConfigAcceleration;
        acceleration_x?: RuuvitagSensorConfigAccelerationX;
        acceleration_y?: RuuvitagSensorConfigAccelerationY;
        acceleration_z?: RuuvitagSensorConfigAccelerationZ;
        battery_voltage?: RuuvitagSensorConfigBatteryVoltage;
        humidity?: RuuvitagSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        measurement_sequence_number?: RuuvitagSensorConfigMeasurementSequenceNumber;
        movement_counter?: RuuvitagSensorConfigMovementCounter;
        pressure?: RuuvitagSensorConfigPressure;
        temperature?: RuuvitagSensorConfigTemperature;
        tx_power?: RuuvitagSensorConfigTxPower;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
