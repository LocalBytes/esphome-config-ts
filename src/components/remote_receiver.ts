/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: remote_receiver.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/remote_receiver
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { RemoteBaseRCSWITCHPROTOCOLSCHEMA } from "./remote_base.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export class RemoteReceiver extends EsphomeComponent<RemoteReceiverConfig> {
    componentName: string = "remote_receiver";
}

export type RemoteReceiverConfigFilter = CorePositiveTimePeriodMicroseconds;
export type RemoteReceiverConfigIdle = CorePositiveTimePeriodMicroseconds;

export interface RemoteReceiverConfig extends CoreCOMPONENTSCHEMA {
    buffer_size?: any;
    carrier_duty_percent?: any;
    carrier_frequency?: number;
    clock_resolution?: any;
    dump?: any;
    filter?: RemoteReceiverConfigFilter;
    filter_symbols?: number;
    id?: ID;
    idle?: RemoteReceiverConfigIdle;
    on_abbwelcome?: object[];
    on_aeha?: object[];
    on_beo4?: object[];
    on_brennenstuhl?: object[];
    on_byronsx?: object[];
    on_canalsat?: object[];
    on_canalsatld?: object[];
    on_coolix?: object[];
    on_dish?: object[];
    on_dooya?: object[];
    on_drayton?: object[];
    on_dyson?: object[];
    on_gobox?: object[];
    on_haier?: object[];
    on_jvc?: object[];
    on_keeloq?: object[];
    on_lg?: object[];
    on_magiquest?: object[];
    on_midea?: object[];
    on_mirage?: object[];
    on_nec?: object[];
    on_nexa?: object[];
    on_panasonic?: object[];
    on_pioneer?: object[];
    on_pronto?: object[];
    on_raw?: object[];
    on_rc5?: object[];
    on_rc6?: object[];
    on_rc_switch?: object[];
    on_roomba?: object[];
    on_samsung?: object[];
    on_samsung36?: object[];
    on_sony?: object[];
    on_symphony?: object[];
    on_toshiba_ac?: object[];
    on_toto?: object[];
    pin: Pin;
    receive_symbols?: number;
    rmt_symbols?: number;
    tolerance?: any;
    use_dma?: boolean;
}

export class RemoteReceiverBinarySensor extends EsphomeComponent<RemoteReceiverBinarySensorConfig> {
    componentName: string = "remote_receiver.binary_sensor";
}

export interface RemoteReceiverBinarySensorConfigAbbwelcome {
    data?: any;
    destination_address: string;
    message_id?: any;
    message_type: string;
    retransmission?: boolean;
    source_address: string;
    three_byte_address?: boolean;
}

export interface RemoteReceiverBinarySensorConfigAeha {
    address: string;
    data: string;
}

export interface RemoteReceiverBinarySensorConfigBeo4 {
    command: string;
    command_repeats?: number;
    source: string;
}

export interface RemoteReceiverBinarySensorConfigBrennenstuhl {
    code: string;
}

export type RemoteReceiverBinarySensorConfigByronsxCommand = '1' | '2' | '3' | '5' | '6' | '9' | '13' | '14' | '16';

export interface RemoteReceiverBinarySensorConfigByronsx {
    address: string;
    command?: RemoteReceiverBinarySensorConfigByronsxCommand;
}

export interface RemoteReceiverBinarySensorConfigCanalsat {
    address?: any;
    command: string;
    device: string;
}

export interface RemoteReceiverBinarySensorConfigCanalsatld {
    address?: any;
    command: string;
    device: string;
}

export interface RemoteReceiverBinarySensorConfigCoolix {
    first: string;
    second?: any;
}

export interface RemoteReceiverBinarySensorConfigDish {
    address?: number;
    command: number;
}

export interface RemoteReceiverBinarySensorConfigDooya {
    button: string;
    channel: string;
    check: string;
    id: string;
}

export interface RemoteReceiverBinarySensorConfigDrayton {
    address: string;
    channel: string;
    command: string;
}

