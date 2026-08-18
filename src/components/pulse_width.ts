/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pulse_width.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pulse_width
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class PulseWidthSensor extends EsphomeComponent<PulseWidthSensorConfig> {
    componentName: string = "pulse_width.sensor";
}

export type PulseWidthSensorConfig = {
        accuracy_decimals?: any;
        icon?: any;
        id?: any;
        pin: Pin;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
