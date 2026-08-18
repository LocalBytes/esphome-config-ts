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
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { LightADDRESSABLELIGHTSCHEMA } from "./light.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class M5stack8angle extends EsphomeComponent<M5stack8angleConfig> {
    componentName: string = "m5stack_8angle";
}

export interface M5stack8angleConfig {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}

export class M5stack8angleBinarySensor extends EsphomeComponent<M5stack8angleBinarySensorConfig> {
    componentName: string = "m5stack_8angle.binary_sensor";
}

export type M5stack8angleBinarySensorConfig = {
        id?: any;
        m5stack_8angle_id?: ID;
        update_interval?: any;
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;

export class M5stack8angleLight extends EsphomeComponent<M5stack8angleLightConfig> {
    componentName: string = "m5stack_8angle.light";
}

export interface M5stack8angleLightConfig extends LightADDRESSABLELIGHTSCHEMA {
    m5stack_8angle_id?: ID;
    output_id?: ID;
}

export class M5stack8angleSensor extends EsphomeComponent<M5stack8angleSensorConfig> {
    componentName: string = "m5stack_8angle.sensor";
}

export type M5stack8angleSensorConfigBitDepth = '8' | '12';
export type M5stack8angleSensorConfig = {
        accuracy_decimals?: any;
        bit_depth?: M5stack8angleSensorConfigBitDepth;
        channel: number;
        icon?: any;
        id?: any;
        m5stack_8angle_id?: ID;
        raw?: boolean;
        state_class?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
