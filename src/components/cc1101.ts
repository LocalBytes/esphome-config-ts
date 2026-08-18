/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cc1101.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cc1101
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Cc1101 extends EsphomeComponent<Cc1101Config> {
    componentName: string = "cc1101";
}

export interface Cc1101CC1101ACTIONSCHEMA {
    id?: ID;
}

export type Cc1101ConfigCarrierSenseRelThr = 'Default' | '+6dB' | '+10dB' | '+14dB';
export type Cc1101ConfigFilterLengthAskOok = '4dB' | '8dB' | '12dB' | '16dB';
export type Cc1101ConfigFilterLengthFskMsk = '8' | '16' | '32' | '64';
export type Cc1101ConfigFreeze = 'Default' | 'On Sync' | 'Analog Only' | 'Analog And Digital';
export type Cc1101ConfigHystLevel = 'None' | 'Low' | 'Medium' | 'High';
export type Cc1101ConfigMagnTarget = '24dB' | '27dB' | '30dB' | '33dB' | '36dB' | '38dB' | '40dB' | '42dB';
export type Cc1101ConfigMaxDvgaGain = 'Default' | '-1' | '-2' | '-3';
export type Cc1101ConfigMaxLnaGain = 'Default' | '2.6dB' | '6.1dB' | '7.4dB' | '9.2dB' | '11.5dB' | '14.6dB' | '17.1dB';
export type Cc1101ConfigModulationType = '2-FSK' | 'GFSK' | 'ASK/OOK' | '4-FSK' | 'MSK';
export type Cc1101ConfigRxAttenuation = '0dB' | '6dB' | '12dB' | '18dB';
export type Cc1101ConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Cc1101ConfigSyncMode = 'None' | '15/16' | '16/16' | '30/32';
export type Cc1101ConfigWaitTime = '8' | '16' | '24' | '32';

export interface Cc1101Config {
    carrier_sense_above_threshold?: boolean;
    carrier_sense_abs_thr?: number;
    carrier_sense_rel_thr?: Cc1101ConfigCarrierSenseRelThr;
    channel?: number;
    channel_spacing?: any;
    crc_enable?: boolean;
    cs_pin: Pin;
    data_rate?: any;
    dc_blocking_filter?: boolean;
    filter_bandwidth?: any;
    filter_length_ask_ook?: Cc1101ConfigFilterLengthAskOok;
    filter_length_fsk_msk?: Cc1101ConfigFilterLengthFskMsk;
    freeze?: Cc1101ConfigFreeze;
    frequency?: any;
    fsk_deviation?: any;
    gdo0_pin?: Pin;
    hyst_level?: Cc1101ConfigHystLevel;
    id?: ID;
    if_frequency?: any;
    lna_priority?: boolean;
    magn_target?: Cc1101ConfigMagnTarget;
    manchester?: boolean;
    max_dvga_gain?: Cc1101ConfigMaxDvgaGain;
    max_lna_gain?: Cc1101ConfigMaxLnaGain;
    modulation_type?: Cc1101ConfigModulationType;
    msk_deviation?: number;
    num_preamble?: number;
    on_packet?: object[];
    output_power?: any;
    packet_length?: number;
    packet_mode?: boolean;
    release_device?: boolean;
    rx_attenuation?: Cc1101ConfigRxAttenuation;
    spi_id?: ID;
    spi_mode?: Cc1101ConfigSpiMode;
    symbol_rate?: any;
    sync0?: any;
    sync1?: any;
    sync_mode?: Cc1101ConfigSyncMode;
    wait_time?: Cc1101ConfigWaitTime;
    whitening?: boolean;
}
