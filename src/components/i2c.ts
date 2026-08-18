/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriod, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class I2c extends EsphomeComponent<I2cConfig> {
    componentName: string = "i2c";
}

export type I2cConfigTimeout = CorePositiveTimePeriod;

export interface I2cConfig extends CoreCOMPONENTSCHEMA {
    device?: any;
    frequency?: any;
    id?: ID;
    low_power_mode?: boolean;
    scan?: boolean;
    scl?: Pin;
    scl_pullup_enabled?: boolean;
    sda?: Pin;
    sda_pullup_enabled?: boolean;
    timeout?: I2cConfigTimeout;
}
