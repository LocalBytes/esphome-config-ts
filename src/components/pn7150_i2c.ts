/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pn7150_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pn7150_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pn7150I2c extends EsphomeComponent<Pn7150I2cConfig> {
    componentName: string = "pn7150_i2c";
}

export type Pn7150I2cConfigTagTtl = CorePositiveTimePeriodMilliseconds;

export interface Pn7150I2cConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    emulation_message?: string;
    i2c_id?: ID;
    id?: ID;
    irq_pin: Pin;
    on_emulated_tag_scan?: object[];
    on_finished_write?: object[];
    on_tag?: object[];
    on_tag_removed?: object[];
    tag_ttl?: Pn7150I2cConfigTagTtl;
    ven_pin: Pin;
}
