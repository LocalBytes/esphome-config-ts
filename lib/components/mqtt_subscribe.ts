/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mqtt_subscribe.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mqtt_subscribe
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class MqttSubscribeSensor extends BaseComponent<MqttSubscribeSensorConfig> {
    componentName: string = "mqtt_subscribe.sensor";
}

export interface MqttSubscribeSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    accuracy_decimals?: any;
    mqtt_parent_id?: ID;
    topic: string;
    qos?: any;
}

export class MqttSubscribeTextSensor extends BaseComponent<MqttSubscribeTextSensorConfig> {
    componentName: string = "mqtt_subscribe.text_sensor";
}

export interface MqttSubscribeTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    mqtt_parent_id?: ID;
    topic: string;
    qos?: any;
}
