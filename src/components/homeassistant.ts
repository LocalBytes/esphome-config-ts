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
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { NumberNUMBERSCHEMA } from "./number.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";
import type { TimeTIMESCHEMA } from "./time.js";

export abstract class Homeassistant extends EsphomeComponent {
    componentName: string = "homeassistant";
}

export interface HomeassistantHOMEASSISTANTIMPORTCONTROLSCHEMA {
    entity_id: string;
    internal?: boolean;
}

export interface HomeassistantHOMEASSISTANTIMPORTSCHEMA {
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
    } & BinarySensorBINARYSENSORSCHEMA & HomeassistantHOMEASSISTANTIMPORTSCHEMA;

export class HomeassistantNumber extends EsphomeComponent<HomeassistantNumberConfig> {
    componentName: string = "homeassistant.number";
}

export type HomeassistantNumberConfig = {
        id?: ID;
    } & NumberNUMBERSCHEMA & HomeassistantHOMEASSISTANTIMPORTCONTROLSCHEMA & CoreCOMPONENTSCHEMA;

export class HomeassistantSensor extends EsphomeComponent<HomeassistantSensorConfig> {
    componentName: string = "homeassistant.sensor";
}

export type HomeassistantSensorConfig = {
        accuracy_decimals?: any;
        id?: any;
        entity_id: string;
        attribute?: any;
    } & SensorSENSORSCHEMA & HomeassistantHOMEASSISTANTIMPORTSCHEMA;

export class HomeassistantSwitch extends EsphomeComponent<HomeassistantSwitchConfig> {
    componentName: string = "homeassistant.switch";
}

export type HomeassistantSwitchConfig = {
        id?: ID;
        entity_id: string;
    } & SwitchSWITCHSCHEMA & HomeassistantHOMEASSISTANTIMPORTCONTROLSCHEMA & CoreCOMPONENTSCHEMA;

export class HomeassistantTextSensor extends EsphomeComponent<HomeassistantTextSensorConfig> {
    componentName: string = "homeassistant.text_sensor";
}

export type HomeassistantTextSensorConfig = {
        id?: any;
    } & TextSensorTEXTSENSORSCHEMA & HomeassistantHOMEASSISTANTIMPORTSCHEMA;

export class HomeassistantTime extends EsphomeComponent<HomeassistantTimeConfig> {
    componentName: string = "homeassistant.time";
}

export type HomeassistantTimeConfig = {
        id?: ID;
    } & TimeTIMESCHEMA & CoreCOMPONENTSCHEMA;
