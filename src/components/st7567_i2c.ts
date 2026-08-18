/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7567_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7567_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { St7567BaseST7567SCHEMA } from "./st7567_base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class St7567I2cDisplay extends EsphomeComponent<St7567I2cDisplayConfig> {
    componentName: string = "st7567_i2c.display";
}

export type St7567I2cDisplayConfig = {
        address?: any;
        i2c_id?: ID;
        id?: ID;
        update_interval?: any;
        pages?: any;
        lambda?: any;
        rotation?: any;
    } & St7567BaseST7567SCHEMA & CoreCOMPONENTSCHEMA;
