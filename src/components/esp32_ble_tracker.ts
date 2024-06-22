/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: esp32_ble_tracker.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_ble_tracker
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodSeconds, CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32BleTracker extends EsphomeComponent<Esp32BleTrackerConfig> {
    componentName: string = "esp32_ble_tracker";
}

export type Esp32BleTrackerConfigScanParametersDuration = CorePositiveTimePeriodSeconds;
export type Esp32BleTrackerConfigScanParametersInterval = CorePositiveTimePeriodMilliseconds;
export type Esp32BleTrackerConfigScanParametersWindow = CorePositiveTimePeriodMilliseconds;

export interface Esp32BleTrackerConfigScanParameters {
    duration?: Esp32BleTrackerConfigScanParametersDuration;
    interval?: Esp32BleTrackerConfigScanParametersInterval;
    window?: Esp32BleTrackerConfigScanParametersWindow;
    active?: boolean;
    continuous?: boolean;
}

export interface Esp32BleTrackerConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    ble_id?: ID;
    scan_parameters?: Esp32BleTrackerConfigScanParameters;
    on_ble_advertise?: object[];
    on_ble_service_data_advertise?: object[];
    on_ble_manufacturer_data_advertise?: object[];
    on_scan_end?: object[];
}

export interface Esp32BleTrackerESP_BLE_DEVICE_SCHEMA {
    esp32_ble_id?: ID;
}
