/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1327_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1327_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Ssd1327BaseSSD1327_SCHEMA } from "./ssd1327_base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1327I2cDisplay extends EsphomeComponent<Ssd1327I2cDisplayConfig> {
    componentName: string = "ssd1327_i2c.display";
}

export type Ssd1327I2cDisplayConfig = {
        id?: ID;
        i2c_id?: ID;
        address?: any;
    } & Ssd1327BaseSSD1327_SCHEMA & CoreCOMPONENT_SCHEMA;
