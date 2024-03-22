/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: version.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/version
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class VersionTextSensor extends BaseComponent<VersionTextSensorConfig> {
    componentName: string = "version.text_sensor";
}

export interface VersionTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    icon?: any;
    entity_category?: any;
    id?: any;
    hide_timestamp?: boolean;
}
