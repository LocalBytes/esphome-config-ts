/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wifi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wifi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export class Wifi extends EsphomeComponent<WifiConfig> {
    componentName: string = "wifi";
}

export type WifiConfigBandMode = 'AUTO' | '2.4GHZ' | '5GHZ';
export type WifiConfigEap = WifiEAP_AUTH_SCHEMA;
export type WifiConfigManualIp = WifiSTA_MANUAL_IP_SCHEMA;
export type WifiConfigMinAuthMode = 'WPA' | 'WPA2' | 'WPA3';
export type WifiConfigNetworksEap = WifiEAP_AUTH_SCHEMA;

export interface WifiConfigNetworks extends WifiWIFI_NETWORK_BASE {
    bssid?: any;
    eap?: WifiConfigNetworksEap;
    hidden?: boolean;
    priority?: number;
}

export type WifiConfigPhyMode = 'AUTO' | '11B' | '11G' | '11N';
export type WifiConfigPowerSaveMode = 'NONE' | 'LIGHT' | 'HIGH';
export type WifiConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;

export interface WifiConfig {
    ap?: any;
    band_mode?: WifiConfigBandMode;
    domain?: any;
    eap?: WifiConfigEap;
    enable_btm?: boolean;
    enable_on_boot?: boolean;
    enable_rrm?: boolean;
    fast_connect?: boolean;
    id?: ID;
    manual_ip?: WifiConfigManualIp;
    min_auth_mode?: WifiConfigMinAuthMode;
    networks?: WifiConfigNetworks[];
    on_connect?: object[];
    on_disconnect?: object[];
    output_power?: any;
    passive_scan?: boolean;
    password?: any;
    phy_mode?: WifiConfigPhyMode;
    post_connect_roaming?: boolean;
    power_save_mode?: WifiConfigPowerSaveMode;
    reboot_timeout?: WifiConfigRebootTimeout;
    ssid?: any;
    use_address?: string;
    use_psram?: boolean;
}

export type WifiEAP_AUTH_SCHEMATtlsPhase_2 = 'pap' | 'chap' | 'mschap' | 'mschapv2' | 'eap';

export interface WifiEAP_AUTH_SCHEMA {
    certificate?: any;
    certificate_authority?: any;
    identity?: string;
    key?: any;
    password?: string;
    ttls_phase_2?: WifiEAP_AUTH_SCHEMATtlsPhase_2;
    username?: string;
}

export interface WifiSTA_MANUAL_IP_SCHEMA {
    dns1?: any;
    dns2?: any;
    gateway: string;
    static_ip: string;
    subnet: string;
}

export type WifiWIFI_NETWORK_BASEManualIp = WifiSTA_MANUAL_IP_SCHEMA;

export interface WifiWIFI_NETWORK_BASE {
    channel?: any;
    id?: ID;
    manual_ip?: WifiWIFI_NETWORK_BASEManualIp;
    password?: any;
    ssid?: any;
}
