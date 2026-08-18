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
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class AnalogThresholdBinarySensor extends EsphomeComponent<AnalogThresholdBinarySensorConfig> {
    componentName: string = "analog_threshold.binary_sensor";
}

export interface AnalogThresholdBinarySensorConfigThreshold {
    lower: string;
    upper: string;
}

export type AnalogThresholdBinarySensorConfig = {
        id?: any;
        sensor_id: ID;
        threshold: AnalogThresholdBinarySensorConfigThreshold;
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;
