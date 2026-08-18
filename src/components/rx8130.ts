/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rx8130.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rx8130
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TimeTIME_SCHEMA } from "./time.js";

export abstract class Rx8130 extends EsphomeComponent {
    componentName: string = "rx8130";
}

export class Rx8130Time extends EsphomeComponent<Rx8130TimeConfig> {
    componentName: string = "rx8130.time";
}

export interface Rx8130TimeConfig extends TimeTIME_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
