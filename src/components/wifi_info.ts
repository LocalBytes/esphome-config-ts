/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wifi_info.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wifi_info
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class WifiInfoTextSensor extends BaseComponent<WifiInfoTextSensorConfig> {
    componentName: string = "wifi_info.text_sensor";
}

export type WifiInfoTextSensorConfigIpAddress = {
        id?: any;
        entity_category?: any;
        update_interval?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type WifiInfoTextSensorConfigScanResults = {
        id?: any;
        entity_category?: any;
        update_interval?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type WifiInfoTextSensorConfigSsid = {
        id?: any;
        entity_category?: any;
        update_interval?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type WifiInfoTextSensorConfigBssid = {
        id?: any;
        entity_category?: any;
        update_interval?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface WifiInfoTextSensorConfigMacAddress extends TextSensorTEXT_SENSOR_SCHEMA {
    id?: any;
    entity_category?: any;
}

export type WifiInfoTextSensorConfigDnsAddress = {
        id?: any;
        entity_category?: any;
        update_interval?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface WifiInfoTextSensorConfig {
    ip_address?: WifiInfoTextSensorConfigIpAddress;
    scan_results?: WifiInfoTextSensorConfigScanResults;
    ssid?: WifiInfoTextSensorConfigSsid;
    bssid?: WifiInfoTextSensorConfigBssid;
    mac_address?: WifiInfoTextSensorConfigMacAddress;
    dns_address?: WifiInfoTextSensorConfigDnsAddress;
}
