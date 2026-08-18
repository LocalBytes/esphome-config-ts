/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ch422g.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ch422g
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ch422g extends EsphomeComponent<Ch422gConfig> {
    componentName: string = "ch422g";
}

export interface Ch422gConfig extends CoreCOMPONENTSCHEMA {
    i2c_id?: ID;
    id?: ID;
}
