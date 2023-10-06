/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: atm90e32.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/atm90e32
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Atm90e32Sensor extends BaseComponent<Atm90e32SensorConfig> {
    componentName: string = "atm90e32.sensor";
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMA {
    voltage?: Atm90e32SensorATM90E32_PHASE_SCHEMAVoltage;
    current?: Atm90e32SensorATM90E32_PHASE_SCHEMACurrent;
    power?: Atm90e32SensorATM90E32_PHASE_SCHEMAPower;
    reactive_power?: Atm90e32SensorATM90E32_PHASE_SCHEMAReactivePower;
    power_factor?: Atm90e32SensorATM90E32_PHASE_SCHEMAPowerFactor;
    forward_active_energy?: Atm90e32SensorATM90E32_PHASE_SCHEMAForwardActiveEnergy;
    reverse_active_energy?: Atm90e32SensorATM90E32_PHASE_SCHEMAReverseActiveEnergy;
    gain_voltage?: number;
    gain_ct?: number;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMACurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAReactivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAPowerFactor extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAForwardActiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e32SensorATM90E32_PHASE_SCHEMAReverseActiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e32SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    phase_a?: Atm90e32SensorConfigPhaseA;
    phase_b?: Atm90e32SensorConfigPhaseB;
    phase_c?: Atm90e32SensorConfigPhaseC;
    frequency?: Atm90e32SensorConfigFrequency;
    chip_temperature?: Atm90e32SensorConfigChipTemperature;
    line_frequency: Atm90e32SensorConfigLineFrequency;
    current_phases?: Atm90e32SensorConfigCurrentPhases;
    gain_pga?: Atm90e32SensorConfigGainPga;
    update_interval?: any;
    spi_id?: ID;
    cs_pin: Pin;
}

export interface Atm90e32SensorConfigPhaseA extends Atm90e32SensorATM90E32_PHASE_SCHEMA {
}

export interface Atm90e32SensorConfigPhaseB extends Atm90e32SensorATM90E32_PHASE_SCHEMA {
}

export interface Atm90e32SensorConfigPhaseC extends Atm90e32SensorATM90E32_PHASE_SCHEMA {
}

export interface Atm90e32SensorConfigFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Atm90e32SensorConfigChipTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export type Atm90e32SensorConfigLineFrequency = '50HZ' | '60HZ';
export type Atm90e32SensorConfigCurrentPhases = '2' | '3';
export type Atm90e32SensorConfigGainPga = '1X' | '2X' | '4X';
