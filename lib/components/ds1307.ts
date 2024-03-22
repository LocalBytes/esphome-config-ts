/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ds1307.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ds1307
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { TimeTIME_SCHEMA } from "./time.js";

export class Ds1307Time extends BaseComponent<Ds1307TimeConfig> {
    componentName: string = "ds1307.time";
}

export interface Ds1307TimeConfig extends TimeTIME_SCHEMA {
    id?: ID;
    i2c_id?: ID;
    address?: any;
}

export abstract class Ds1307 extends BaseComponent {
    componentName: string = "ds1307";
}
