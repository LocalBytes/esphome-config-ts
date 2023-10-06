/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bluetooth_proxy.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bluetooth_proxy
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class BluetoothProxy extends BaseComponent<BluetoothProxyConfig> {
    componentName: string = "bluetooth_proxy";
}

export interface BluetoothProxyConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    active?: boolean;
    cache_services?: boolean;
    connections?: BluetoothProxyConfigConnections[];
    esp32_ble_id?: ID;
}

export interface BluetoothProxyConfigConnections extends CoreCOMPONENT_SCHEMA {
    esp32_ble_id?: ID;
    id?: ID;
}
