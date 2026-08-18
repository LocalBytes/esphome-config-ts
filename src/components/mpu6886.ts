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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mpu6886Sensor extends EsphomeComponent<Mpu6886SensorConfig> {
    componentName: string = "mpu6886.sensor";
}

export type Mpu6886SensorConfigAccelX = Mpu6886SensorAccelSchema;
export type Mpu6886SensorConfigAccelY = Mpu6886SensorAccelSchema;
export type Mpu6886SensorConfigAccelZ = Mpu6886SensorAccelSchema;
export type Mpu6886SensorConfigGyroX = Mpu6886SensorGyroSchema;
export type Mpu6886SensorConfigGyroY = Mpu6886SensorGyroSchema;
export type Mpu6886SensorConfigGyroZ = Mpu6886SensorGyroSchema;

export interface Mpu6886SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mpu6886SensorConfig extends CoreCOMPONENTSCHEMA {
    accel_x?: Mpu6886SensorConfigAccelX;
    accel_y?: Mpu6886SensorConfigAccelY;
    accel_z?: Mpu6886SensorConfigAccelZ;
    address?: any;
    gyro_x?: Mpu6886SensorConfigGyroX;
    gyro_y?: Mpu6886SensorConfigGyroY;
    gyro_z?: Mpu6886SensorConfigGyroZ;
    i2c_id?: ID;
    id?: ID;
    temperature?: Mpu6886SensorConfigTemperature;
    update_interval?: any;
}

export interface Mpu6886SensorAccelSchema extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mpu6886SensorGyroSchema extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}
