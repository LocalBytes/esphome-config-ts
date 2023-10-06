/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: homeassistant.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/homeassistant
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import { TimeTIME_SCHEMA } from "./time.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Homeassistant extends BaseComponent {
    componentName: string = "homeassistant";
}

export interface HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA {
    entity_id: string;
    attribute?: string;
    internal?: boolean;
}

export class HomeassistantSensor extends BaseComponent<HomeassistantSensorConfig> {
    componentName: string = "homeassistant.sensor";
}

export interface HomeassistantSensorConfig extends SensorSENSOR_SCHEMA, HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA {
    id?: any;
    accuracy_decimals?: any;
}

export class HomeassistantBinarySensor extends BaseComponent<HomeassistantBinarySensorConfig> {
    componentName: string = "homeassistant.binary_sensor";
}

export interface HomeassistantBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA {
    id?: any;
}

export class HomeassistantTextSensor extends BaseComponent<HomeassistantTextSensorConfig> {
    componentName: string = "homeassistant.text_sensor";
}

export interface HomeassistantTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA, HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA {
    id?: any;
}

export class HomeassistantTime extends BaseComponent<HomeassistantTimeConfig> {
    componentName: string = "homeassistant.time";
}

export interface HomeassistantTimeConfig extends TimeTIME_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
}
