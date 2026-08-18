/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pn7160_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pn7160_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Pn7160PN7160_SCHEMA } from "./pn7160.js";

export class Pn7160I2c extends EsphomeComponent<Pn7160I2cConfig> {
    componentName: string = "pn7160_i2c";
}

export interface Pn7160I2cConfig extends Pn7160PN7160_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: any;
}
