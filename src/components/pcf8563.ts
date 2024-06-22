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
import type { TimeTIME_SCHEMA } from "./time.js";

export class Pcf8563Time extends EsphomeComponent<Pcf8563TimeConfig> {
    componentName: string = "pcf8563.time";
}

export interface Pcf8563TimeConfig extends TimeTIME_SCHEMA {
    id?: ID;
    i2c_id?: ID;
    address?: any;
}

export abstract class Pcf8563 extends EsphomeComponent {
    componentName: string = "pcf8563";
}
