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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { CoverCOVER_SCHEMA } from "./cover.js";
import type { FanFAN_SCHEMA } from "./fan.js";
import type { LockLOCK_SCHEMA } from "./lock.js";
import type { NumberNUMBER_SCHEMA } from "./number.js";
import type { SelectSELECT_SCHEMA } from "./select.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class CopySensor extends BaseComponent<CopySensorConfig> {
    componentName: string = "copy.sensor";
}

export type CopySensorConfig = {
        id?: any;
        source_id: ID;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyBinarySensor extends BaseComponent<CopyBinarySensorConfig> {
    componentName: string = "copy.binary_sensor";
}

export type CopyBinarySensorConfig = {
        id?: any;
        source_id: ID;
    } & BinarySensorBINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyButton extends BaseComponent<CopyButtonConfig> {
    componentName: string = "copy.button";
}

export type CopyButtonConfig = {
        id?: ID;
        source_id: ID;
    } & ButtonBUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyCover extends BaseComponent<CopyCoverConfig> {
    componentName: string = "copy.cover";
}

export type CopyCoverConfig = {
        id?: any;
        source_id: ID;
    } & CoverCOVER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyFan extends BaseComponent<CopyFanConfig> {
    componentName: string = "copy.fan";
}

export type CopyFanConfig = {
        id?: any;
        source_id: ID;
    } & FanFAN_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyLock extends BaseComponent<CopyLockConfig> {
    componentName: string = "copy.lock";
}

export type CopyLockConfig = {
        id?: ID;
        source_id: ID;
    } & LockLOCK_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyNumber extends BaseComponent<CopyNumberConfig> {
    componentName: string = "copy.number";
}

export type CopyNumberConfig = {
        id?: ID;
        source_id: ID;
    } & NumberNUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopySelect extends BaseComponent<CopySelectConfig> {
    componentName: string = "copy.select";
}

export type CopySelectConfig = {
        id?: any;
        source_id: ID;
    } & SelectSELECT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopySwitch extends BaseComponent<CopySwitchConfig> {
    componentName: string = "copy.switch";
}

export type CopySwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type CopySwitchConfig = {
        restore_mode?: CopySwitchConfigRestoreMode;
        id?: ID;
        source_id: ID;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;

export class CopyTextSensor extends BaseComponent<CopyTextSensorConfig> {
    componentName: string = "copy.text_sensor";
}

export type CopyTextSensorConfig = {
        id?: any;
        source_id: ID;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
