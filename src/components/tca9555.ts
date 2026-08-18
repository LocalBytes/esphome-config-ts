/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tca9555.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tca9555
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tca9555 extends EsphomeComponent<Tca9555Config> {
    componentName: string = "tca9555";
}

export interface Tca9555Config extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id: string;
    interrupt_pin?: Pin;
}
