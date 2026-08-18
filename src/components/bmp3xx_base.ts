/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp3xx_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp3xx_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Bmp3xxBase extends EsphomeComponent {
    componentName: string = "bmp3xx_base";
}

export type Bmp3xxBaseCONFIGSCHEMABASEIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Bmp3xxBaseCONFIGSCHEMABASEPressureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X';

export interface Bmp3xxBaseCONFIGSCHEMABASEPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bmp3xxBaseCONFIGSCHEMABASEPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bmp3xxBaseCONFIGSCHEMABASETemperatureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X';

export interface Bmp3xxBaseCONFIGSCHEMABASETemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bmp3xxBaseCONFIGSCHEMABASETemperatureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmp3xxBaseCONFIGSCHEMABASE extends CoreCOMPONENTSCHEMA {
    iir_filter?: Bmp3xxBaseCONFIGSCHEMABASEIirFilter;
    pressure?: Bmp3xxBaseCONFIGSCHEMABASEPressure;
    temperature?: Bmp3xxBaseCONFIGSCHEMABASETemperature;
    update_interval?: any;
}
