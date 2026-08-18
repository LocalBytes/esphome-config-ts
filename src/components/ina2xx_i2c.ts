/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina2xx_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina2xx_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Ina2xxBaseINA2XXSCHEMA } from "./ina2xx_base.js";

export class Ina2xxI2cSensor extends EsphomeComponent<Ina2xxI2cSensorConfig> {
    componentName: string = "ina2xx_i2c.sensor";
}

export type Ina2xxI2cSensorConfigModel = 'INA228' | 'INA238' | 'INA237';

export interface Ina2xxI2cSensorConfig extends Ina2xxBaseINA2XXSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    model: Ina2xxI2cSensorConfigModel;
}
