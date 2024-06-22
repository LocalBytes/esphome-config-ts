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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Teleinfo extends BaseComponent<TeleinfoConfig> {
    componentName: string = "teleinfo";
}

export interface TeleinfoConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    historical_mode?: boolean;
    update_interval?: any;
    uart_id?: ID;
}

export interface TeleinfoTELEINFO_LISTENER_SCHEMA {
    teleinfo_id?: ID;
    tag_name: string;
}

export class TeleinfoSensor extends BaseComponent<TeleinfoSensorConfig> {
    componentName: string = "teleinfo.sensor";
}

export type TeleinfoSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
    } & SensorSENSOR_SCHEMA & TeleinfoTELEINFO_LISTENER_SCHEMA;

export class TeleinfoTextSensor extends BaseComponent<TeleinfoTextSensorConfig> {
    componentName: string = "teleinfo.text_sensor";
}

export type TeleinfoTextSensorConfig = {
        id?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & TeleinfoTELEINFO_LISTENER_SCHEMA;
