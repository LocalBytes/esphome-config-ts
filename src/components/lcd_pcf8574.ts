/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: lcd_pcf8574.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lcd_pcf8574
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LcdBaseLCD_SCHEMA } from "./lcd_base.js";

export class LcdPcf8574Display extends EsphomeComponent<LcdPcf8574DisplayConfig> {
    componentName: string = "lcd_pcf8574.display";
}

export interface LcdPcf8574DisplayConfig extends LcdBaseLCD_SCHEMA {
    id?: ID;
    i2c_id?: ID;
    address?: any;
}
