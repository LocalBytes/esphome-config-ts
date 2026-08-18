/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xgzp68xx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xgzp68xx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Xgzp68xxSensor extends EsphomeComponent<Xgzp68xxSensorConfig> {
    componentName: string = "xgzp68xx.sensor";
}

export type Xgzp68xxSensorConfigPressureOversampling = '256X' | '512X' | '1024X' | '2048X' | '4096X' | '8192X' | '16384X' | '32768X';

export interface Xgzp68xxSensorConfigPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Xgzp68xxSensorConfigPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Xgzp68xxSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Xgzp68xxSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    k_value?: number;
    pressure?: Xgzp68xxSensorConfigPressure;
    temperature?: Xgzp68xxSensorConfigTemperature;
    update_interval?: any;
}
