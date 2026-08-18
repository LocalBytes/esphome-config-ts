/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: resistance.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/resistance
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class ResistanceSensor extends EsphomeComponent<ResistanceSensorConfig> {
    componentName: string = "resistance.sensor";
}

export type ResistanceSensorConfigConfiguration = 'DOWNSTREAM' | 'UPSTREAM';
export type ResistanceSensorConfig = {
        accuracy_decimals?: any;
        configuration: ResistanceSensorConfigConfiguration;
        icon?: any;
        id?: any;
        reference_voltage?: any;
        resistor: string;
        sensor: ID;
        state_class?: any;
        unit_of_measurement?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
