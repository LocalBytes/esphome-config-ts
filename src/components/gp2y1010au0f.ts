/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gp2y1010au0f.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gp2y1010au0f
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Gp2y1010au0fSensor extends EsphomeComponent<Gp2y1010au0fSensorConfig> {
    componentName: string = "gp2y1010au0f.sensor";
}

export type Gp2y1010au0fSensorConfig = {
        accuracy_decimals?: any;
        adc_voltage_multiplier?: any;
        adc_voltage_offset?: any;
        device_class?: any;
        icon?: any;
        id?: any;
        output: ID;
        sensor: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
