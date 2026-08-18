/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp280_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp280_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Bmp280BaseConfig_BASE } from "./bmp280_base.js";

export class Bmp280I2cSensor extends EsphomeComponent<Bmp280I2cSensorConfig> {
    componentName: string = "bmp280_i2c.sensor";
}

export interface Bmp280I2cSensorConfig extends Bmp280BaseConfig_BASE {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
