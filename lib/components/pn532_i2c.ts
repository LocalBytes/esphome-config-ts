/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pn532_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pn532_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { Pn532PN532_SCHEMA } from "./pn532.js";

export class Pn532I2c extends BaseComponent<Pn532I2cConfig> {
    componentName: string = "pn532_i2c";
}

export interface Pn532I2cConfig extends Pn532PN532_SCHEMA {
    id?: any;
    i2c_id?: ID;
    address?: any;
}
