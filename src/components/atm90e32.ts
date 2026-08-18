/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: atm90e32.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/atm90e32
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Button_BUTTON_SCHEMA } from "./button.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Atm90e32Button extends EsphomeComponent<Atm90e32ButtonConfig> {
    componentName: string = "atm90e32.button";
}

export interface Atm90e32ButtonConfigClearGainCalibration extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Atm90e32ButtonConfigClearOffsetCalibration extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Atm90e32ButtonConfigClearPowerOffsetCalibration extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Atm90e32ButtonConfigRunGainCalibration extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Atm90e32ButtonConfigRunOffsetCalibration extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Atm90e32ButtonConfigRunPowerOffsetCalibration extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Atm90e32ButtonConfig {
    clear_gain_calibration?: Atm90e32ButtonConfigClearGainCalibration;
    clear_offset_calibration?: Atm90e32ButtonConfigClearOffsetCalibration;
    clear_power_offset_calibration?: Atm90e32ButtonConfigClearPowerOffsetCalibration;
    id?: ID;
    run_gain_calibration?: Atm90e32ButtonConfigRunGainCalibration;
    run_offset_calibration?: Atm90e32ButtonConfigRunOffsetCalibration;
    run_power_offset_calibration?: Atm90e32ButtonConfigRunPowerOffsetCalibration;
}

export class Atm90e32Number extends EsphomeComponent<Atm90e32NumberConfig> {
    componentName: string = "atm90e32.number";
}

export type Atm90e32NumberConfigReferenceCurrentPhaseA = Atm90e32NumberREFERENCE_CURRENT_PHASE_SCHEMA;
export type Atm90e32NumberConfigReferenceCurrentPhaseB = Atm90e32NumberREFERENCE_CURRENT_PHASE_SCHEMA;
export type Atm90e32NumberConfigReferenceCurrentPhaseC = Atm90e32NumberREFERENCE_CURRENT_PHASE_SCHEMA;

export interface Atm90e32NumberConfigReferenceCurrent {
    phase_a?: Atm90e32NumberConfigReferenceCurrentPhaseA;
    phase_b?: Atm90e32NumberConfigReferenceCurrentPhaseB;
    phase_c?: Atm90e32NumberConfigReferenceCurrentPhaseC;
}

export type Atm90e32NumberConfigReferenceVoltagePhaseA = Atm90e32NumberREFERENCE_VOLTAGE_PHASE_SCHEMA;
export type Atm90e32NumberConfigReferenceVoltagePhaseB = Atm90e32NumberREFERENCE_VOLTAGE_PHASE_SCHEMA;
export type Atm90e32NumberConfigReferenceVoltagePhaseC = Atm90e32NumberREFERENCE_VOLTAGE_PHASE_SCHEMA;

export interface Atm90e32NumberConfigReferenceVoltage {
    phase_a?: Atm90e32NumberConfigReferenceVoltagePhaseA;
    phase_b?: Atm90e32NumberConfigReferenceVoltagePhaseB;
    phase_c?: Atm90e32NumberConfigReferenceVoltagePhaseC;
}

export interface Atm90e32NumberConfig {
    id?: ID;
    reference_current?: Atm90e32NumberConfigReferenceCurrent;
    reference_voltage?: Atm90e32NumberConfigReferenceVoltage;
}

export interface Atm90e32NumberREFERENCE_CURRENT_PHASE_SCHEMA extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    max_value?: any;
    min_value?: any;
    mode?: string;
    step?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32NumberREFERENCE_VOLTAGE_PHASE_SCHEMA extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    max_value?: any;
    min_value?: any;
    mode?: string;
    step?: any;
    unit_of_measurement?: any;
}

