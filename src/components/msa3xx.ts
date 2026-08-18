/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: msa3xx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/msa3xx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Msa3xx extends EsphomeComponent<Msa3xxConfig> {
    componentName: string = "msa3xx";
}

export type Msa3xxConfig = Msa3xxConfigMSA301 | Msa3xxConfigMSA311;
export type Msa3xxConfigMSA301Resolution = '8' | '10' | '12' | '14';

export interface Msa3xxConfigMSA301 {
    type: "MSA301" | "MSA301";
    address?: any;
    i2c_id?: ID;
    resolution?: Msa3xxConfigMSA301Resolution;
}

export type Msa3xxConfigMSA311Resolution = '12';

export interface Msa3xxConfigMSA311 {
    type: "MSA311" | "MSA311";
    address?: any;
    i2c_id?: ID;
    resolution?: Msa3xxConfigMSA311Resolution;
}

export interface Msa3xxMSA_SENSOR_SCHEMA {
    msa3xx_id?: ID;
}

export interface Msa3xx_COMMON_SCHEMACalibration {
    offset_x?: any;
    offset_y?: any;
    offset_z?: any;
}

export type Msa3xx_COMMON_SCHEMARange = '2G' | '4G' | '8G' | '16G';

export interface Msa3xx_COMMON_SCHEMATransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    mirror_z?: boolean;
    swap_xy?: boolean;
}

export interface Msa3xx_COMMON_SCHEMA extends CoreCOMPONENT_SCHEMA {
    calibration?: Msa3xx_COMMON_SCHEMACalibration;
    id?: ID;
    on_active?: object[];
    on_double_tap?: object[];
    on_freefall?: object[];
    on_orientation?: object[];
    on_tap?: object[];
    range?: Msa3xx_COMMON_SCHEMARange;
    transform?: Msa3xx_COMMON_SCHEMATransform;
    update_interval?: any;
}

export class Msa3xxBinarySensor extends EsphomeComponent<Msa3xxBinarySensorConfig> {
    componentName: string = "msa3xx.binary_sensor";
}

export interface Msa3xxBinarySensorConfigActive extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export interface Msa3xxBinarySensorConfigDoubleTap extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export interface Msa3xxBinarySensorConfigTap extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export interface Msa3xxBinarySensorConfig extends Msa3xxMSA_SENSOR_SCHEMA {
    active?: Msa3xxBinarySensorConfigActive;
    double_tap?: Msa3xxBinarySensorConfigDoubleTap;
    tap?: Msa3xxBinarySensorConfigTap;
}

export class Msa3xxSensor extends EsphomeComponent<Msa3xxSensorConfig> {
    componentName: string = "msa3xx.sensor";
}

export type Msa3xxSensorConfigAccelerationX = Msa3xxSensorAccelSchema;
export type Msa3xxSensorConfigAccelerationY = Msa3xxSensorAccelSchema;
export type Msa3xxSensorConfigAccelerationZ = Msa3xxSensorAccelSchema;

export interface Msa3xxSensorConfig extends Msa3xxMSA_SENSOR_SCHEMA {
    acceleration_x?: Msa3xxSensorConfigAccelerationX;
    acceleration_y?: Msa3xxSensorConfigAccelerationY;
    acceleration_z?: Msa3xxSensorConfigAccelerationZ;
}

export interface Msa3xxSensorAccelSchema extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export class Msa3xxTextSensor extends EsphomeComponent<Msa3xxTextSensorConfig> {
    componentName: string = "msa3xx.text_sensor";
}

export interface Msa3xxTextSensorConfigOrientationXy extends TextSensor_TEXT_SENSOR_SCHEMA {
    icon?: any;
}

export interface Msa3xxTextSensorConfigOrientationZ extends TextSensor_TEXT_SENSOR_SCHEMA {
    icon?: any;
}

export interface Msa3xxTextSensorConfig extends Msa3xxMSA_SENSOR_SCHEMA {
    orientation_xy?: Msa3xxTextSensorConfigOrientationXy;
    orientation_z?: Msa3xxTextSensorConfigOrientationZ;
}
