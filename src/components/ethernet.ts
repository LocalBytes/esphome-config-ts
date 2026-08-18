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
import type { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export class Ethernet extends EsphomeComponent<EthernetConfig> {
    componentName: string = "ethernet";
}

export interface EthernetBASE_SCHEMAManualIp {
    dns1?: any;
    dns2?: any;
    gateway: string;
    static_ip: string;
    subnet: string;
}

export interface EthernetBASE_SCHEMA extends CoreCOMPONENT_SCHEMA {
    domain?: any;
    enable_on_boot?: boolean;
    id?: ID;
    mac_address?: any;
    manual_ip?: EthernetBASE_SCHEMAManualIp;
    on_connect?: object[];
    on_disconnect?: object[];
    use_address?: string;
}

export type EthernetConfig = EthernetConfigDM9051 | EthernetConfigDP83848 | EthernetConfigENC28J60 | EthernetConfigIP101 | EthernetConfigJL1101 | EthernetConfigKSZ8081 | EthernetConfigKSZ8081RNA | EthernetConfigLAN8670 | EthernetConfigLAN8720 | EthernetConfigOPENETH | EthernetConfigRTL8201 | EthernetConfigW5100 | EthernetConfigW5500 | EthernetConfigW6100 | EthernetConfigW6300;
export type EthernetConfigDM9051 = {};
export type EthernetConfigDP83848 = {};
export type EthernetConfigENC28J60 = {};
export type EthernetConfigIP101 = {};
export type EthernetConfigJL1101 = {};
export type EthernetConfigKSZ8081 = {};
export type EthernetConfigKSZ8081RNA = {};
export type EthernetConfigLAN8670 = {};
export type EthernetConfigLAN8720 = {};
export type EthernetConfigOPENETH = {};
export type EthernetConfigRTL8201 = {};
export type EthernetConfigW5100 = {};
export type EthernetConfigW5500 = {};
export type EthernetConfigW6100 = {};
export type EthernetConfigW6300 = {};
export type EthernetRMII_SCHEMAClkMode = 'CLK_EXT_IN' | 'CLK_OUT';

export interface EthernetRMII_SCHEMAClk {
    mode: EthernetRMII_SCHEMAClkMode;
    pin: Pin;
}

export type EthernetRMII_SCHEMAClkMode = 'GPIO0_IN' | 'GPIO0_OUT' | 'GPIO16_OUT' | 'GPIO17_OUT';

export interface EthernetRMII_SCHEMAPhyRegisters {
    address: string;
    page_id?: any;
    value: string;
}

export interface EthernetRMII_SCHEMA extends EthernetBASE_SCHEMA {
    clk?: EthernetRMII_SCHEMAClk;
    clk_mode?: EthernetRMII_SCHEMAClkMode;
    mdc_pin: Pin;
    mdio_pin: Pin;
    phy_addr?: number;
    phy_registers?: EthernetRMII_SCHEMAPhyRegisters[];
    power_pin?: Pin;
}

export type EthernetSPI_SCHEMAInterface = 'spi2' | 'spi3';
export type EthernetSPI_SCHEMAPollingInterval = CorePositiveTimePeriodMilliseconds;

export interface EthernetSPI_SCHEMA extends EthernetBASE_SCHEMA {
    clk_pin: Pin;
    clock_speed?: number;
    cs_pin: Pin;
    interface?: EthernetSPI_SCHEMAInterface;
    interrupt_pin?: Pin;
    miso_pin: Pin;
    mosi_pin: Pin;
    polling_interval?: EthernetSPI_SCHEMAPollingInterval;
    reset_pin?: Pin;
}
