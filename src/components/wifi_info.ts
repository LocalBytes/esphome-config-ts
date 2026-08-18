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
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class WifiInfoTextSensor extends EsphomeComponent<WifiInfoTextSensorConfig> {
    componentName: string = "wifi_info.text_sensor";
}

export interface WifiInfoTextSensorConfigBssid extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigDnsAddress extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress0 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress1 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress2 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress3 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddressAddress4 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface WifiInfoTextSensorConfigIpAddress extends TextSensorTEXTSENSORSCHEMA {
    address_0?: WifiInfoTextSensorConfigIpAddressAddress0;
    address_1?: WifiInfoTextSensorConfigIpAddressAddress1;
    address_2?: WifiInfoTextSensorConfigIpAddressAddress2;
    address_3?: WifiInfoTextSensorConfigIpAddressAddress3;
    address_4?: WifiInfoTextSensorConfigIpAddressAddress4;
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigMacAddress extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigPowerSaveMode extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigScanResults extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    id?: any;
}

export interface WifiInfoTextSensorConfigSsid extends TextSensorTEXTSENSORSCHEMA {
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
