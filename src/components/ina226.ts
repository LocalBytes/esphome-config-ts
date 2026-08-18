/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina226.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina226
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ina226Sensor extends EsphomeComponent<Ina226SensorConfig> {
    componentName: string = "ina226.sensor";
}

export type Ina226SensorConfigAdcAveraging = '1' | '4' | '16' | '64' | '128' | '256' | '512' | '1024';

export interface Ina226SensorConfigAdcTime {
    current: string;
    voltage: string;
}

export interface Ina226SensorConfigBusVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina226SensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina226SensorConfigPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina226SensorConfigShuntVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina226SensorConfig extends CoreCOMPONENT_SCHEMA {
    adc_averaging?: Ina226SensorConfigAdcAveraging;
    adc_time?: Ina226SensorConfigAdcTime;
    address?: any;
    bus_voltage?: Ina226SensorConfigBusVoltage;
    current?: Ina226SensorConfigCurrent;
    i2c_id?: ID;
    id?: ID;
    max_current?: any;
    power?: Ina226SensorConfigPower;
    shunt_resistance?: any;
    shunt_voltage?: Ina226SensorConfigShuntVoltage;
    update_interval?: any;
}
