/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ch423.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ch423
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ch423 extends EsphomeComponent<Ch423Config> {
    componentName: string = "ch423";
}

export interface Ch423Config extends CoreCOMPONENTSCHEMA {
    i2c_id?: ID;
    id?: ID;
}
