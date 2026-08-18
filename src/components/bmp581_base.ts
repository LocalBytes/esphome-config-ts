/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp581_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp581_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Bmp581Base extends EsphomeComponent {
    componentName: string = "bmp581_base";
}

export type Bmp581BaseCONFIGSCHEMABASEPressureIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Bmp581BaseCONFIGSCHEMABASEPressureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';

export interface Bmp581BaseCONFIGSCHEMABASEPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    iir_filter?: Bmp581BaseCONFIGSCHEMABASEPressureIirFilter;
    oversampling?: Bmp581BaseCONFIGSCHEMABASEPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bmp581BaseCONFIGSCHEMABASETemperatureIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Bmp581BaseCONFIGSCHEMABASETemperatureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';

export interface Bmp581BaseCONFIGSCHEMABASETemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    iir_filter?: Bmp581BaseCONFIGSCHEMABASETemperatureIirFilter;
    oversampling?: Bmp581BaseCONFIGSCHEMABASETemperatureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmp581BaseCONFIGSCHEMABASE extends CoreCOMPONENTSCHEMA {
    id?: ID;
    pressure?: Bmp581BaseCONFIGSCHEMABASEPressure;
    temperature?: Bmp581BaseCONFIGSCHEMABASETemperature;
    update_interval?: any;
}
