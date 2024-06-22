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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class MqttSubscribeSensor extends BaseComponent<MqttSubscribeSensorConfig> {
    componentName: string = "mqtt_subscribe.sensor";
}

export type MqttSubscribeSensorConfig = {
        id?: any;
        accuracy_decimals?: any;
        mqtt_parent_id?: ID;
        topic: string;
        qos?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class MqttSubscribeTextSensor extends BaseComponent<MqttSubscribeTextSensorConfig> {
    componentName: string = "mqtt_subscribe.text_sensor";
}

export type MqttSubscribeTextSensorConfig = {
        id?: any;
        mqtt_parent_id?: ID;
        topic: string;
        qos?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
