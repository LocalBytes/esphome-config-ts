/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pcf85063.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pcf85063
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { TimeTIME_SCHEMA } from "./time.js";

export class Pcf85063Time extends BaseComponent<Pcf85063TimeConfig> {
    componentName: string = "pcf85063.time";
}

export interface Pcf85063TimeConfig extends TimeTIME_SCHEMA {
    id?: ID;
    i2c_id?: ID;
    address?: any;
}

export abstract class Pcf85063 extends BaseComponent {
    componentName: string = "pcf85063";
}
