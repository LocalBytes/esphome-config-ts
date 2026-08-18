/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sx126x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sx126x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { PacketTransportTRANSPORTSCHEMA } from "./packet_transport.js";

export class Sx126x extends EsphomeComponent<Sx126xConfig> {
    componentName: string = "sx126x";
}

export type Sx126xConfigBandwidth = '4_8kHz' | '5_8kHz' | '7_3kHz' | '9_7kHz' | '11_7kHz' | '14_6kHz' | '19_5kHz' | '23_4kHz' | '29_3kHz' | '39_0kHz' | '46_9kHz' | '58_6kHz' | '78_2kHz' | '93_8kHz' | '117_3kHz' | '156_2kHz' | '187_2kHz' | '234_3kHz' | '312_0kHz' | '373_6kHz' | '467_0kHz' | '7_8kHz' | '10_4kHz' | '15_6kHz' | '20_8kHz' | '31_3kHz' | '41_7kHz' | '62_5kHz' | '125_0kHz' | '250_0kHz' | '500_0kHz';
export type Sx126xConfigCodingRate = 'CR_4_5' | 'CR_4_6' | 'CR_4_7' | 'CR_4_8';
export type Sx126xConfigHwVersion = 'sx1261' | 'sx1262' | 'sx1268' | 'llcc68';
export type Sx126xConfigModulation = 'LORA' | 'FSK';
export type Sx126xConfigPaRamp = '10us' | '20us' | '40us' | '80us' | '200us' | '800us' | '1700us' | '3400us';
export type Sx126xConfigShaping = 'GAUSSIAN_BT_0_3' | 'GAUSSIAN_BT_0_5' | 'GAUSSIAN_BT_0_7' | 'GAUSSIAN_BT_1_0' | 'NONE';
export type Sx126xConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Sx126xConfigTcxoDelay = CorePositiveTimePeriodMicroseconds;
export type Sx126xConfigTcxoVoltage = '1_6V' | '1_7V' | '1_8V' | '2_2V' | '2_4V' | '2_7V' | '3_0V' | '3_3V' | 'NONE';

export interface Sx126xConfig extends CoreCOMPONENTSCHEMA {
    bandwidth?: Sx126xConfigBandwidth;
    bitrate?: number;
    busy_pin: Pin;
    coding_rate?: Sx126xConfigCodingRate;
    crc_enable?: boolean;
    crc_initial?: any;
    crc_inverted?: boolean;
    crc_polynomial?: any;
    crc_size?: number;
    cs_pin: Pin;
    data_rate?: any;
    deviation?: number;
    dio1_pin: Pin;
    frequency: number;
    hw_version: Sx126xConfigHwVersion;
    id?: ID;
    modulation: Sx126xConfigModulation;
    on_packet?: object[];
    pa_power?: number;
    pa_ramp?: Sx126xConfigPaRamp;
    payload_length?: number;
    preamble_detect?: number;
    preamble_size?: number;
    release_device?: boolean;
    rf_switch: boolean;
    rst_pin: Pin;
    rx_start?: boolean;
    shaping?: Sx126xConfigShaping;
    spi_id?: ID;
    spi_mode?: Sx126xConfigSpiMode;
    spreading_factor?: number;
    sync_value?: any[];
    tcxo_delay?: Sx126xConfigTcxoDelay;
    tcxo_voltage?: Sx126xConfigTcxoVoltage;
}

export interface Sx126xNOARGSACTIONSCHEMA {
    id?: ID;
}

export class Sx126xPacketTransport extends EsphomeComponent<Sx126xPacketTransportConfig> {
    componentName: string = "sx126x.packet_transport";
}

export interface Sx126xPacketTransportConfig extends PacketTransportTRANSPORTSCHEMA {
    id?: ID;
    sx126x_id?: ID;
}
