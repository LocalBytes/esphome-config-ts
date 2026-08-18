/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: internal_temperature.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/internal_temperature
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class InternalTemperatureSensor extends EsphomeComponent<InternalTemperatureSensorConfig> {
    componentName: string = "internal_temperature.sensor";
}

export type InternalTemperatureSensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        entity_category?: any;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
