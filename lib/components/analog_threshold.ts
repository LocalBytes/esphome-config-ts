/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: analog_threshold.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/analog_threshold
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AnalogThresholdBinarySensor extends BaseComponent<AnalogThresholdBinarySensorConfig> {
    componentName: string = "analog_threshold.binary_sensor";
}

export interface AnalogThresholdBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    sensor_id: ID;
    threshold: AnalogThresholdBinarySensorConfigThreshold;
}

export interface AnalogThresholdBinarySensorConfigThreshold {
    upper: string;
    lower: string;
}
