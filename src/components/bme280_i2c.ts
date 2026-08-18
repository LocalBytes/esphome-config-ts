/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bme280_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme280_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Bme280BaseCONFIGSCHEMABASE } from "./bme280_base.js";

export class Bme280I2cSensor extends EsphomeComponent<Bme280I2cSensorConfig> {
    componentName: string = "bme280_i2c.sensor";
}

export interface Bme280I2cSensorConfig extends Bme280BaseCONFIGSCHEMABASE {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
