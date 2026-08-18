/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: version.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/version
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class VersionTextSensor extends EsphomeComponent<VersionTextSensorConfig> {
    componentName: string = "version.text_sensor";
}

export type VersionTextSensorConfig = {
        entity_category?: any;
        hide_hash?: boolean;
        hide_timestamp?: boolean;
        icon?: any;
        id?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
