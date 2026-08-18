/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp3xx_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp3xx_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Bmp3xxBaseCONFIGSCHEMABASE } from "./bmp3xx_base.js";

export class Bmp3xxI2cSensor extends EsphomeComponent<Bmp3xxI2cSensorConfig> {
    componentName: string = "bmp3xx_i2c.sensor";
}

export interface Bmp3xxI2cSensorConfig extends Bmp3xxBaseCONFIGSCHEMABASE {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
