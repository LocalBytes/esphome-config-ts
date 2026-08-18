/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pcf8563.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pcf8563
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TimeTIMESCHEMA } from "./time.js";

export abstract class Pcf8563 extends EsphomeComponent {
    componentName: string = "pcf8563";
}

export class Pcf8563Time extends EsphomeComponent<Pcf8563TimeConfig> {
    componentName: string = "pcf8563.time";
}

export interface Pcf8563TimeConfig extends TimeTIMESCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
