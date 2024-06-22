/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: rc522_i2c.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rc522_i2c
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Rc522RC522_SCHEMA } from "./rc522.js";

export class Rc522I2c extends EsphomeComponent<Rc522I2cConfig> {
    componentName: string = "rc522_i2c";
}

export interface Rc522I2cConfig extends Rc522RC522_SCHEMA {
    id?: any;
    i2c_id?: ID;
    address?: any;
}
