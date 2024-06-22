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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ltr390Sensor extends BaseComponent<Ltr390SensorConfig> {
    componentName: string = "ltr390.sensor";
}

export interface Ltr390SensorConfigLight extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Ltr390SensorConfigAmbientLight extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Ltr390SensorConfigUvIndex extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Ltr390SensorConfigUv extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export type Ltr390SensorConfigGain = 'X1' | 'X3' | 'X6' | 'X9' | 'X18';
export type Ltr390SensorConfigResolution = '13' | '16' | '17' | '18' | '19' | '20';

export interface Ltr390SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    light?: Ltr390SensorConfigLight;
    ambient_light?: Ltr390SensorConfigAmbientLight;
    uv_index?: Ltr390SensorConfigUvIndex;
    uv?: Ltr390SensorConfigUv;
    gain?: Ltr390SensorConfigGain;
    resolution?: Ltr390SensorConfigResolution;
    window_correction_factor?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
