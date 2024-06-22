/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bk72xx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bk72xx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Bk72xx extends EsphomeComponent<Bk72xxConfig> {
    componentName: string = "bk72xx";
}

export type Bk72xxConfigFamily = 'BK7231N' | 'BK7231Q' | 'BK7231T' | 'BK7251' | 'RTL8710B' | 'RTL8720C';
export type Bk72xxConfigFrameworkLoglevel = 'VERBOSE' | 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' | 'NONE';
export type Bk72xxConfigFrameworkDebug = 'NONE' | 'WIFI' | 'CLIENT' | 'SERVER' | 'SSL' | 'OTA' | 'FDB' | 'MDNS' | 'LWIP' | 'LWIP_ASSERT';
export type Bk72xxConfigFrameworkSdkSilent = 'all' | 'auto' | 'none';
export type Bk72xxConfigFrameworkUartPort = '0' | '1' | '2';
export type Bk72xxConfigFrameworkOptions = Record<string, string>;

export interface Bk72xxConfigFramework {
    version?: string;
    source?: string;
    loglevel?: Bk72xxConfigFrameworkLoglevel;
    debug?: Bk72xxConfigFrameworkDebug[];
    sdk_silent?: Bk72xxConfigFrameworkSdkSilent;
    uart_port?: Bk72xxConfigFrameworkUartPort;
    gpio_recover?: boolean;
    options: Bk72xxConfigFrameworkOptions;
}

export interface Bk72xxConfig {
    id?: ID;
    board: string;
    family?: Bk72xxConfigFamily;
    framework?: Bk72xxConfigFramework;
}
