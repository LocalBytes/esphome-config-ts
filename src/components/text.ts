/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: text.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/text
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMPONENT_SCHEMA, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export abstract class Text extends EsphomeComponent {
    componentName: string = "text";
}

export interface TextOPERATION_BASE_SCHEMA {
    id: ID;
}

export type Text_TEXT_SCHEMAMode = 'TEXT' | 'PASSWORD';

export interface Text_TEXT_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Text_TEXT_SCHEMA = {
        id?: ID;
        mode: Text_TEXT_SCHEMAMode;
        mqtt_id?: any;
        on_value?: object[];
        web_server?: Text_TEXT_SCHEMAWebServer;
        name: string;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMPONENT_SCHEMA;

export class TextTextSensor extends EsphomeComponent<TextTextSensorConfig> {
    componentName: string = "text.text_sensor";
}

export type TextTextSensorConfig = {
        id?: any;
        source_id: ID;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
