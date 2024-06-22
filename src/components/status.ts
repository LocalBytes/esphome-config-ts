/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: status.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/status
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class StatusBinarySensor extends BaseComponent<StatusBinarySensorConfig> {
    componentName: string = "status.binary_sensor";
}

export type StatusBinarySensorConfig = {
        id?: any;
        entity_category?: any;
        device_class?: any;
    } & BinarySensorBINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
