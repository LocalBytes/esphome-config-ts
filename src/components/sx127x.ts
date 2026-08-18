/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sx127x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sx127x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { PacketTransportTRANSPORT_SCHEMA } from "./packet_transport.js";

export class Sx127x extends EsphomeComponent<Sx127xConfig> {
    componentName: string = "sx127x";
}

export type Sx127xConfigBandwidth = '2_6kHz' | '3_1kHz' | '3_9kHz' | '5_2kHz' | '6_3kHz' | '7_8kHz' | '10_4kHz' | '12_5kHz' | '15_6kHz' | '20_8kHz' | '25_0kHz' | '31_3kHz' | '41_7kHz' | '50_0kHz' | '62_5kHz' | '83_3kHz' | '100_0kHz' | '125_0kHz' | '166_7kHz' | '200_0kHz' | '250_0kHz' | '500_0kHz';
export type Sx127xConfigCodingRate = 'CR_4_5' | 'CR_4_6' | 'CR_4_7' | 'CR_4_8';
export type Sx127xConfigModulation = 'LORA' | 'FSK' | 'OOK';
export type Sx127xConfigPaPin = 'RFO' | 'BOOST';
export type Sx127xConfigPaRamp = '10us' | '12us' | '15us' | '20us' | '25us' | '31us' | '40us' | '50us' | '62us' | '100us' | '125us' | '250us' | '500us' | '1000us' | '2000us' | '3400us';
export type Sx127xConfigPreamblePolarity = '85' | '170';
export type Sx127xConfigShaping = 'CUTOFF_BR_X_2' | 'CUTOFF_BR_X_1' | 'GAUSSIAN_BT_0_3' | 'GAUSSIAN_BT_0_5' | 'GAUSSIAN_BT_1_0' | 'NONE';
export type Sx127xConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Sx127xConfig extends CoreCOMPONENT_SCHEMA {
    auto_cal?: boolean;
    bandwidth?: Sx127xConfigBandwidth;
    bitrate?: number;
    bitsync?: boolean;
    coding_rate?: Sx127xConfigCodingRate;
    crc_enable?: boolean;
    cs_pin: Pin;
    data_rate?: any;
    deviation?: number;
    dio0_pin?: Pin;
    frequency: number;
    id?: ID;
    modulation: Sx127xConfigModulation;
    on_packet?: object[];
    pa_pin?: Sx127xConfigPaPin;
    pa_power?: number;
    pa_ramp?: Sx127xConfigPaRamp;
    packet_mode?: boolean;
    payload_length?: number;
    preamble_detect?: number;
    preamble_errors?: number;
    preamble_polarity?: Sx127xConfigPreamblePolarity;
    preamble_size?: number;
    release_device?: boolean;
    rst_pin: Pin;
    rx_floor?: any;
    rx_start?: boolean;
    shaping?: Sx127xConfigShaping;
    spi_id?: ID;
    spi_mode?: Sx127xConfigSpiMode;
    spreading_factor?: number;
    sync_value?: any[];
}

export interface Sx127xNO_ARGS_ACTION_SCHEMA {
    id?: ID;
}

export class Sx127xPacketTransport extends EsphomeComponent<Sx127xPacketTransportConfig> {
    componentName: string = "sx127x.packet_transport";
}

export interface Sx127xPacketTransportConfig extends PacketTransportTRANSPORT_SCHEMA {
    id?: ID;
    sx127x_id?: ID;
}
