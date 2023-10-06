/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wifi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wifi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export class Wifi extends BaseComponent<WifiConfig> {
    componentName: string = "wifi";
}

export interface WifiConfig {
    id?: ID;
    networks?: WifiConfigNetworks[];
    ssid?: any;
    password?: any;
    manual_ip?: WifiConfigManualIp;
    eap?: WifiConfigEap;
    ap?: any;
    domain?: any;
    reboot_timeout?: WifiConfigRebootTimeout;
    power_save_mode?: WifiConfigPowerSaveMode;
    fast_connect?: boolean;
    use_address?: string;
    output_power?: any;
    enable_btm?: boolean;
    enable_rrm?: boolean;
    passive_scan?: boolean;
    enable_on_boot?: boolean;
}

export interface WifiConfigNetworks extends WifiWIFI_NETWORK_BASE {
    bssid?: any;
    hidden?: boolean;
    priority?: any;
    eap?: WifiConfigNetworksEap;
}

export interface WifiConfigNetworksEap extends WifiEAP_AUTH_SCHEMA {
}

export interface WifiConfigManualIp extends WifiSTA_MANUAL_IP_SCHEMA {
}

export interface WifiConfigEap extends WifiEAP_AUTH_SCHEMA {
}

export interface WifiConfigRebootTimeout extends CorePositiveTimePeriodMilliseconds {
}

export type WifiConfigPowerSaveMode = 'NONE' | 'LIGHT' | 'HIGH';

export interface WifiSTA_MANUAL_IP_SCHEMA {
    dns1?: any;
    dns2?: any;
    static_ip: string;
    gateway: string;
    subnet: string;
}

export interface WifiEAP_AUTH_SCHEMA {
    identity?: string;
    username?: string;
    password?: string;
    certificate_authority?: any;
    certificate?: any;
    key?: any;
}

export interface WifiWIFI_NETWORK_BASE {
    id?: ID;
    ssid?: any;
    password?: any;
    channel?: any;
    manual_ip?: WifiWIFI_NETWORK_BASEManualIp;
}

export interface WifiWIFI_NETWORK_BASEManualIp extends WifiSTA_MANUAL_IP_SCHEMA {
}
