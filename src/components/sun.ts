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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Sun extends EsphomeComponent<SunConfig> {
    componentName: string = "sun";
}

export interface SunConfig {
    id?: ID;
    latitude: string;
    longitude: string;
    on_sunrise?: object[];
    on_sunset?: object[];
    time_id?: ID;
}

export class SunSensor extends EsphomeComponent<SunSensorConfig> {
    componentName: string = "sun.sensor";
}

export type SunSensorConfigType = 'elevation' | 'azimuth';
export type SunSensorConfig = {
        accuracy_decimals?: any;
        icon?: any;
        id?: any;
        state_class?: any;
        sun_id?: ID;
        type: SunSensorConfigType;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;

export class SunTextSensor extends EsphomeComponent<SunTextSensorConfig> {
    componentName: string = "sun.text_sensor";
}

export type SunTextSensorConfigType = 'sunset' | 'sunrise';
export type SunTextSensorConfig = {
        elevation?: any;
        format?: string;
        id?: any;
        sun_id?: ID;
        type: SunTextSensorConfigType;
        update_interval?: any;
    } & TextSensorTEXTSENSORSCHEMA & CoreCOMPONENTSCHEMA;
