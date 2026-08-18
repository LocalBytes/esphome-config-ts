/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ds2484.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ds2484
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ds2484OneWire extends EsphomeComponent<Ds2484OneWireConfig> {
    componentName: string = "ds2484.one_wire";
}

export interface Ds2484OneWireConfig extends CoreCOMPONENT_SCHEMA {
    active_pullup?: boolean;
    address?: any;
    i2c_id?: ID;
    id?: ID;
    strong_pullup?: boolean;
}