export interface RemoteReceiverBinarySensorConfigDyson {
    code: string;
    index?: any;
}

export interface RemoteReceiverBinarySensorConfigGobox {
    code: number;
}

export interface RemoteReceiverBinarySensorConfigHaier {
    code: string;
}

export interface RemoteReceiverBinarySensorConfigJvc {
    data: string;
}

export interface RemoteReceiverBinarySensorConfigKeeloq {
    address: string;
    code: string;
    command?: any;
    level?: boolean;
}

export type RemoteReceiverBinarySensorConfigLgNbits = '28' | '32';

export interface RemoteReceiverBinarySensorConfigLg {
    data: string;
    nbits?: RemoteReceiverBinarySensorConfigLgNbits;
}

export interface RemoteReceiverBinarySensorConfigMagiquest {
    magnitude?: any;
    wand_id: string;
}

export interface RemoteReceiverBinarySensorConfigMidea {
    code: string;
}

export interface RemoteReceiverBinarySensorConfigMirage {
    code: string;
}

export interface RemoteReceiverBinarySensorConfigNec {
    address: string;
    command: string;
    command_repeats?: number;
}

export interface RemoteReceiverBinarySensorConfigNexa {
    channel: string;
    device: string;
    group: string;
    level: string;
    state: string;
}

export interface RemoteReceiverBinarySensorConfigPanasonic {
    address: string;
    command: string;
}

export interface RemoteReceiverBinarySensorConfigPioneer {
    rc_code_1: string;
    rc_code_2?: any;
}

export interface RemoteReceiverBinarySensorConfigPronto {
    data: string;
    delta?: number;
}

export interface RemoteReceiverBinarySensorConfigRaw {
    code: string;
    code_storage_id?: ID;
}

export interface RemoteReceiverBinarySensorConfigRc5 {
    address: string;
    command: string;
}

export interface RemoteReceiverBinarySensorConfigRc6 {
    address: string;
    command: string;
}

export type RemoteReceiverBinarySensorConfigRcSwitchRawProtocol = RemoteBaseRCSWITCHPROTOCOLSCHEMA;

export interface RemoteReceiverBinarySensorConfigRcSwitchRaw {
    code: string;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchRawProtocol;
}

export type RemoteReceiverBinarySensorConfigRcSwitchTypeAProtocol = RemoteBaseRCSWITCHPROTOCOLSCHEMA;

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeA {
    device: string;
    group: string;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchTypeAProtocol;
    state: boolean;
}

export type RemoteReceiverBinarySensorConfigRcSwitchTypeBProtocol = RemoteBaseRCSWITCHPROTOCOLSCHEMA;

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeB {
    address: number;
    channel: number;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchTypeBProtocol;
    state: boolean;
}

export type RemoteReceiverBinarySensorConfigRcSwitchTypeCFamily = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p';
export type RemoteReceiverBinarySensorConfigRcSwitchTypeCProtocol = RemoteBaseRCSWITCHPROTOCOLSCHEMA;

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeC {
    device: number;
    family: RemoteReceiverBinarySensorConfigRcSwitchTypeCFamily;
    group: number;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchTypeCProtocol;
    state: boolean;
}

export type RemoteReceiverBinarySensorConfigRcSwitchTypeDGroup = 'a' | 'b' | 'c' | 'd';
export type RemoteReceiverBinarySensorConfigRcSwitchTypeDProtocol = RemoteBaseRCSWITCHPROTOCOLSCHEMA;
export type RemoteReceiverBinarySensorConfigRcSwitchTypeDRepeatWaitTime = CorePositiveTimePeriodMicroseconds;

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeDRepeat {
    times: number;
    wait_time?: RemoteReceiverBinarySensorConfigRcSwitchTypeDRepeatWaitTime;
}

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeD {
    device: number;
    group: RemoteReceiverBinarySensorConfigRcSwitchTypeDGroup;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchTypeDProtocol;
    repeat?: RemoteReceiverBinarySensorConfigRcSwitchTypeDRepeat;
    state: boolean;
}

