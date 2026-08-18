/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: teleinfo.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/teleinfo
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Teleinfo extends EsphomeComponent<TeleinfoConfig> {
    componentName: string = "teleinfo";
}

export interface TeleinfoConfig extends CoreCOMPONENT_SCHEMA {
    historical_mode?: boolean;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}

export interface TeleinfoTELEINFO_LISTENER_SCHEMA {
    tag_name: string;
    teleinfo_id?: ID;
}

export class TeleinfoSensor extends EsphomeComponent<TeleinfoSensorConfig> {
    componentName: string = "teleinfo.sensor";
}

export type TeleinfoSensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        icon?: any;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
    } & Sensor_SENSOR_SCHEMA & TeleinfoTELEINFO_LISTENER_SCHEMA;

export class TeleinfoTextSensor extends EsphomeComponent<TeleinfoTextSensorConfig> {
    componentName: string = "teleinfo.text_sensor";
}

export type TeleinfoTextSensorConfig = {
        id?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & TeleinfoTELEINFO_LISTENER_SCHEMA;
