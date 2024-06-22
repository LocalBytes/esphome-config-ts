/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ethernet.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ethernet
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ethernet extends EsphomeComponent<EthernetConfig> {
    componentName: string = "ethernet";
}

export type EthernetConfigType = 'LAN8720' | 'RTL8201' | 'DP83848' | 'IP101' | 'JL1101' | 'KSZ8081' | 'KSZ8081RNA';
export type EthernetConfigClkMode = 'GPIO0_IN' | 'GPIO0_OUT' | 'GPIO16_OUT' | 'GPIO17_OUT';

export interface EthernetConfigManualIp {
    static_ip: string;
    gateway: string;
    subnet: string;
    dns1?: any;
    dns2?: any;
}

export interface EthernetConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    type: EthernetConfigType;
    mdc_pin: Pin;
    mdio_pin: Pin;
    clk_mode?: EthernetConfigClkMode;
    phy_addr?: number;
    power_pin?: Pin;
    manual_ip?: EthernetConfigManualIp;
    domain?: any;
    use_address?: string;
}
