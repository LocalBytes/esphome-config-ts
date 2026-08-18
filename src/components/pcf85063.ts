/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pcf85063.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pcf85063
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TimeTIME_SCHEMA } from "./time.js";

export abstract class Pcf85063 extends EsphomeComponent {
    componentName: string = "pcf85063";
}

export class Pcf85063Time extends EsphomeComponent<Pcf85063TimeConfig> {
    componentName: string = "pcf85063.time";
}

export interface Pcf85063TimeConfig extends TimeTIME_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
