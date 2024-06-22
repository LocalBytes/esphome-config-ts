/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32Ble extends EsphomeComponent<Esp32BleConfig> {
    componentName: string = "esp32_ble";
}

export type Esp32BleConfigIoCapability = 'none' | 'keyboard_only' | 'keyboard_display' | 'display_only' | 'display_yes_no';

export interface Esp32BleConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    io_capability?: Esp32BleConfigIoCapability;
}
