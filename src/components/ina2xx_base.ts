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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Ina2xxBase extends EsphomeComponent {
    componentName: string = "ina2xx_base";
}

export type Ina2xxBaseINA2XX_SCHEMAAdcAveraging = '1' | '4' | '16' | '64' | '128' | '256' | '512' | '1024';

export interface Ina2xxBaseINA2XX_SCHEMAAdcTime {
    bus_voltage?: any;
    shunt_voltage?: any;
    temperature?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMABusVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMACharge extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMAChargeCoulombs extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMACurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMAEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMAEnergyJoules extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMAPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMAShuntVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMATemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina2xxBaseINA2XX_SCHEMA extends CoreCOMPONENT_SCHEMA {
    adc_averaging?: Ina2xxBaseINA2XX_SCHEMAAdcAveraging;
    adc_range?: number;
    adc_time?: Ina2xxBaseINA2XX_SCHEMAAdcTime;
    bus_voltage?: Ina2xxBaseINA2XX_SCHEMABusVoltage;
    charge?: Ina2xxBaseINA2XX_SCHEMACharge;
    charge_coulombs?: Ina2xxBaseINA2XX_SCHEMAChargeCoulombs;
    current?: Ina2xxBaseINA2XX_SCHEMACurrent;
    energy?: Ina2xxBaseINA2XX_SCHEMAEnergy;
    energy_joules?: Ina2xxBaseINA2XX_SCHEMAEnergyJoules;
    max_current: string;
    power?: Ina2xxBaseINA2XX_SCHEMAPower;
    reset_on_boot?: boolean;
    shunt_resistance: string;
    shunt_voltage?: Ina2xxBaseINA2XX_SCHEMAShuntVoltage;
    temperature?: Ina2xxBaseINA2XX_SCHEMATemperature;
    temperature_coefficient?: number;
    update_interval?: any;
}
