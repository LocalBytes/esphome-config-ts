/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bme280_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme280_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Bme280Base extends EsphomeComponent {
    componentName: string = "bme280_base";
}

export type Bme280BaseCONFIGSCHEMABASEHumidityOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme280BaseCONFIGSCHEMABASEHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bme280BaseCONFIGSCHEMABASEHumidityOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme280BaseCONFIGSCHEMABASEIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X';
export type Bme280BaseCONFIGSCHEMABASEPressureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme280BaseCONFIGSCHEMABASEPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bme280BaseCONFIGSCHEMABASEPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme280BaseCONFIGSCHEMABASETemperatureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme280BaseCONFIGSCHEMABASETemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bme280BaseCONFIGSCHEMABASETemperatureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme280BaseCONFIGSCHEMABASE extends CoreCOMPONENTSCHEMA {
    humidity?: Bme280BaseCONFIGSCHEMABASEHumidity;
    iir_filter?: Bme280BaseCONFIGSCHEMABASEIirFilter;
    pressure?: Bme280BaseCONFIGSCHEMABASEPressure;
    temperature?: Bme280BaseCONFIGSCHEMABASETemperature;
    update_interval?: any;
}
