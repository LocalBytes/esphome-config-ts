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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { EventEVENTSCHEMA } from "./event.js";
import type { PacketTransportTRANSPORTSCHEMA } from "./packet_transport.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

export class Uart extends EsphomeComponent<UartConfig> {
    componentName: string = "uart";
}

export type UartConfigFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UartConfigParity = 'NONE' | 'EVEN' | 'ODD';
export type UartConfigStopBits = '1' | '2';

export interface UartConfig extends CoreCOMPONENTSCHEMA {
    baud_rate: number;
    data_bits?: number;
    debug?: any;
    flow_control_pin?: Pin;
    flush_timeout?: UartConfigFlushTimeout;
    id?: ID;
    parity?: UartConfigParity;
    port?: any;
    rx_buffer_size?: any;
    rx_full_threshold?: number;
    rx_pin?: any;
    rx_timeout?: number;
    stop_bits?: UartConfigStopBits;
    tx_pin?: Pin;
}

export interface UartUARTDEVICESCHEMA {
    uart_id?: ID;
}

export class UartButton extends EsphomeComponent<UartButtonConfig> {
    componentName: string = "uart.button";
}

export type UartButtonConfig = {
        data: string;
        id?: ID;
    } & ButtonBUTTONSCHEMA & UartUARTDEVICESCHEMA & CoreCOMPONENTSCHEMA;

export class UartEvent extends EsphomeComponent<UartEventConfig> {
    componentName: string = "uart.event";
}

export type UartEventConfig = {
        event_types: string;
        id?: any;
    } & EventEVENTSCHEMA & UartUARTDEVICESCHEMA & CoreCOMPONENTSCHEMA;

export class UartPacketTransport extends EsphomeComponent<UartPacketTransportConfig> {
    componentName: string = "uart.packet_transport";
}

export type UartPacketTransportConfig = {
        id?: ID;
    } & PacketTransportTRANSPORTSCHEMA & UartUARTDEVICESCHEMA;

export class UartSwitch extends EsphomeComponent<UartSwitchConfig> {
    componentName: string = "uart.switch";
}

export interface UartSwitchConfigData {
    turn_off?: any;
    turn_on?: any;
}

export type UartSwitchConfigSendEvery = CorePositiveTimePeriodMilliseconds;
export type UartSwitchConfig = {
        data: UartSwitchConfigData;
        id?: ID;
        send_every?: UartSwitchConfigSendEvery;
    } & SwitchSWITCHSCHEMA & UartUARTDEVICESCHEMA & CoreCOMPONENTSCHEMA;
