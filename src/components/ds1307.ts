/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ds1307.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ds1307
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TimeTIME_SCHEMA } from "./time.js";

export class Ds1307Time extends EsphomeComponent<Ds1307TimeConfig> {
    componentName: string = "ds1307.time";
}

export interface Ds1307TimeConfig extends TimeTIME_SCHEMA {
    id?: ID;
    i2c_id?: ID;
    address?: any;
}

export abstract class Ds1307 extends EsphomeComponent {
    componentName: string = "ds1307";
}
