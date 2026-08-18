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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class WifiInfoTextSensor extends EsphomeComponent<WifiInfoTextSensorConfig> {
    componentName: string = "wifi_info.text_sensor";
}

export interface WifiInfoTextSensorConfigBssid extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigDnsAddress extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress_0 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress_1 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress_2 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress_3 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress_4 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddress extends TextSensor_TEXT_SENSOR_SCHEMA {
    address_0?: WifiInfoTextSensorConfigIpAddressAddress_0;
    address_1?: WifiInfoTextSensorConfigIpAddressAddress_1;
    address_2?: WifiInfoTextSensorConfigIpAddressAddress_2;
    address_3?: WifiInfoTextSensorConfigIpAddressAddress_3;
    address_4?: WifiInfoTextSensorConfigIpAddressAddress_4;
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigMacAddress extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigPowerSaveMode extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigScanResults extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigSsid extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfig {
    bssid?: WifiInfoTextSensorConfigBssid;
    dns_address?: WifiInfoTextSensorConfigDnsAddress;
    ip_address?: WifiInfoTextSensorConfigIpAddress;
    mac_address?: WifiInfoTextSensorConfigMacAddress;
    power_save_mode?: WifiInfoTextSensorConfigPowerSaveMode;
    scan_results?: WifiInfoTextSensorConfigScanResults;
    ssid?: WifiInfoTextSensorConfigSsid;
}
