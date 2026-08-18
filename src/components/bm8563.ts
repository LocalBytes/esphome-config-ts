/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bm8563.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bm8563
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TimeTIMESCHEMA } from "./time.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Bm8563 extends EsphomeComponent {
    componentName: string = "bm8563";
}

export class Bm8563Time extends EsphomeComponent<Bm8563TimeConfig> {
    componentName: string = "bm8563.time";
}

export type Bm8563TimeConfig = {
        address?: any;
        i2c_id?: ID;
        id?: ID;
    } & TimeTIMESCHEMA & CoreCOMPONENTSCHEMA;
