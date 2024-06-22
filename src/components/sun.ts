/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: sun.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sun
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Sun extends EsphomeComponent<SunConfig> {
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

export class SunSensor extends EsphomeComponent<SunSensorConfig> {
    componentName: string = "sun.sensor";
}

export type SunSensorConfigType = 'elevation' | 'azimuth';
export type SunSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
        sun_id?: ID;
        type: SunSensorConfigType;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class SunTextSensor extends EsphomeComponent<SunTextSensorConfig> {
    componentName: string = "sun.text_sensor";
}

export type SunTextSensorConfigType = 'sunset' | 'sunrise';
export type SunTextSensorConfig = {
        id?: any;
        sun_id?: ID;
        type: SunTextSensorConfigType;
        elevation?: any;
        format?: string;
        update_interval?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
