/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: usb_cdc_acm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/usb_cdc_acm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class UsbCdcAcm extends EsphomeComponent<UsbCdcAcmConfig> {
    componentName: string = "usb_cdc_acm";
}

export interface UsbCdcAcmConfigInterfaces {
    id?: ID;
}

export interface UsbCdcAcmConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    interfaces?: UsbCdcAcmConfigInterfaces[];
    rx_buffer_size?: number;
    tx_buffer_size?: number;
}
