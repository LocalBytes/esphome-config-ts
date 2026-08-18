/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ade7880.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ade7880
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ade7880Sensor extends EsphomeComponent<Ade7880SensorConfig> {
    componentName: string = "ade7880.sensor";
}

export interface Ade7880SensorConfigNeutralCalibration {
    current_gain: number;
}

export interface Ade7880SensorConfigNeutralCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorConfigNeutral {
    calibration: Ade7880SensorConfigNeutralCalibration;
    current: Ade7880SensorConfigNeutralCurrent;
    id?: ID;
    name?: string;
}

export type Ade7880SensorConfigPhaseA = Ade7880SensorPOWER_CHANNEL_SCHEMA;
export type Ade7880SensorConfigPhaseB = Ade7880SensorPOWER_CHANNEL_SCHEMA;
export type Ade7880SensorConfigPhaseC = Ade7880SensorPOWER_CHANNEL_SCHEMA;

export interface Ade7880SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    frequency?: any;
    i2c_id?: ID;
    id?: ID;
    irq0_pin?: Pin;
    irq1_pin: Pin;
    neutral?: Ade7880SensorConfigNeutral;
    phase_a?: Ade7880SensorConfigPhaseA;
    phase_b?: Ade7880SensorConfigPhaseB;
    phase_c?: Ade7880SensorConfigPhaseC;
    reset_pin?: Pin;
    update_interval?: any;
}

export interface Ade7880SensorPOWER_CHANNEL_SCHEMAActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWER_CHANNEL_SCHEMAApparentPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWER_CHANNEL_SCHEMACalibration {
    current_gain: number;
    phase_angle: number;
    power_gain: number;
    voltage_gain: number;
}

export interface Ade7880SensorPOWER_CHANNEL_SCHEMACurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWER_CHANNEL_SCHEMAForwardActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWER_CHANNEL_SCHEMAPowerFactor extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWER_CHANNEL_SCHEMAReverseActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWER_CHANNEL_SCHEMAVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWER_CHANNEL_SCHEMA {
    active_power: Ade7880SensorPOWER_CHANNEL_SCHEMAActivePower;
    apparent_power: Ade7880SensorPOWER_CHANNEL_SCHEMAApparentPower;
    calibration: Ade7880SensorPOWER_CHANNEL_SCHEMACalibration;
    current: Ade7880SensorPOWER_CHANNEL_SCHEMACurrent;
    forward_active_energy: Ade7880SensorPOWER_CHANNEL_SCHEMAForwardActiveEnergy;
    id?: ID;
    name?: string;
    power_factor: Ade7880SensorPOWER_CHANNEL_SCHEMAPowerFactor;
    reverse_active_energy: Ade7880SensorPOWER_CHANNEL_SCHEMAReverseActiveEnergy;
    voltage: Ade7880SensorPOWER_CHANNEL_SCHEMAVoltage;
}
