/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bme68x_bsec2_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme68x_bsec2_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Bme68xBsec2CONFIGSCHEMABASE } from "./bme68x_bsec2.js";

export class Bme68xBsec2I2c extends EsphomeComponent<Bme68xBsec2I2cConfig> {
    componentName: string = "bme68x_bsec2_i2c";
}

export interface Bme68xBsec2I2cConfig extends Bme68xBsec2CONFIGSCHEMABASE {
    address?: any;
    i2c_id?: ID;
    id?: any;
}
