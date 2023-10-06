/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32Ble extends BaseComponent<Esp32BleConfig> {
    componentName: string = "esp32_ble";
}

export interface Esp32BleConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    io_capability?: Esp32BleConfigIoCapability;
}

export type Esp32BleConfigIoCapability = 'none' | 'keyboard_only' | 'keyboard_display' | 'display_only' | 'display_yes_no';
