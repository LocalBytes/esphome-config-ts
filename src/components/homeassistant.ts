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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { TimeTIME_SCHEMA } from "./time.js";

export abstract class Homeassistant extends EsphomeComponent {
    componentName: string = "homeassistant";
}

export interface HomeassistantHOME_ASSISTANT_IMPORT_CONTROL_SCHEMA {
    entity_id: string;
    internal?: boolean;
}

export interface HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA {
    attribute?: string;
    entity_id: string;
    internal?: boolean;
}

export class HomeassistantBinarySensor extends EsphomeComponent<HomeassistantBinarySensorConfig> {
    componentName: string = "homeassistant.binary_sensor";
}

export type HomeassistantBinarySensorConfig = {
        id?: any;
        entity_id: string;
        attribute?: any;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA;

export class HomeassistantNumber extends EsphomeComponent<HomeassistantNumberConfig> {
    componentName: string = "homeassistant.number";
}

export type HomeassistantNumberConfig = {
        id?: ID;
    } & Number_NUMBER_SCHEMA & HomeassistantHOME_ASSISTANT_IMPORT_CONTROL_SCHEMA & CoreCOMPONENT_SCHEMA;

export class HomeassistantSensor extends EsphomeComponent<HomeassistantSensorConfig> {
    componentName: string = "homeassistant.sensor";
}

export type HomeassistantSensorConfig = {
        accuracy_decimals?: any;
        id?: any;
        entity_id: string;
        attribute?: any;
    } & Sensor_SENSOR_SCHEMA & HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA;

export class HomeassistantSwitch extends EsphomeComponent<HomeassistantSwitchConfig> {
    componentName: string = "homeassistant.switch";
}

export type HomeassistantSwitchConfig = {
        id?: ID;
        entity_id: string;
    } & Switch_SWITCH_SCHEMA & HomeassistantHOME_ASSISTANT_IMPORT_CONTROL_SCHEMA & CoreCOMPONENT_SCHEMA;

export class HomeassistantTextSensor extends EsphomeComponent<HomeassistantTextSensorConfig> {
    componentName: string = "homeassistant.text_sensor";
}

export type HomeassistantTextSensorConfig = {
        id?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & HomeassistantHOME_ASSISTANT_IMPORT_SCHEMA;

export class HomeassistantTime extends EsphomeComponent<HomeassistantTimeConfig> {
    componentName: string = "homeassistant.time";
}

export type HomeassistantTimeConfig = {
        id?: ID;
    } & TimeTIME_SCHEMA & CoreCOMPONENT_SCHEMA;
