/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: homeassistant.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/homeassistant
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { TimeTIME_SCHEMA } from "./time.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

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

export type HomeassistantSensorConfig = {
        id?: any;
        accuracy_decimals?: any;
    } & SensorSENSOR_SCHEMA & HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA;

export class HomeassistantBinarySensor extends BaseComponent<HomeassistantBinarySensorConfig> {
    componentName: string = "homeassistant.binary_sensor";
}

export type HomeassistantBinarySensorConfig = {
        id?: any;
    } & BinarySensorBINARY_SENSOR_SCHEMA & HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA;

export class HomeassistantTextSensor extends BaseComponent<HomeassistantTextSensorConfig> {
    componentName: string = "homeassistant.text_sensor";
}

export type HomeassistantTextSensorConfig = {
        id?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA;

export class HomeassistantTime extends BaseComponent<HomeassistantTimeConfig> {
    componentName: string = "homeassistant.time";
}

export type HomeassistantTimeConfig = {
        id?: ID;
    } & TimeTIME_SCHEMA & CoreCOMPONENT_SCHEMA;
