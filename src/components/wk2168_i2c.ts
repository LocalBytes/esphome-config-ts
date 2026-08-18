/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wk2168_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wk2168_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { WeikaiWKBASESCHEMA } from "./weikai.js";

export class Wk2168I2c extends EsphomeComponent<Wk2168I2cConfig> {
    componentName: string = "wk2168_i2c";
}

export interface Wk2168I2cConfig extends WeikaiWKBASESCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: any;
}
