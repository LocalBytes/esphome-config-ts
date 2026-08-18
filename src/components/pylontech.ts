/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pylontech.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pylontech
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Pylontech extends EsphomeComponent<PylontechConfig> {
    componentName: string = "pylontech";
}

export interface PylontechConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}

export interface PylontechPYLONTECH_COMPONENT_SCHEMA {
    battery: number;
    pylontech_id?: ID;
}

export class PylontechSensor extends EsphomeComponent<PylontechSensorConfig> {
    componentName: string = "pylontech.sensor";
}

export interface PylontechSensorConfigCoulomb extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigMosTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigTemperatureHigh extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigTemperatureLow extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigVoltageHigh extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigVoltageLow extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfig extends PylontechPYLONTECH_COMPONENT_SCHEMA {
    coulomb?: PylontechSensorConfigCoulomb;
    current?: PylontechSensorConfigCurrent;
    id?: ID;
    mos_temperature?: PylontechSensorConfigMosTemperature;
    temperature?: PylontechSensorConfigTemperature;
    temperature_high?: PylontechSensorConfigTemperatureHigh;
    temperature_low?: PylontechSensorConfigTemperatureLow;
    voltage?: PylontechSensorConfigVoltage;
    voltage_high?: PylontechSensorConfigVoltageHigh;
    voltage_low?: PylontechSensorConfigVoltageLow;
}

export class PylontechTextSensor extends EsphomeComponent<PylontechTextSensorConfig> {
    componentName: string = "pylontech.text_sensor";
}

export type PylontechTextSensorConfigBaseState = TextSensor_TEXT_SENSOR_SCHEMA;
export type PylontechTextSensorConfigCurrentState = TextSensor_TEXT_SENSOR_SCHEMA;
export type PylontechTextSensorConfigTemperatureState = TextSensor_TEXT_SENSOR_SCHEMA;
export type PylontechTextSensorConfigVoltageState = TextSensor_TEXT_SENSOR_SCHEMA;

export interface PylontechTextSensorConfig extends PylontechPYLONTECH_COMPONENT_SCHEMA {
    base_state?: PylontechTextSensorConfigBaseState;
    current_state?: PylontechTextSensorConfigCurrentState;
    id?: ID;
    temperature_state?: PylontechTextSensorConfigTemperatureState;
    voltage_state?: PylontechTextSensorConfigVoltageState;
}
