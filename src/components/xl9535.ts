/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: xl9535.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xl9535
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Xl9535 extends EsphomeComponent<Xl9535Config> {
    componentName: string = "xl9535";
}

export interface Xl9535Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    i2c_id?: ID;
    address?: any;
}
