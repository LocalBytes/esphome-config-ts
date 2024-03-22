/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: as3935_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/as3935_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { As3935AS3935_SCHEMA } from "./as3935.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class As3935I2c extends BaseComponent<As3935I2cConfig> {
    componentName: string = "as3935_i2c";
}

export interface As3935I2cConfig extends As3935AS3935_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    i2c_id?: ID;
    address?: any;
}
