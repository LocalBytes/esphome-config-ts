/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: uart.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/uart
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class Uart extends EsphomeComponent<UartConfig> {
    componentName: string = "uart";
}

export type UartConfigStopBits = '1' | '2';
export type UartConfigParity = 'NONE' | 'EVEN' | 'ODD';

export interface UartConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    baud_rate: number;
    tx_pin?: Pin;
    rx_pin?: any;
    rx_buffer_size?: any;
    stop_bits?: UartConfigStopBits;
    data_bits?: number;
    parity?: UartConfigParity;
    debug?: any;
}

export interface UartUART_DEVICE_SCHEMA {
    uart_id?: ID;
}

export class UartSwitch extends EsphomeComponent<UartSwitchConfig> {
    componentName: string = "uart.switch";
}

export type UartSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type UartSwitchConfigSendEvery = CorePositiveTimePeriodMilliseconds;
export type UartSwitchConfig = {
        restore_mode?: UartSwitchConfigRestoreMode;
        id?: ID;
        data: string;
        send_every?: UartSwitchConfigSendEvery;
    } & Switch_SWITCH_SCHEMA & UartUART_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