export class Atm90e32Sensor extends EsphomeComponent<Atm90e32SensorConfig> {
    componentName: string = "atm90e32.sensor";
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAApparentPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMACurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAForwardActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAHarmonicPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAPeakCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAPhaseAngle extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAPowerFactor extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAReactivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAReverseActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMA {
    apparent_power?: Atm90e32SensorATM90E32_PHASE_SCHEMAApparentPower;
    current?: Atm90e32SensorATM90E32_PHASE_SCHEMACurrent;
    forward_active_energy?: Atm90e32SensorATM90E32_PHASE_SCHEMAForwardActiveEnergy;
    gain_ct?: number;
    gain_voltage?: number;
    harmonic_power?: Atm90e32SensorATM90E32_PHASE_SCHEMAHarmonicPower;
    offset_active_power?: number;
    offset_current?: number;
    offset_reactive_power?: number;
    offset_voltage?: number;
    peak_current?: Atm90e32SensorATM90E32_PHASE_SCHEMAPeakCurrent;
    phase_angle?: Atm90e32SensorATM90E32_PHASE_SCHEMAPhaseAngle;
    power?: Atm90e32SensorATM90E32_PHASE_SCHEMAPower;
    power_factor?: Atm90e32SensorATM90E32_PHASE_SCHEMAPowerFactor;
    reactive_power?: Atm90e32SensorATM90E32_PHASE_SCHEMAReactivePower;
    reverse_active_energy?: Atm90e32SensorATM90E32_PHASE_SCHEMAReverseActiveEnergy;
    voltage?: Atm90e32SensorATM90E32_PHASE_SCHEMAVoltage;
}

export interface Atm90e32SensorConfigChipTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Atm90e32SensorConfigCurrentPhases = '2' | '3';

export interface Atm90e32SensorConfigFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Atm90e32SensorConfigGainPga = '1X' | '2X' | '4X';
export type Atm90e32SensorConfigLineFrequency = '50HZ' | '60HZ';
export type Atm90e32SensorConfigPhaseA = Atm90e32SensorATM90E32_PHASE_SCHEMA;
export type Atm90e32SensorConfigPhaseB = Atm90e32SensorATM90E32_PHASE_SCHEMA;
export type Atm90e32SensorConfigPhaseC = Atm90e32SensorATM90E32_PHASE_SCHEMA;
export type Atm90e32SensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Atm90e32SensorConfig extends CoreCOMPONENT_SCHEMA {
    chip_temperature?: Atm90e32SensorConfigChipTemperature;
    cs_pin: Pin;
    current_phases?: Atm90e32SensorConfigCurrentPhases;
    data_rate?: any;
    enable_gain_calibration?: boolean;
    enable_offset_calibration?: boolean;
    frequency?: Atm90e32SensorConfigFrequency;
    gain_pga?: Atm90e32SensorConfigGainPga;
    id?: ID;
    line_frequency: Atm90e32SensorConfigLineFrequency;
    peak_current_signed?: boolean;
    phase_a?: Atm90e32SensorConfigPhaseA;
    phase_b?: Atm90e32SensorConfigPhaseB;
    phase_c?: Atm90e32SensorConfigPhaseC;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Atm90e32SensorConfigSpiMode;
    update_interval?: any;
}

export class Atm90e32TextSensor extends EsphomeComponent<Atm90e32TextSensorConfig> {
    componentName: string = "atm90e32.text_sensor";
}

export interface Atm90e32TextSensorConfigFrequencyStatus extends TextSensor_TEXT_SENSOR_SCHEMA {
    icon?: any;
}

export interface Atm90e32TextSensorConfigPhaseStatusPhaseA extends TextSensor_TEXT_SENSOR_SCHEMA {
    icon?: any;
}

export interface Atm90e32TextSensorConfigPhaseStatusPhaseB extends TextSensor_TEXT_SENSOR_SCHEMA {
    icon?: any;
}

export interface Atm90e32TextSensorConfigPhaseStatusPhaseC extends TextSensor_TEXT_SENSOR_SCHEMA {
    icon?: any;
}

export interface Atm90e32TextSensorConfigPhaseStatus {
    phase_a?: Atm90e32TextSensorConfigPhaseStatusPhaseA;
    phase_b?: Atm90e32TextSensorConfigPhaseStatusPhaseB;
    phase_c?: Atm90e32TextSensorConfigPhaseStatusPhaseC;
}

export interface Atm90e32TextSensorConfig {
    frequency_status?: Atm90e32TextSensorConfigFrequencyStatus;
    id?: ID;
    phase_status?: Atm90e32TextSensorConfigPhaseStatus;
}
