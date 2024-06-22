/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sml.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sml
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Sml extends EsphomeComponent<SmlConfig> {
    componentName: string = "sml";
}

export interface SmlConfig {
    id?: ID;
    uart_id?: ID;
}

export class SmlSensor extends EsphomeComponent<SmlSensorConfig> {
    componentName: string = "sml.sensor";
}

export interface SmlSensorConfig extends SensorSENSOR_SCHEMA {
    id?: any;
    sml_id?: ID;
    obis_code: string;
    server_id?: string;
}

export class SmlTextSensor extends EsphomeComponent<SmlTextSensorConfig> {
    componentName: string = "sml.text_sensor";
}

export type SmlTextSensorConfigFormat = 'text' | 'bool' | 'int' | 'uint' | 'hex' | '';

export interface SmlTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA {
    id?: any;
    sml_id?: ID;
    obis_code: string;
    server_id?: string;
    format?: SmlTextSensorConfigFormat;
}
