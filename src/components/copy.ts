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
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { CoverCOVERSCHEMA } from "./cover.js";
import type { FanFANSCHEMA } from "./fan.js";
import type { LockLOCKSCHEMA } from "./lock.js";
import type { NumberNUMBERSCHEMA } from "./number.js";
import type { SelectSELECTSCHEMA } from "./select.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";
import type { TextTEXTSCHEMA } from "./text.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class CopyBinarySensor extends EsphomeComponent<CopyBinarySensorConfig> {
    componentName: string = "copy.binary_sensor";
}

export type CopyBinarySensorConfig = {
        id?: any;
        source_id: ID;
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;

export class CopyButton extends EsphomeComponent<CopyButtonConfig> {
    componentName: string = "copy.button";
}

export type CopyButtonConfig = {
        id?: ID;
        source_id: ID;
    } & ButtonBUTTONSCHEMA & CoreCOMPONENTSCHEMA;

export class CopyCover extends EsphomeComponent<CopyCoverConfig> {
    componentName: string = "copy.cover";
}

export type CopyCoverConfig = {
        id?: ID;
        source_id: ID;
    } & CoverCOVERSCHEMA & CoreCOMPONENTSCHEMA;

export class CopyFan extends EsphomeComponent<CopyFanConfig> {
    componentName: string = "copy.fan";
}

export type CopyFanConfig = {
        id?: ID;
        source_id: ID;
    } & FanFANSCHEMA & CoreCOMPONENTSCHEMA;

export class CopyLock extends EsphomeComponent<CopyLockConfig> {
    componentName: string = "copy.lock";
}

export type CopyLockConfig = {
        id?: ID;
        source_id: ID;
    } & LockLOCKSCHEMA & CoreCOMPONENTSCHEMA;

export class CopyNumber extends EsphomeComponent<CopyNumberConfig> {
    componentName: string = "copy.number";
}

export type CopyNumberConfig = {
        id?: ID;
        source_id: ID;
    } & NumberNUMBERSCHEMA & CoreCOMPONENTSCHEMA;

export class CopySelect extends EsphomeComponent<CopySelectConfig> {
    componentName: string = "copy.select";
}

export type CopySelectConfig = {
        id?: any;
        source_id: ID;
    } & SelectSELECTSCHEMA & CoreCOMPONENTSCHEMA;

export class CopySensor extends EsphomeComponent<CopySensorConfig> {
    componentName: string = "copy.sensor";
}

export type CopySensorConfig = {
        id?: any;
        source_id: ID;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;

export class CopySwitch extends EsphomeComponent<CopySwitchConfig> {
    componentName: string = "copy.switch";
}

export type CopySwitchConfig = {
        id?: ID;
        source_id: ID;
    } & SwitchSWITCHSCHEMA & CoreCOMPONENTSCHEMA;

export class CopyText extends EsphomeComponent<CopyTextConfig> {
    componentName: string = "copy.text";
}

export type CopyTextConfig = {
        id?: any;
        source_id: ID;
    } & TextTEXTSCHEMA & CoreCOMPONENTSCHEMA;

export class CopyTextSensor extends EsphomeComponent<CopyTextSensorConfig> {
    componentName: string = "copy.text_sensor";
}

export type CopyTextSensorConfig = {
        id?: any;
        source_id: ID;
    } & TextSensorTEXTSENSORSCHEMA & CoreCOMPONENTSCHEMA;
