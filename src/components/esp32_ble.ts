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
import type { CorePositiveTimePeriodMilliseconds, CorePositiveTimePeriodSeconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Esp32Ble extends EsphomeComponent<Esp32BleConfig> {
    componentName: string = "esp32_ble";
}

export type Esp32BleConfigAdvertisingCycleTime = CorePositiveTimePeriodMilliseconds;
export type Esp32BleConfigAuthReqMode = 'no_bond' | 'bond' | 'mitm' | 'bond_mitm' | 'sc_only' | 'sc_bond' | 'sc_mitm' | 'sc_mitm_bond';
export type Esp32BleConfigConnectionTimeout = CorePositiveTimePeriodSeconds;
export type Esp32BleConfigIoCapability = 'none' | 'keyboard_only' | 'keyboard_display' | 'display_only' | 'display_yes_no';

export interface Esp32BleConfig extends CoreCOMPONENTSCHEMA {
    advertising?: boolean;
    advertising_cycle_time?: Esp32BleConfigAdvertisingCycleTime;
    auth_req_mode?: Esp32BleConfigAuthReqMode;
    connection_timeout?: Esp32BleConfigConnectionTimeout;
    disable_bt_logs?: boolean;
    enable_on_boot?: boolean;
    id?: ID;
    io_capability?: Esp32BleConfigIoCapability;
    max_connections?: number;
    max_key_size?: number;
    max_notifications?: number;
    min_key_size?: number;
    name?: string;
    use_psram?: boolean;
}
