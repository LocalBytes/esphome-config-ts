/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rd03d.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rd03d
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class Rd03d extends EsphomeComponent<Rd03dConfig> {
    componentName: string = "rd03d";
}

export type Rd03dConfigThrottle = CorePositiveTimePeriodMilliseconds;
export type Rd03dConfigTrackingMode = 'single' | 'multi';

export interface Rd03dConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    throttle?: Rd03dConfigThrottle;
    tracking_mode?: Rd03dConfigTrackingMode;
    uart_id?: ID;
}

export class Rd03dBinarySensor extends EsphomeComponent<Rd03dBinarySensorConfig> {
    componentName: string = "rd03d.binary_sensor";
}

export interface Rd03dBinarySensorConfigTarget extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
}

export interface Rd03dBinarySensorConfigTarget1 extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
}

export interface Rd03dBinarySensorConfigTarget2 extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
}

export interface Rd03dBinarySensorConfigTarget3 extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
}

export interface Rd03dBinarySensorConfig {
    rd03d_id?: ID;
    target?: Rd03dBinarySensorConfigTarget;
    target_1?: Rd03dBinarySensorConfigTarget1;
    target_2?: Rd03dBinarySensorConfigTarget2;
    target_3?: Rd03dBinarySensorConfigTarget3;
}

export class Rd03dSensor extends EsphomeComponent<Rd03dSensorConfig> {
    componentName: string = "rd03d.sensor";
}

export type Rd03dSensorConfigTarget1 = Rd03dSensorTARGETSCHEMA;
export type Rd03dSensorConfigTarget2 = Rd03dSensorTARGETSCHEMA;
export type Rd03dSensorConfigTarget3 = Rd03dSensorTARGETSCHEMA;

export interface Rd03dSensorConfigTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Rd03dSensorConfig {
    rd03d_id?: ID;
    target_1?: Rd03dSensorConfigTarget1;
    target_2?: Rd03dSensorConfigTarget2;
    target_3?: Rd03dSensorConfigTarget3;
    target_count?: Rd03dSensorConfigTargetCount;
}

export interface Rd03dSensorTARGETSCHEMAAngle extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGETSCHEMADistance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGETSCHEMAResolution extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGETSCHEMASpeed extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGETSCHEMAX extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGETSCHEMAY extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGETSCHEMA {
    angle?: Rd03dSensorTARGETSCHEMAAngle;
    distance?: Rd03dSensorTARGETSCHEMADistance;
    resolution?: Rd03dSensorTARGETSCHEMAResolution;
    speed?: Rd03dSensorTARGETSCHEMASpeed;
    x?: Rd03dSensorTARGETSCHEMAX;
    y?: Rd03dSensorTARGETSCHEMAY;
}
