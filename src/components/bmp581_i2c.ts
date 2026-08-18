/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp581_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp581_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Bmp581BaseConfig_BASE } from "./bmp581_base.js";

export class Bmp581I2cSensor extends EsphomeComponent<Bmp581I2cSensorConfig> {
    componentName: string = "bmp581_i2c.sensor";
}

export interface Bmp581I2cSensorConfig extends Bmp581BaseConfig_BASE {
    address?: any;
    i2c_id?: ID;
    id?: any;
}
