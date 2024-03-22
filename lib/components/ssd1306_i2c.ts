/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1306_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1306_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { Ssd1306BaseSSD1306_SCHEMA } from "./ssd1306_base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1306I2cDisplay extends BaseComponent<Ssd1306I2cDisplayConfig> {
    componentName: string = "ssd1306_i2c.display";
}

export interface Ssd1306I2cDisplayConfig extends Ssd1306BaseSSD1306_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    i2c_id?: ID;
    address?: any;
}
