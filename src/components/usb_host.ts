/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: usb_host.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/usb_host
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class UsbHost extends EsphomeComponent<UsbHostConfig> {
    componentName: string = "usb_host";
}

export interface UsbHostConfigDevices extends CoreCOMPONENTSCHEMA {
    id?: ID;
    pid: string;
    vid: string;
}

export type UsbHostConfigMaxPacketSize = '64' | '128' | '256' | '512' | '1024';

export interface UsbHostConfig extends CoreCOMPONENTSCHEMA {
    devices?: UsbHostConfigDevices[];
    enable_hubs?: boolean;
    id?: ID;
    max_packet_size?: UsbHostConfigMaxPacketSize;
    max_transfer_requests?: number;
}
