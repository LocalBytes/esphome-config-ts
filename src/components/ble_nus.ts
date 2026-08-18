/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ble_nus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ble_nus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class BleNus extends EsphomeComponent<BleNusConfig> {
    componentName: string = "ble_nus";
}

export type BleNusConfigType = 'logs' | 'uart';

export interface BleNusConfig extends CoreCOMPONENTSCHEMA {
    debug?: any;
    id?: ID;
    rx_buffer_size?: number;
    tx_buffer_size?: number;
    type?: BleNusConfigType;
}
