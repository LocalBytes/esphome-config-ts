/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: text_sensor.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/text_sensor
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class TextSensor extends BaseComponent {
    componentName: string = "text_sensor";
}

export interface TextSensorTEXT_SENSOR_SCHEMA extends CoreENTITY_BASE_SCHEMA, CoreMQTT_COMPONENT_SCHEMA {
    mqtt_id?: any;
    id?: ID;
    filters?: any[];
    on_value?: object[];
    on_raw_value?: object[];
}
