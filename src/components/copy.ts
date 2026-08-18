/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: copy.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/copy
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Button_BUTTON_SCHEMA } from "./button.js";
import type { Cover_COVER_SCHEMA } from "./cover.js";
import type { Fan_FAN_SCHEMA } from "./fan.js";
import type { Lock_LOCK_SCHEMA } from "./lock.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { Select_SELECT_SCHEMA } from "./select.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { Text_TEXT_SCHEMA } from "./text.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class CopyBinarySensor extends EsphomeComponent<CopyBinarySensorConfig> {
    componentName: string = "copy.binary_sensor";
}

export type CopyBinarySensorConfig = {
        id?: any;
        source_id: ID;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyButton extends EsphomeComponent<CopyButtonConfig> {
    componentName: string = "copy.button";
}

export type CopyButtonConfig = {
        id?: ID;
        source_id: ID;
    } & Button_BUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyCover extends EsphomeComponent<CopyCoverConfig> {
    componentName: string = "copy.cover";
}

export type CopyCoverConfig = {
        id?: ID;
        source_id: ID;
    } & Cover_COVER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyFan extends EsphomeComponent<CopyFanConfig> {
    componentName: string = "copy.fan";
}

export type CopyFanConfig = {
        id?: ID;
        source_id: ID;
    } & Fan_FAN_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyLock extends EsphomeComponent<CopyLockConfig> {
    componentName: string = "copy.lock";
}

export type CopyLockConfig = {
        id?: ID;
        source_id: ID;
    } & Lock_LOCK_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyNumber extends EsphomeComponent<CopyNumberConfig> {
    componentName: string = "copy.number";
}

export type CopyNumberConfig = {
        id?: ID;
        source_id: ID;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopySelect extends EsphomeComponent<CopySelectConfig> {
    componentName: string = "copy.select";
}

export type CopySelectConfig = {
        id?: any;
        source_id: ID;
    } & Select_SELECT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopySensor extends EsphomeComponent<CopySensorConfig> {
    componentName: string = "copy.sensor";
}

export type CopySensorConfig = {
        id?: any;
        source_id: ID;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopySwitch extends EsphomeComponent<CopySwitchConfig> {
    componentName: string = "copy.switch";
}

export type CopySwitchConfig = {
        id?: ID;
        source_id: ID;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyText extends EsphomeComponent<CopyTextConfig> {
    componentName: string = "copy.text";
}

export type CopyTextConfig = {
        id?: any;
        source_id: ID;
    } & Text_TEXT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyTextSensor extends EsphomeComponent<CopyTextSensorConfig> {
    componentName: string = "copy.text_sensor";
}

export type CopyTextSensorConfig = {
        id?: any;
        source_id: ID;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
