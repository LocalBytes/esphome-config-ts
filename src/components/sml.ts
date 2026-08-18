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
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Sml extends EsphomeComponent<SmlConfig> {
    componentName: string = "sml";
}

export interface SmlConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    on_data?: object[];
    uart_id?: ID;
}

export class SmlSensor extends EsphomeComponent<SmlSensorConfig> {
    componentName: string = "sml.sensor";
}

export type SmlSensorConfig = {
        id?: any;
        obis_code: string;
        server_id?: string;
        sml_id?: ID;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class SmlTextSensor extends EsphomeComponent<SmlTextSensorConfig> {
    componentName: string = "sml.text_sensor";
}

export type SmlTextSensorConfigFormat = 'text' | 'bool' | 'int' | 'uint' | 'hex' | '';
export type SmlTextSensorConfig = {
        format?: SmlTextSensorConfigFormat;
        id?: any;
        obis_code: string;
        server_id?: string;
        sml_id?: ID;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
