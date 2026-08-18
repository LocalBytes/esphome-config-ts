/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ens160_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ens160_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Ens160BaseCONFIGSCHEMABASE } from "./ens160_base.js";

export class Ens160I2cSensor extends EsphomeComponent<Ens160I2cSensorConfig> {
    componentName: string = "ens160_i2c.sensor";
}

export interface Ens160I2cSensorConfig extends Ens160BaseCONFIGSCHEMABASE {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
