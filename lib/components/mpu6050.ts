/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mpu6050.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mpu6050
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mpu6050Sensor extends BaseComponent<Mpu6050SensorConfig> {
    componentName: string = "mpu6050.sensor";
}

export interface Mpu6050SensorAccelSchema extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Mpu6050SensorGyroSchema extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Mpu6050SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    accel_x?: Mpu6050SensorConfigAccelX;
    accel_y?: Mpu6050SensorConfigAccelY;
    accel_z?: Mpu6050SensorConfigAccelZ;
    gyro_x?: Mpu6050SensorConfigGyroX;
    gyro_y?: Mpu6050SensorConfigGyroY;
    gyro_z?: Mpu6050SensorConfigGyroZ;
    temperature?: Mpu6050SensorConfigTemperature;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Mpu6050SensorConfigAccelX extends Mpu6050SensorAccelSchema {
}

export interface Mpu6050SensorConfigAccelY extends Mpu6050SensorAccelSchema {
}

export interface Mpu6050SensorConfigAccelZ extends Mpu6050SensorAccelSchema {
}

export interface Mpu6050SensorConfigGyroX extends Mpu6050SensorGyroSchema {
}

export interface Mpu6050SensorConfigGyroY extends Mpu6050SensorGyroSchema {
}

export interface Mpu6050SensorConfigGyroZ extends Mpu6050SensorGyroSchema {
}

export interface Mpu6050SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
