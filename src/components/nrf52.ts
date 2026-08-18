/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: nrf52.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/nrf52
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Nrf52 extends EsphomeComponent<Nrf52Config> {
    componentName: string = "nrf52";
}

export type Nrf52ConfigBootloader = 'adafruit' | 'adafruit_nrf52_sd132' | 'adafruit_nrf52_sd140_v6' | 'adafruit_nrf52_sd140_v7' | 'mcuboot';

export interface Nrf52ConfigFrameworkAdvanced {
    enable_ota_rollback?: boolean;
}

export interface Nrf52ConfigFramework {
    advanced?: Nrf52ConfigFrameworkAdvanced;
    version?: string;
}

export type Nrf52ConfigReg0Voltage = '1.8' | '2.1' | '2.4' | '2.7' | '3.0' | '3.3';

export interface Nrf52ConfigReg0 {
    uicr_erase?: boolean;
    voltage: Nrf52ConfigReg0Voltage;
}

export interface Nrf52Config {
    board: string;
    bootloader?: Nrf52ConfigBootloader;
    cdc_acm?: ID;
    dcdc?: boolean;
    dfu?: any;
    framework?: Nrf52ConfigFramework;
    reg0?: Nrf52ConfigReg0;
    toolchain?: any;
}
