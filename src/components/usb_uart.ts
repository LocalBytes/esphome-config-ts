/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: usb_uart.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/usb_uart
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export class UsbUart extends EsphomeComponent<UsbUartConfig> {
    componentName: string = "usb_uart";
}

export type UsbUartConfig = UsbUartConfigCDC_ACM | UsbUartConfigCH340 | UsbUartConfigCH34X | UsbUartConfigCP210X | UsbUartConfigESP_JTAG | UsbUartConfigFT2232 | UsbUartConfigFT232 | UsbUartConfigFT4232 | UsbUartConfigPL2303 | UsbUartConfigPL2303GB | UsbUartConfigPL2303GC | UsbUartConfigPL2303GE | UsbUartConfigPL2303GL | UsbUartConfigPL2303GS | UsbUartConfigPL2303GT | UsbUartConfigSTM32_VCP;
export type UsbUartConfigCDC_ACMChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigCDC_ACMChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigCDC_ACMChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigCDC_ACMChannels {
    baud_rate?: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigCDC_ACMChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigCDC_ACMChannelsParity;
    stop_bits?: UsbUartConfigCDC_ACMChannelsStopBits;
}

export interface UsbUartConfigCDC_ACM {
    type: "CDC_ACM" | "CDC_ACM";
    channels: UsbUartConfigCDC_ACMChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigCH340ChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigCH340ChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigCH340ChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigCH340Channels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigCH340ChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigCH340ChannelsParity;
    stop_bits?: UsbUartConfigCH340ChannelsStopBits;
}

export interface UsbUartConfigCH340 {
    type: "CH340" | "CH340";
    channels: UsbUartConfigCH340Channels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigCH34XChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigCH34XChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigCH34XChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigCH34XChannels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigCH34XChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigCH34XChannelsParity;
    stop_bits?: UsbUartConfigCH34XChannelsStopBits;
}

export interface UsbUartConfigCH34X {
    type: "CH34X" | "CH34X";
    channels: UsbUartConfigCH34XChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigCP210XChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigCP210XChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigCP210XChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigCP210XChannels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigCP210XChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigCP210XChannelsParity;
    stop_bits?: UsbUartConfigCP210XChannelsStopBits;
}

export interface UsbUartConfigCP210X {
    type: "CP210X" | "CP210X";
    channels: UsbUartConfigCP210XChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigESP_JTAGChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigESP_JTAGChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigESP_JTAGChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigESP_JTAGChannels {
    baud_rate?: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigESP_JTAGChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigESP_JTAGChannelsParity;
    stop_bits?: UsbUartConfigESP_JTAGChannelsStopBits;
}

export interface UsbUartConfigESP_JTAG {
    type: "ESP_JTAG" | "ESP_JTAG";
    channels: UsbUartConfigESP_JTAGChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigFT2232ChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigFT2232ChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigFT2232ChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigFT2232Channels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigFT2232ChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigFT2232ChannelsParity;
    stop_bits?: UsbUartConfigFT2232ChannelsStopBits;
}

export interface UsbUartConfigFT2232 {
    type: "FT2232" | "FT2232";
    channels: UsbUartConfigFT2232Channels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigFT232ChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigFT232ChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigFT232ChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigFT232Channels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigFT232ChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigFT232ChannelsParity;
    stop_bits?: UsbUartConfigFT232ChannelsStopBits;
}

export interface UsbUartConfigFT232 {
    type: "FT232" | "FT232";
    channels: UsbUartConfigFT232Channels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigFT4232ChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigFT4232ChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigFT4232ChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigFT4232Channels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigFT4232ChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigFT4232ChannelsParity;
    stop_bits?: UsbUartConfigFT4232ChannelsStopBits;
}

export interface UsbUartConfigFT4232 {
    type: "FT4232" | "FT4232";
    channels: UsbUartConfigFT4232Channels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigPL2303ChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigPL2303ChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigPL2303ChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigPL2303Channels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigPL2303ChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigPL2303ChannelsParity;
    stop_bits?: UsbUartConfigPL2303ChannelsStopBits;
}

export interface UsbUartConfigPL2303 {
    type: "PL2303" | "PL2303";
    channels: UsbUartConfigPL2303Channels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigPL2303GBChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigPL2303GBChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigPL2303GBChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigPL2303GBChannels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigPL2303GBChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigPL2303GBChannelsParity;
    stop_bits?: UsbUartConfigPL2303GBChannelsStopBits;
}

export interface UsbUartConfigPL2303GB {
    type: "PL2303GB" | "PL2303GB";
    channels: UsbUartConfigPL2303GBChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigPL2303GCChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigPL2303GCChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigPL2303GCChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigPL2303GCChannels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigPL2303GCChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigPL2303GCChannelsParity;
    stop_bits?: UsbUartConfigPL2303GCChannelsStopBits;
}

export interface UsbUartConfigPL2303GC {
    type: "PL2303GC" | "PL2303GC";
    channels: UsbUartConfigPL2303GCChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigPL2303GEChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigPL2303GEChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigPL2303GEChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigPL2303GEChannels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigPL2303GEChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigPL2303GEChannelsParity;
    stop_bits?: UsbUartConfigPL2303GEChannelsStopBits;
}

export interface UsbUartConfigPL2303GE {
    type: "PL2303GE" | "PL2303GE";
    channels: UsbUartConfigPL2303GEChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigPL2303GLChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigPL2303GLChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigPL2303GLChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigPL2303GLChannels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigPL2303GLChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigPL2303GLChannelsParity;
    stop_bits?: UsbUartConfigPL2303GLChannelsStopBits;
}

export interface UsbUartConfigPL2303GL {
    type: "PL2303GL" | "PL2303GL";
    channels: UsbUartConfigPL2303GLChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigPL2303GSChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigPL2303GSChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigPL2303GSChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigPL2303GSChannels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigPL2303GSChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigPL2303GSChannelsParity;
    stop_bits?: UsbUartConfigPL2303GSChannelsStopBits;
}

export interface UsbUartConfigPL2303GS {
    type: "PL2303GS" | "PL2303GS";
    channels: UsbUartConfigPL2303GSChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigPL2303GTChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigPL2303GTChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigPL2303GTChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigPL2303GTChannels {
    baud_rate: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigPL2303GTChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigPL2303GTChannelsParity;
    stop_bits?: UsbUartConfigPL2303GTChannelsStopBits;
}

export interface UsbUartConfigPL2303GT {
    type: "PL2303GT" | "PL2303GT";
    channels: UsbUartConfigPL2303GTChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}

export type UsbUartConfigSTM32_VCPChannelsFlushTimeout = CorePositiveTimePeriodMilliseconds;
export type UsbUartConfigSTM32_VCPChannelsParity = 'NONE' | 'EVEN' | 'ODD' | 'MARK' | 'SPACE';
export type UsbUartConfigSTM32_VCPChannelsStopBits = '1' | '2' | '1.5';

export interface UsbUartConfigSTM32_VCPChannels {
    baud_rate?: number;
    buffer_size?: number;
    data_bits?: number;
    debug?: boolean;
    debug_prefix?: string;
    dummy_receiver?: boolean;
    flush_timeout?: UsbUartConfigSTM32_VCPChannelsFlushTimeout;
    id?: ID;
    parity?: UsbUartConfigSTM32_VCPChannelsParity;
    stop_bits?: UsbUartConfigSTM32_VCPChannelsStopBits;
}

export interface UsbUartConfigSTM32_VCP {
    type: "STM32_VCP" | "STM32_VCP";
    channels: UsbUartConfigSTM32_VCPChannels[];
    id?: ID;
    pid?: any;
    vid?: any;
}
