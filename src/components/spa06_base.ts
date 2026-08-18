/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: spa06_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/spa06_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Spa06Base extends EsphomeComponent {
    componentName: string = "spa06_base";
}

export type Spa06BaseCONFIGSCHEMABASEPressureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Spa06BaseCONFIGSCHEMABASEPressureSampleRate = '1' | '2' | '4' | '8' | '16' | '25' | '32' | '50' | '64' | '100' | '128' | '200' | '25p16' | '25p8' | '25p4' | '25p2';

export interface Spa06BaseCONFIGSCHEMABASEPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Spa06BaseCONFIGSCHEMABASEPressureOversampling;
    sample_rate?: Spa06BaseCONFIGSCHEMABASEPressureSampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Spa06BaseCONFIGSCHEMABASETemperatureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Spa06BaseCONFIGSCHEMABASETemperatureSampleRate = '1' | '2' | '4' | '8' | '16' | '25' | '32' | '50' | '64' | '100' | '128' | '200' | '25p16' | '25p8' | '25p4' | '25p2';

export interface Spa06BaseCONFIGSCHEMABASETemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Spa06BaseCONFIGSCHEMABASETemperatureOversampling;
    sample_rate?: Spa06BaseCONFIGSCHEMABASETemperatureSampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Spa06BaseCONFIGSCHEMABASE extends CoreCOMPONENTSCHEMA {
    id?: ID;
    pressure?: Spa06BaseCONFIGSCHEMABASEPressure;
    temperature?: Spa06BaseCONFIGSCHEMABASETemperature;
    update_interval?: any;
}
