/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ade7953_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ade7953_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Ade7953Base extends EsphomeComponent {
    componentName: string = "ade7953_base";
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMAActivePowerA extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMAActivePowerB extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMAApparentPowerA extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMAApparentPowerB extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMACurrentA extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMACurrentB extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Ade7953BaseADE7953_CONFIG_SCHEMACurrentPgaGainA = '1x' | '2x' | '4x' | '8x' | '16x' | '22x';
export type Ade7953BaseADE7953_CONFIG_SCHEMACurrentPgaGainB = '1x' | '2x' | '4x' | '8x' | '16x' | '22x';

export interface Ade7953BaseADE7953_CONFIG_SCHEMAFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMAPowerFactorA extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMAPowerFactorB extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMAReactivePowerA extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMAReactivePowerB extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953_CONFIG_SCHEMAVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Ade7953BaseADE7953_CONFIG_SCHEMAVoltagePgaGain = '1x' | '2x' | '4x' | '8x' | '16x' | '22x';

export interface Ade7953BaseADE7953_CONFIG_SCHEMA extends CoreCOMPONENT_SCHEMA {
    active_power_a?: Ade7953BaseADE7953_CONFIG_SCHEMAActivePowerA;
    active_power_b?: Ade7953BaseADE7953_CONFIG_SCHEMAActivePowerB;
    active_power_gain_a?: any;
    active_power_gain_b?: any;
    apparent_power_a?: Ade7953BaseADE7953_CONFIG_SCHEMAApparentPowerA;
    apparent_power_b?: Ade7953BaseADE7953_CONFIG_SCHEMAApparentPowerB;
    current_a?: Ade7953BaseADE7953_CONFIG_SCHEMACurrentA;
    current_b?: Ade7953BaseADE7953_CONFIG_SCHEMACurrentB;
    current_gain_a?: any;
    current_gain_b?: any;
    current_pga_gain_a?: Ade7953BaseADE7953_CONFIG_SCHEMACurrentPgaGainA;
    current_pga_gain_b?: Ade7953BaseADE7953_CONFIG_SCHEMACurrentPgaGainB;
    frequency?: Ade7953BaseADE7953_CONFIG_SCHEMAFrequency;
    irq_pin?: Pin;
    power_factor_a?: Ade7953BaseADE7953_CONFIG_SCHEMAPowerFactorA;
    power_factor_b?: Ade7953BaseADE7953_CONFIG_SCHEMAPowerFactorB;
    reactive_power_a?: Ade7953BaseADE7953_CONFIG_SCHEMAReactivePowerA;
    reactive_power_b?: Ade7953BaseADE7953_CONFIG_SCHEMAReactivePowerB;
    update_interval?: any;
    use_accumulated_energy_registers?: boolean;
    voltage?: Ade7953BaseADE7953_CONFIG_SCHEMAVoltage;
    voltage_gain?: any;
    voltage_pga_gain?: Ade7953BaseADE7953_CONFIG_SCHEMAVoltagePgaGain;
}
