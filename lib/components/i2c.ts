/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class I2c extends BaseComponent<I2cConfig> {
    componentName: string = "i2c";
}

export interface I2cConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    sda?: any;
    sda_pullup_enabled?: boolean;
    scl?: any;
    scl_pullup_enabled?: boolean;
    frequency?: any;
    scan?: boolean;
}
