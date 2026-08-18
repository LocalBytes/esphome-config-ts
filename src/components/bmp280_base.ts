/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp280_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp280_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Bmp280Base extends EsphomeComponent {
    componentName: string = "bmp280_base";
}

export type Bmp280BaseCONFIGSCHEMABASEIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X';
export type Bmp280BaseCONFIGSCHEMABASEPressureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bmp280BaseCONFIGSCHEMABASEPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bmp280BaseCONFIGSCHEMABASEPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bmp280BaseCONFIGSCHEMABASETemperatureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bmp280BaseCONFIGSCHEMABASETemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bmp280BaseCONFIGSCHEMABASETemperatureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmp280BaseCONFIGSCHEMABASE extends CoreCOMPONENTSCHEMA {
    iir_filter?: Bmp280BaseCONFIGSCHEMABASEIirFilter;
    pressure?: Bmp280BaseCONFIGSCHEMABASEPressure;
    temperature?: Bmp280BaseCONFIGSCHEMABASETemperature;
    update_interval?: any;
}
