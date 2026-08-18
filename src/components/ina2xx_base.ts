/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina2xx_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina2xx_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Ina2xxBase extends EsphomeComponent {
    componentName: string = "ina2xx_base";
}

export type Ina2xxBaseINA2XXSCHEMAAdcAveraging = '1' | '4' | '16' | '64' | '128' | '256' | '512' | '1024';

export interface Ina2xxBaseINA2XXSCHEMAAdcTime {
    bus_voltage?: any;
    shunt_voltage?: any;
    temperature?: any;
}

export interface Ina2xxBaseINA2XXSCHEMABusVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XXSCHEMACharge extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XXSCHEMAChargeCoulombs extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XXSCHEMACurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XXSCHEMAEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XXSCHEMAEnergyJoules extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XXSCHEMAPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XXSCHEMAShuntVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XXSCHEMATemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XXSCHEMA extends CoreCOMPONENTSCHEMA {
    adc_averaging?: Ina2xxBaseINA2XXSCHEMAAdcAveraging;
    adc_range?: number;
    adc_time?: Ina2xxBaseINA2XXSCHEMAAdcTime;
    bus_voltage?: Ina2xxBaseINA2XXSCHEMABusVoltage;
    charge?: Ina2xxBaseINA2XXSCHEMACharge;
    charge_coulombs?: Ina2xxBaseINA2XXSCHEMAChargeCoulombs;
    current?: Ina2xxBaseINA2XXSCHEMACurrent;
    energy?: Ina2xxBaseINA2XXSCHEMAEnergy;
    energy_joules?: Ina2xxBaseINA2XXSCHEMAEnergyJoules;
    max_current: string;
    power?: Ina2xxBaseINA2XXSCHEMAPower;
    reset_on_boot?: boolean;
    shunt_resistance: string;
    shunt_voltage?: Ina2xxBaseINA2XXSCHEMAShuntVoltage;
    temperature?: Ina2xxBaseINA2XXSCHEMATemperature;
    temperature_coefficient?: number;
    update_interval?: any;
}
