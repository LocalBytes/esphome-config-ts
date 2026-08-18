/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: text_sensor.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/text_sensor
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class TextSensor extends EsphomeComponent {
    componentName: string = "text_sensor";
}

export type TextSensor_TEXT_SENSOR_SCHEMADeviceClass = 'date' | '' | 'timestamp';

export interface TextSensor_TEXT_SENSOR_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type TextSensor_TEXT_SENSOR_SCHEMA = {
        device_class?: TextSensor_TEXT_SENSOR_SCHEMADeviceClass;
        filters?: any[];
        id?: ID;
        mqtt_id?: any;
        on_raw_value?: object[];
        on_value?: object[];
        web_server?: TextSensor_TEXT_SENSOR_SCHEMAWebServer;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMPONENT_SCHEMA;
