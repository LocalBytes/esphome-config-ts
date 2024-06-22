/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: mpu6886.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mpu6886
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mpu6886Sensor extends EsphomeComponent<Mpu6886SensorConfig> {
    componentName: string = "mpu6886.sensor";
}

export interface Mpu6886SensorAccelSchema extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Mpu6886SensorGyroSchema extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type Mpu6886SensorConfigAccelX = Mpu6886SensorAccelSchema;
export type Mpu6886SensorConfigAccelY = Mpu6886SensorAccelSchema;
export type Mpu6886SensorConfigAccelZ = Mpu6886SensorAccelSchema;
export type Mpu6886SensorConfigGyroX = Mpu6886SensorGyroSchema;
export type Mpu6886SensorConfigGyroY = Mpu6886SensorGyroSchema;
export type Mpu6886SensorConfigGyroZ = Mpu6886SensorGyroSchema;

export interface Mpu6886SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Mpu6886SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    accel_x?: Mpu6886SensorConfigAccelX;
    accel_y?: Mpu6886SensorConfigAccelY;
    accel_z?: Mpu6886SensorConfigAccelZ;
    gyro_x?: Mpu6886SensorConfigGyroX;
    gyro_y?: Mpu6886SensorConfigGyroY;
    gyro_z?: Mpu6886SensorConfigGyroZ;
    temperature?: Mpu6886SensorConfigTemperature;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
