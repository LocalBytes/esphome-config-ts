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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Pylontech extends EsphomeComponent<PylontechConfig> {
    componentName: string = "pylontech";
}

export interface PylontechConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}

export interface PylontechPYLONTECHCOMPONENTSCHEMA {
    battery: number;
    pylontech_id?: ID;
}

export class PylontechSensor extends EsphomeComponent<PylontechSensorConfig> {
    componentName: string = "pylontech.sensor";
}

export interface PylontechSensorConfigCoulomb extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigMosTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigTemperatureHigh extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigTemperatureLow extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigVoltageHigh extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfigVoltageLow extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PylontechSensorConfig extends PylontechPYLONTECHCOMPONENTSCHEMA {
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

export type PylontechTextSensorConfigBaseState = TextSensorTEXTSENSORSCHEMA;
export type PylontechTextSensorConfigCurrentState = TextSensorTEXTSENSORSCHEMA;
export type PylontechTextSensorConfigTemperatureState = TextSensorTEXTSENSORSCHEMA;
export type PylontechTextSensorConfigVoltageState = TextSensorTEXTSENSORSCHEMA;

export interface PylontechTextSensorConfig extends PylontechPYLONTECHCOMPONENTSCHEMA {
    base_state?: PylontechTextSensorConfigBaseState;
    current_state?: PylontechTextSensorConfigCurrentState;
    id?: ID;
    temperature_state?: PylontechTextSensorConfigTemperatureState;
    voltage_state?: PylontechTextSensorConfigVoltageState;
}
