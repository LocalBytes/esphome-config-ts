/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ltr390.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ltr390
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ltr390Sensor extends EsphomeComponent<Ltr390SensorConfig> {
    componentName: string = "ltr390.sensor";
}

export interface Ltr390SensorConfigAmbientLight extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Ltr390SensorConfigGainAmbientLight = 'X1' | 'X3' | 'X6' | 'X9' | 'X18';
export type Ltr390SensorConfigGainUv = 'X1' | 'X3' | 'X6' | 'X9' | 'X18';

export interface Ltr390SensorConfigGain {
    ambient_light: Ltr390SensorConfigGainAmbientLight;
    uv: Ltr390SensorConfigGainUv;
}

export interface Ltr390SensorConfigLight extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Ltr390SensorConfigResolutionAmbientLight = '13' | '16' | '17' | '18' | '19' | '20';
export type Ltr390SensorConfigResolutionUv = '13' | '16' | '17' | '18' | '19' | '20';

export interface Ltr390SensorConfigResolution {
    ambient_light: Ltr390SensorConfigResolutionAmbientLight;
    uv: Ltr390SensorConfigResolutionUv;
}

export interface Ltr390SensorConfigUv extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ltr390SensorConfigUvIndex extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ltr390SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    ambient_light?: Ltr390SensorConfigAmbientLight;
    gain?: Ltr390SensorConfigGain;
    i2c_id?: ID;
    id?: ID;
    light?: Ltr390SensorConfigLight;
    resolution?: Ltr390SensorConfigResolution;
    update_interval?: any;
    uv?: Ltr390SensorConfigUv;
    uv_index?: Ltr390SensorConfigUvIndex;
    window_correction_factor?: any;
}
