/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: emc2101.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/emc2101
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Emc2101 extends EsphomeComponent<Emc2101Config> {
    componentName: string = "emc2101";
}

export type Emc2101ConfigDacConversionRate = '1' | '2' | '4' | '8' | '16' | '32' | '1/16' | '1/8' | '1/4' | '1/2';

export interface Emc2101ConfigDac {
    conversion_rate?: Emc2101ConfigDacConversionRate;
}

export interface Emc2101ConfigPwm {
    divider?: number;
    resolution?: number;
}

export interface Emc2101Config extends CoreCOMPONENT_SCHEMA {
    address?: any;
    dac?: Emc2101ConfigDac;
    i2c_id?: ID;
    id?: ID;
    inverted?: boolean;
    pwm?: Emc2101ConfigPwm;
}

export interface Emc2101EMC2101_COMPONENT_SCHEMA {
    emc2101_id?: ID;
}

export class Emc2101Output extends EsphomeComponent<Emc2101OutputConfig> {
    componentName: string = "emc2101.output";
}

export interface Emc2101OutputConfig extends Emc2101EMC2101_COMPONENT_SCHEMA {
    id: string;
}

export class Emc2101Sensor extends EsphomeComponent<Emc2101SensorConfig> {
    componentName: string = "emc2101.sensor";
}

export interface Emc2101SensorConfigDutyCycle extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Emc2101SensorConfigExternalTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Emc2101SensorConfigInternalTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Emc2101SensorConfigSpeed extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Emc2101SensorConfig = {
        duty_cycle?: Emc2101SensorConfigDutyCycle;
        external_temperature?: Emc2101SensorConfigExternalTemperature;
        id?: ID;
        internal_temperature?: Emc2101SensorConfigInternalTemperature;
        speed?: Emc2101SensorConfigSpeed;
        update_interval?: any;
    } & Emc2101EMC2101_COMPONENT_SCHEMA & CoreCOMPONENT_SCHEMA;
