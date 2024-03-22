/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sml.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sml
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Sml extends BaseComponent<SmlConfig> {
    componentName: string = "sml";
}

export interface SmlConfig {
    id?: ID;
    uart_id?: ID;
}

export class SmlSensor extends BaseComponent<SmlSensorConfig> {
    componentName: string = "sml.sensor";
}

export interface SmlSensorConfig extends SensorSENSOR_SCHEMA {
    id?: any;
    sml_id?: ID;
    obis_code: string;
    server_id?: string;
}

export class SmlTextSensor extends BaseComponent<SmlTextSensorConfig> {
    componentName: string = "sml.text_sensor";
}

export interface SmlTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA {
    id?: any;
    sml_id?: ID;
    obis_code: string;
    server_id?: string;
    format?: SmlTextSensorConfigFormat;
}

export type SmlTextSensorConfigFormat = 'text' | 'bool' | 'int' | 'uint' | 'hex' | '';
