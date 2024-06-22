/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: pcf8574.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pcf8574
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pcf8574 extends EsphomeComponent<Pcf8574Config> {
    componentName: string = "pcf8574";
}

export interface Pcf8574Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    pcf8575?: boolean;
    i2c_id?: ID;
    address?: any;
}
