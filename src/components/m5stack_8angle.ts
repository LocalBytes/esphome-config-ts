/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: m5stack_8angle.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/m5stack_8angle
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class M5stack_8angle extends EsphomeComponent<M5stack_8angleConfig> {
    componentName: string = "m5stack_8angle";
}

export interface M5stack_8angleConfig {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}

export class M5stack_8angleBinarySensor extends EsphomeComponent<M5stack_8angleBinarySensorConfig> {
    componentName: string = "m5stack_8angle.binary_sensor";
}

export type M5stack_8angleBinarySensorConfig = {
        id?: any;
        m5stack_8angle_id?: ID;
        update_interval?: any;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class M5stack_8angleLight extends EsphomeComponent<M5stack_8angleLightConfig> {
    componentName: string = "m5stack_8angle.light";
}

export interface M5stack_8angleLightConfig extends LightADDRESSABLE_LIGHT_SCHEMA {
    m5stack_8angle_id?: ID;
    output_id?: ID;
}

export class M5stack_8angleSensor extends EsphomeComponent<M5stack_8angleSensorConfig> {
    componentName: string = "m5stack_8angle.sensor";
}

export type M5stack_8angleSensorConfigBitDepth = '8' | '12';
export type M5stack_8angleSensorConfig = {
        accuracy_decimals?: any;
        bit_depth?: M5stack_8angleSensorConfigBitDepth;
        channel: number;
        icon?: any;
        id?: any;
        m5stack_8angle_id?: ID;
        raw?: boolean;
        state_class?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
