/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: spa06_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/spa06_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Spa06BaseCONFIGSCHEMABASE } from "./spa06_base.js";

export class Spa06I2cSensor extends EsphomeComponent<Spa06I2cSensorConfig> {
    componentName: string = "spa06_i2c.sensor";
}

export interface Spa06I2cSensorConfig extends Spa06BaseCONFIGSCHEMABASE {
    address?: any;
    i2c_id?: ID;
    id?: any;
}
