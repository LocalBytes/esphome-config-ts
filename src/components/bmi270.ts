/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmi270.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmi270
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Motion_CONFIG_SCHEMA } from "./motion.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Bmi270Motion extends EsphomeComponent<Bmi270MotionConfig> {
    componentName: string = "bmi270.motion";
}

export type Bmi270MotionConfigAccelerometerOdr = '12_5HZ' | '25HZ' | '50HZ' | '100HZ' | '200HZ' | '400HZ' | '800HZ' | '1600HZ';
export type Bmi270MotionConfigAccelerometerRange = '2G' | '4G' | '8G' | '16G';
export type Bmi270MotionConfigGyroscopeOdr = '25HZ' | '50HZ' | '100HZ' | '200HZ' | '400HZ' | '800HZ' | '1600HZ' | '3200HZ';
export type Bmi270MotionConfigGyroscopeRange = '2000DPS' | '1000DPS' | '500DPS' | '250DPS' | '125DPS';

export interface Bmi270MotionConfig extends Motion_CONFIG_SCHEMA {
    accelerometer_odr?: Bmi270MotionConfigAccelerometerOdr;
    accelerometer_range?: Bmi270MotionConfigAccelerometerRange;
    address?: any;
    gyroscope_odr?: Bmi270MotionConfigGyroscopeOdr;
    gyroscope_range?: Bmi270MotionConfigGyroscopeRange;
    i2c_id?: ID;
    id?: ID;
}

export class Bmi270Sensor extends EsphomeComponent<Bmi270SensorConfig> {
    componentName: string = "bmi270.sensor";
}

export type Bmi270SensorConfigType = 'temperature';

export interface Bmi270SensorConfig extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    bmi270_id?: ID;
    device_class?: any;
    icon?: any;
    state_class?: any;
    type?: Bmi270SensorConfigType;
    unit_of_measurement?: any;
}
