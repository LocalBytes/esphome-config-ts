/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mqtt_subscribe.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mqtt_subscribe
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class MqttSubscribeSensor extends EsphomeComponent<MqttSubscribeSensorConfig> {
    componentName: string = "mqtt_subscribe.sensor";
}

export type MqttSubscribeSensorConfig = {
        accuracy_decimals?: any;
        id?: any;
        mqtt_parent_id?: ID;
        qos?: any;
        topic: string;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class MqttSubscribeTextSensor extends EsphomeComponent<MqttSubscribeTextSensorConfig> {
    componentName: string = "mqtt_subscribe.text_sensor";
}

export type MqttSubscribeTextSensorConfig = {
        id?: any;
        mqtt_parent_id?: ID;
        qos?: any;
        topic: string;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
