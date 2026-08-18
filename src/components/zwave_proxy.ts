/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: zwave_proxy.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/zwave_proxy
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { UartUARTDEVICESCHEMA } from "./uart.js";

export class ZwaveProxy extends EsphomeComponent<ZwaveProxyConfig> {
    componentName: string = "zwave_proxy";
}

export type ZwaveProxyConfig = {
        id?: ID;
    } & CoreCOMPONENTSCHEMA & UartUARTDEVICESCHEMA;
