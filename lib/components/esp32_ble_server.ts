/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_ble_server.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_ble_server
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32BleServer extends BaseComponent<Esp32BleServerConfig> {
    componentName: string = "esp32_ble_server";
}

export interface Esp32BleServerConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    ble_id?: ID;
    manufacturer?: string;
    manufacturer_data?: any;
    model?: string;
}
