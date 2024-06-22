/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: as3935_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/as3935_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { As3935AS3935_SCHEMA } from "./as3935.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class As3935I2c extends BaseComponent<As3935I2cConfig> {
    componentName: string = "as3935_i2c";
}

export type As3935I2cConfig = {
        id?: any;
        i2c_id?: ID;
        address?: any;
    } & As3935AS3935_SCHEMA & CoreCOMPONENT_SCHEMA;
