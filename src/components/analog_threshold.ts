/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: analog_threshold.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/analog_threshold
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AnalogThresholdBinarySensor extends EsphomeComponent<AnalogThresholdBinarySensorConfig> {
    componentName: string = "analog_threshold.binary_sensor";
}

export interface AnalogThresholdBinarySensorConfigThreshold {
    upper: string;
    lower: string;
}

export type AnalogThresholdBinarySensorConfig = {
        id?: any;
        sensor_id: ID;
        threshold: AnalogThresholdBinarySensorConfigThreshold;
    } & BinarySensorBINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
