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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Bmi160Sensor extends EsphomeComponent<Bmi160SensorConfig> {
    componentName: string = "bmi160.sensor";
}

export interface Bmi160SensorConfigAccelerationX extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmi160SensorConfigAccelerationY extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmi160SensorConfigAccelerationZ extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmi160SensorConfigGyroscopeX extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmi160SensorConfigGyroscopeY extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmi160SensorConfigGyroscopeZ extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmi160SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmi160SensorConfig extends CoreCOMPONENTSCHEMA {
    acceleration_x?: Bmi160SensorConfigAccelerationX;
    acceleration_y?: Bmi160SensorConfigAccelerationY;
    acceleration_z?: Bmi160SensorConfigAccelerationZ;
    address?: any;
    gyroscope_x?: Bmi160SensorConfigGyroscopeX;
    gyroscope_y?: Bmi160SensorConfigGyroscopeY;
    gyroscope_z?: Bmi160SensorConfigGyroscopeZ;
    i2c_id?: ID;
    id?: ID;
    temperature?: Bmi160SensorConfigTemperature;
    update_interval?: any;
}
