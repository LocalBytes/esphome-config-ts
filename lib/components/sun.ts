/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sun.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sun
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Sun extends BaseComponent<SunConfig> {
    componentName: string = "sun";
}

export interface SunConfig {
    id?: ID;
    time_id?: ID;
    latitude: string;
    longitude: string;
    on_sunrise?: object[];
    on_sunset?: object[];
}

export class SunSensor extends BaseComponent<SunSensorConfig> {
    componentName: string = "sun.sensor";
}

export interface SunSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    sun_id?: ID;
    type: SunSensorConfigType;
    update_interval?: any;
}

export type SunSensorConfigType = 'elevation' | 'azimuth';

export class SunTextSensor extends BaseComponent<SunTextSensorConfig> {
    componentName: string = "sun.text_sensor";
}

export interface SunTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    sun_id?: ID;
    type: SunTextSensorConfigType;
    elevation?: any;
    format?: string;
    update_interval?: any;
}

export type SunTextSensorConfigType = 'sunset' | 'sunrise';
