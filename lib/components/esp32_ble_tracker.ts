/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_ble_tracker.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_ble_tracker
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodSeconds, CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32BleTracker extends BaseComponent<Esp32BleTrackerConfig> {
    componentName: string = "esp32_ble_tracker";
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

export interface Esp32BleTrackerConfigScanParameters {
    duration?: Esp32BleTrackerConfigScanParametersDuration;
    interval?: Esp32BleTrackerConfigScanParametersInterval;
    window?: Esp32BleTrackerConfigScanParametersWindow;
    active?: boolean;
    continuous?: boolean;
}

export interface Esp32BleTrackerConfigScanParametersDuration extends CorePositiveTimePeriodSeconds {
}

export interface Esp32BleTrackerConfigScanParametersInterval extends CorePositiveTimePeriodMilliseconds {
}

export interface Esp32BleTrackerConfigScanParametersWindow extends CorePositiveTimePeriodMilliseconds {
}

export interface Esp32BleTrackerESP_BLE_DEVICE_SCHEMA {
    esp32_ble_id?: ID;
}
