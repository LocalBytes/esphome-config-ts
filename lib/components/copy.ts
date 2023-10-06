/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: copy.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/copy
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { ButtonBUTTON_SCHEMA } from "./button.js";
import { CoverCOVER_SCHEMA } from "./cover.js";
import { FanFAN_SCHEMA } from "./fan.js";
import { LockLOCK_SCHEMA } from "./lock.js";
import { NumberNUMBER_SCHEMA } from "./number.js";
import { SelectSELECT_SCHEMA } from "./select.js";
import { Switch_SWITCH_SCHEMA } from "./switch.js";
import { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class CopySensor extends BaseComponent<CopySensorConfig> {
    componentName: string = "copy.sensor";
}

export interface CopySensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    source_id: ID;
}

export class CopyBinarySensor extends BaseComponent<CopyBinarySensorConfig> {
    componentName: string = "copy.binary_sensor";
}

export interface CopyBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    source_id: ID;
}

export class CopyButton extends BaseComponent<CopyButtonConfig> {
    componentName: string = "copy.button";
}

export interface CopyButtonConfig extends ButtonBUTTON_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    source_id: ID;
}

export class CopyCover extends BaseComponent<CopyCoverConfig> {
    componentName: string = "copy.cover";
}

export interface CopyCoverConfig extends CoverCOVER_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    source_id: ID;
}

export class CopyFan extends BaseComponent<CopyFanConfig> {
    componentName: string = "copy.fan";
}

export interface CopyFanConfig extends FanFAN_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    source_id: ID;
}

export class CopyLock extends BaseComponent<CopyLockConfig> {
    componentName: string = "copy.lock";
}

export interface CopyLockConfig extends LockLOCK_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    source_id: ID;
}

export class CopyNumber extends BaseComponent<CopyNumberConfig> {
    componentName: string = "copy.number";
}

export interface CopyNumberConfig extends NumberNUMBER_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    source_id: ID;
}

export class CopySelect extends BaseComponent<CopySelectConfig> {
    componentName: string = "copy.select";
}

export interface CopySelectConfig extends SelectSELECT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    source_id: ID;
}

export class CopySwitch extends BaseComponent<CopySwitchConfig> {
    componentName: string = "copy.switch";
}

export interface CopySwitchConfig extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    restore_mode?: CopySwitchConfigRestoreMode;
    id?: ID;
    source_id: ID;
}

export type CopySwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export class CopyTextSensor extends BaseComponent<CopyTextSensorConfig> {
    componentName: string = "copy.text_sensor";
}

export interface CopyTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    source_id: ID;
}
