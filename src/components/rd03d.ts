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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Rd03d extends EsphomeComponent<Rd03dConfig> {
    componentName: string = "rd03d";
}

export type Rd03dConfigThrottle = CorePositiveTimePeriodMilliseconds;
export type Rd03dConfigTrackingMode = 'single' | 'multi';

export interface Rd03dConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    throttle?: Rd03dConfigThrottle;
    tracking_mode?: Rd03dConfigTrackingMode;
    uart_id?: ID;
}

export class Rd03dBinarySensor extends EsphomeComponent<Rd03dBinarySensorConfig> {
    componentName: string = "rd03d.binary_sensor";
}

export interface Rd03dBinarySensorConfigTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface Rd03dBinarySensorConfigTarget_1 extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface Rd03dBinarySensorConfigTarget_2 extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface Rd03dBinarySensorConfigTarget_3 extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface Rd03dBinarySensorConfig {
    rd03d_id?: ID;
    target?: Rd03dBinarySensorConfigTarget;
    target_1?: Rd03dBinarySensorConfigTarget_1;
    target_2?: Rd03dBinarySensorConfigTarget_2;
    target_3?: Rd03dBinarySensorConfigTarget_3;
}

export class Rd03dSensor extends EsphomeComponent<Rd03dSensorConfig> {
    componentName: string = "rd03d.sensor";
}

export type Rd03dSensorConfigTarget_1 = Rd03dSensorTARGET_SCHEMA;
export type Rd03dSensorConfigTarget_2 = Rd03dSensorTARGET_SCHEMA;
export type Rd03dSensorConfigTarget_3 = Rd03dSensorTARGET_SCHEMA;

export interface Rd03dSensorConfigTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Rd03dSensorConfig {
    rd03d_id?: ID;
    target_1?: Rd03dSensorConfigTarget_1;
    target_2?: Rd03dSensorConfigTarget_2;
    target_3?: Rd03dSensorConfigTarget_3;
    target_count?: Rd03dSensorConfigTargetCount;
}

export interface Rd03dSensorTARGET_SCHEMAAngle extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGET_SCHEMADistance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGET_SCHEMAResolution extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGET_SCHEMASpeed extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGET_SCHEMAX extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGET_SCHEMAY extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Rd03dSensorTARGET_SCHEMA {
    angle?: Rd03dSensorTARGET_SCHEMAAngle;
    distance?: Rd03dSensorTARGET_SCHEMADistance;
    resolution?: Rd03dSensorTARGET_SCHEMAResolution;
    speed?: Rd03dSensorTARGET_SCHEMASpeed;
    x?: Rd03dSensorTARGET_SCHEMAX;
    y?: Rd03dSensorTARGET_SCHEMAY;
}
