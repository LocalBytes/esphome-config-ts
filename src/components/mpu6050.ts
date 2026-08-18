/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mpu6050.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mpu6050
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mpu6050Sensor extends EsphomeComponent<Mpu6050SensorConfig> {
    componentName: string = "mpu6050.sensor";
}

export type Mpu6050SensorConfigAccelX = Mpu6050SensorAccelSchema;
export type Mpu6050SensorConfigAccelY = Mpu6050SensorAccelSchema;
export type Mpu6050SensorConfigAccelZ = Mpu6050SensorAccelSchema;
export type Mpu6050SensorConfigGyroX = Mpu6050SensorGyroSchema;
export type Mpu6050SensorConfigGyroY = Mpu6050SensorGyroSchema;
export type Mpu6050SensorConfigGyroZ = Mpu6050SensorGyroSchema;

export interface Mpu6050SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mpu6050SensorConfig extends CoreCOMPONENT_SCHEMA {
    accel_x?: Mpu6050SensorConfigAccelX;
    accel_y?: Mpu6050SensorConfigAccelY;
    accel_z?: Mpu6050SensorConfigAccelZ;
    address?: any;
    gyro_x?: Mpu6050SensorConfigGyroX;
    gyro_y?: Mpu6050SensorConfigGyroY;
    gyro_z?: Mpu6050SensorConfigGyroZ;
    i2c_id?: ID;
    id?: ID;
    temperature?: Mpu6050SensorConfigTemperature;
    update_interval?: any;
}

export interface Mpu6050SensorAccelSchema extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mpu6050SensorGyroSchema extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}
