/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: grove_tb6612fng.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/grove_tb6612fng
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class GroveTb6612fng extends EsphomeComponent<GroveTb6612fngConfig> {
    componentName: string = "grove_tb6612fng";
}

export interface GroveTb6612fngConfig extends CoreCOMPONENT_SCHEMA {
    id: string;
    i2c_id?: ID;
    address?: any;
    name?: any;
}
