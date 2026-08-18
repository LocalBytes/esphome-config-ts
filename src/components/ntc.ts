/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ntc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ntc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class NtcSensor extends EsphomeComponent<NtcSensorConfig> {
    componentName: string = "ntc.sensor";
}

export type NtcSensorConfig = {
        accuracy_decimals?: any;
        calibration: string;
        device_class?: any;
        id?: any;
        sensor: ID;
        state_class?: any;
        unit_of_measurement?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
