/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: veml3235.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/veml3235
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Veml3235Sensor extends EsphomeComponent<Veml3235SensorConfig> {
    componentName: string = "veml3235.sensor";
}

export type Veml3235SensorConfigDigitalGain = '1X' | '2X';
export type Veml3235SensorConfigGain = '1X' | '2X' | '4X' | 'AUTO';
export type Veml3235SensorConfigIntegrationTime = '50ms' | '100ms' | '200ms' | '400ms' | '800ms';
export type Veml3235SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        auto_gain?: boolean;
        auto_gain_threshold_high?: any;
        auto_gain_threshold_low?: any;
        device_class?: any;
        digital_gain?: Veml3235SensorConfigDigitalGain;
        gain?: Veml3235SensorConfigGain;
        i2c_id?: ID;
        id?: any;
        integration_time?: Veml3235SensorConfigIntegrationTime;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
