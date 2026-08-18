/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: qmp6988.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/qmp6988
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Qmp6988Sensor extends EsphomeComponent<Qmp6988SensorConfig> {
    componentName: string = "qmp6988.sensor";
}

export type Qmp6988SensorConfigIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X';
export type Qmp6988SensorConfigPressureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X';

export interface Qmp6988SensorConfigPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Qmp6988SensorConfigPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Qmp6988SensorConfigTemperatureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X';

export interface Qmp6988SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Qmp6988SensorConfigTemperatureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Qmp6988SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    iir_filter?: Qmp6988SensorConfigIirFilter;
    pressure?: Qmp6988SensorConfigPressure;
    temperature?: Qmp6988SensorConfigTemperature;
    update_interval?: any;
}
