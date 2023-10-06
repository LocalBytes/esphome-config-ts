/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: status.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/status
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class StatusBinarySensor extends BaseComponent<StatusBinarySensorConfig> {
    componentName: string = "status.binary_sensor";
}

export interface StatusBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    entity_category?: any;
    device_class?: any;
}
