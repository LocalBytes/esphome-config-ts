/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: zephyr_ble_server.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/zephyr_ble_server
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class ZephyrBleServer extends EsphomeComponent<ZephyrBleServerConfig> {
    componentName: string = "zephyr_ble_server";
}

export interface ZephyrBleServerConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    on_numeric_comparison_request?: object[];
}
