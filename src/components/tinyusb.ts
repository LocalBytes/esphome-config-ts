/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tinyusb.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tinyusb
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tinyusb extends EsphomeComponent<TinyusbConfig> {
    componentName: string = "tinyusb";
}

export interface TinyusbConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    usb_lang_id?: number;
    usb_manufacturer_str?: string;
    usb_product_id?: number;
    usb_product_str?: string;
    usb_serial_str?: string;
    usb_vendor_id?: number;
}
