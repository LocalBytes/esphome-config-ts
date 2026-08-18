/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: aqi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/aqi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AqiSensor extends EsphomeComponent<AqiSensorConfig> {
    componentName: string = "aqi.sensor";
}

export type AqiSensorConfigCalculationType = 'CAQI' | 'AQI';
export type AqiSensorConfig = {
        accuracy_decimals?: any;
        calculation_type: AqiSensorConfigCalculationType;
        device_class?: any;
        id?: any;
        pm_10_0: ID;
        pm_2_5: ID;
        state_class?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
