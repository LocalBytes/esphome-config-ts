/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sdp3x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sdp3x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sdp3xSensor extends EsphomeComponent<Sdp3xSensorConfig> {
    componentName: string = "sdp3x.sensor";
}

export type Sdp3xSensorConfigMeasurementMode = 'mass_flow' | 'differential_pressure';
export type Sdp3xSensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        device_class?: any;
        i2c_id?: ID;
        id?: any;
        measurement_mode?: Sdp3xSensorConfigMeasurementMode;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