export interface RemoteReceiverBinarySensorConfigRoomba {
    data: string;
}

export interface RemoteReceiverBinarySensorConfigSamsung {
    data: string;
    nbits?: number;
}

export interface RemoteReceiverBinarySensorConfigSamsung36 {
    address: string;
    command: string;
}

export type RemoteReceiverBinarySensorConfigSonyNbits = '12' | '15' | '20';

export interface RemoteReceiverBinarySensorConfigSony {
    data: string;
    nbits?: RemoteReceiverBinarySensorConfigSonyNbits;
}

export interface RemoteReceiverBinarySensorConfigSymphony {
    command_repeats?: number;
    data: string;
    nbits: number;
}

export interface RemoteReceiverBinarySensorConfigToshibaAc {
    rc_code_1: string;
    rc_code_2?: any;
}

export interface RemoteReceiverBinarySensorConfigToto {
    command: string;
    rc_code_1?: any;
    rc_code_2?: any;
}

export type RemoteReceiverBinarySensorConfig = {
        abbwelcome: RemoteReceiverBinarySensorConfigAbbwelcome;
        aeha: RemoteReceiverBinarySensorConfigAeha;
        beo4: RemoteReceiverBinarySensorConfigBeo4;
        brennenstuhl: RemoteReceiverBinarySensorConfigBrennenstuhl;
        byronsx: RemoteReceiverBinarySensorConfigByronsx;
        canalsat: RemoteReceiverBinarySensorConfigCanalsat;
        canalsatld: RemoteReceiverBinarySensorConfigCanalsatld;
        coolix: RemoteReceiverBinarySensorConfigCoolix;
        dish: RemoteReceiverBinarySensorConfigDish;
        dooya: RemoteReceiverBinarySensorConfigDooya;
        drayton: RemoteReceiverBinarySensorConfigDrayton;
        dyson: RemoteReceiverBinarySensorConfigDyson;
        gobox: RemoteReceiverBinarySensorConfigGobox;
        haier: RemoteReceiverBinarySensorConfigHaier;
        jvc: RemoteReceiverBinarySensorConfigJvc;
        keeloq: RemoteReceiverBinarySensorConfigKeeloq;
        lg: RemoteReceiverBinarySensorConfigLg;
        magiquest: RemoteReceiverBinarySensorConfigMagiquest;
        midea: RemoteReceiverBinarySensorConfigMidea;
        mirage: RemoteReceiverBinarySensorConfigMirage;
        nec: RemoteReceiverBinarySensorConfigNec;
        nexa: RemoteReceiverBinarySensorConfigNexa;
        panasonic: RemoteReceiverBinarySensorConfigPanasonic;
        pioneer: RemoteReceiverBinarySensorConfigPioneer;
        pronto: RemoteReceiverBinarySensorConfigPronto;
        raw: RemoteReceiverBinarySensorConfigRaw;
        rc5: RemoteReceiverBinarySensorConfigRc5;
        rc6: RemoteReceiverBinarySensorConfigRc6;
        rc_switch_raw: RemoteReceiverBinarySensorConfigRcSwitchRaw;
        rc_switch_type_a: RemoteReceiverBinarySensorConfigRcSwitchTypeA;
        rc_switch_type_b: RemoteReceiverBinarySensorConfigRcSwitchTypeB;
        rc_switch_type_c: RemoteReceiverBinarySensorConfigRcSwitchTypeC;
        rc_switch_type_d: RemoteReceiverBinarySensorConfigRcSwitchTypeD;
        receiver_id?: ID;
        roomba: RemoteReceiverBinarySensorConfigRoomba;
        samsung: RemoteReceiverBinarySensorConfigSamsung;
        samsung36: RemoteReceiverBinarySensorConfigSamsung36;
        sony: RemoteReceiverBinarySensorConfigSony;
        symphony: RemoteReceiverBinarySensorConfigSymphony;
        toshiba_ac: RemoteReceiverBinarySensorConfigToshibaAc;
        toto: RemoteReceiverBinarySensorConfigToto;
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;
