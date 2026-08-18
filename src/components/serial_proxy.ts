/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: serial_proxy.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/serial_proxy
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SerialProxy extends EsphomeComponent<SerialProxyConfig> {
    componentName: string = "serial_proxy";
}

export type SerialProxyConfigPortType = 'TTL' | 'RS232' | 'RS485';

export interface SerialProxyConfig extends CoreCOMPONENT_SCHEMA {
    dtr_pin?: Pin;
    id?: ID;
    name: string;
    port_type: SerialProxyConfigPortType;
    rts_pin?: Pin;
    uart_id?: ID;
}
