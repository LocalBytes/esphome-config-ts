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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ade7880Sensor extends EsphomeComponent<Ade7880SensorConfig> {
    componentName: string = "ade7880.sensor";
}

export interface Ade7880SensorConfigNeutralCalibration {
    current_gain: number;
}

export interface Ade7880SensorConfigNeutralCurrent extends SensorSENSORSCHEMA {
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

export type Ade7880SensorConfigPhaseA = Ade7880SensorPOWERCHANNELSCHEMA;
export type Ade7880SensorConfigPhaseB = Ade7880SensorPOWERCHANNELSCHEMA;
export type Ade7880SensorConfigPhaseC = Ade7880SensorPOWERCHANNELSCHEMA;

export interface Ade7880SensorConfig extends CoreCOMPONENTSCHEMA {
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

export interface Ade7880SensorPOWERCHANNELSCHEMAActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWERCHANNELSCHEMAApparentPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWERCHANNELSCHEMACalibration {
    current_gain: number;
    phase_angle: number;
    power_gain: number;
    voltage_gain: number;
}

export interface Ade7880SensorPOWERCHANNELSCHEMACurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWERCHANNELSCHEMAForwardActiveEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWERCHANNELSCHEMAPowerFactor extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWERCHANNELSCHEMAReverseActiveEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWERCHANNELSCHEMAVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7880SensorPOWERCHANNELSCHEMA {
    active_power: Ade7880SensorPOWERCHANNELSCHEMAActivePower;
    apparent_power: Ade7880SensorPOWERCHANNELSCHEMAApparentPower;
    calibration: Ade7880SensorPOWERCHANNELSCHEMACalibration;
    current: Ade7880SensorPOWERCHANNELSCHEMACurrent;
    forward_active_energy: Ade7880SensorPOWERCHANNELSCHEMAForwardActiveEnergy;
    id?: ID;
    name?: string;
    power_factor: Ade7880SensorPOWERCHANNELSCHEMAPowerFactor;
    reverse_active_energy: Ade7880SensorPOWERCHANNELSCHEMAReverseActiveEnergy;
    voltage: Ade7880SensorPOWERCHANNELSCHEMAVoltage;
}
