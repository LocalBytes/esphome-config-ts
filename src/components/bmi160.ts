/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmi160.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmi160
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bmi160Sensor extends EsphomeComponent<Bmi160SensorConfig> {
    componentName: string = "bmi160.sensor";
}

export interface Bmi160SensorConfigAccelerationX extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Bmi160SensorConfigAccelerationY extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Bmi160SensorConfigAccelerationZ extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Bmi160SensorConfigGyroscopeX extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Bmi160SensorConfigGyroscopeY extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Bmi160SensorConfigGyroscopeZ extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Bmi160SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bmi160SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    acceleration_x?: Bmi160SensorConfigAccelerationX;
    acceleration_y?: Bmi160SensorConfigAccelerationY;
    acceleration_z?: Bmi160SensorConfigAccelerationZ;
    gyroscope_x?: Bmi160SensorConfigGyroscopeX;
    gyroscope_y?: Bmi160SensorConfigGyroscopeY;
    gyroscope_z?: Bmi160SensorConfigGyroscopeZ;
    temperature?: Bmi160SensorConfigTemperature;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
