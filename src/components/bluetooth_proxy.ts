/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bluetooth_proxy.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bluetooth_proxy
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class BluetoothProxy extends EsphomeComponent<BluetoothProxyConfig> {
    componentName: string = "bluetooth_proxy";
}

export interface BluetoothProxyConfigConnections extends CoreCOMPONENTSCHEMA {
    esp32_ble_id?: ID;
    id?: ID;
}

export interface BluetoothProxyConfig extends CoreCOMPONENTSCHEMA {
    active?: boolean;
    cache_services?: boolean;
    connection_slots?: number;
    connections?: BluetoothProxyConfigConnections[];
    esp32_ble_id?: ID;
    id?: ID;
}
