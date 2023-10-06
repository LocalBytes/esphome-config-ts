/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: remote_receiver.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/remote_receiver
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { RemoteBaseCANALSAT_SCHEMA, RemoteBaseRC_SWITCH_PROTOCOL_SCHEMA } from "./remote_base.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class RemoteReceiver extends BaseComponent<RemoteReceiverConfig> {
    componentName: string = "remote_receiver";
}

export interface RemoteReceiverConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pin: Pin;
    dump?: any;
    tolerance?: any;
    buffer_size?: any;
    filter?: RemoteReceiverConfigFilter;
    idle?: RemoteReceiverConfigIdle;
    memory_blocks?: any;
    on_canalsat?: object[];
    on_canalsatld?: object[];
    on_coolix?: object[];
    on_dish?: object[];
    on_jvc?: object[];
    on_lg?: object[];
    on_magiquest?: object[];
    on_nec?: object[];
    on_pioneer?: object[];
    on_pronto?: object[];
    on_sony?: object[];
    on_raw?: object[];
    on_drayton?: object[];
    on_rc5?: object[];
    on_rc6?: object[];
    on_rc_switch?: object[];
    on_samsung?: object[];
    on_samsung36?: object[];
    on_toshiba_ac?: object[];
    on_panasonic?: object[];
    on_nexa?: object[];
    on_midea?: object[];
    on_aeha?: object[];
}

export interface RemoteReceiverConfigFilter extends CorePositiveTimePeriodMicroseconds {
}

export interface RemoteReceiverConfigIdle extends CorePositiveTimePeriodMicroseconds {
}

export class RemoteReceiverBinarySensor extends BaseComponent<RemoteReceiverBinarySensorConfig> {
    componentName: string = "remote_receiver.binary_sensor";
}

export interface RemoteReceiverBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    canalsat: RemoteReceiverBinarySensorConfigCanalsat;
    canalsatld: RemoteReceiverBinarySensorConfigCanalsatld;
    coolix: RemoteReceiverBinarySensorConfigCoolix;
    dish: RemoteReceiverBinarySensorConfigDish;
    jvc: RemoteReceiverBinarySensorConfigJvc;
    lg: RemoteReceiverBinarySensorConfigLg;
    magiquest: RemoteReceiverBinarySensorConfigMagiquest;
    nec: RemoteReceiverBinarySensorConfigNec;
    pioneer: RemoteReceiverBinarySensorConfigPioneer;
    pronto: RemoteReceiverBinarySensorConfigPronto;
    sony: RemoteReceiverBinarySensorConfigSony;
    raw: RemoteReceiverBinarySensorConfigRaw;
    drayton: RemoteReceiverBinarySensorConfigDrayton;
    rc5: RemoteReceiverBinarySensorConfigRc5;
    rc6: RemoteReceiverBinarySensorConfigRc6;
    rc_switch_raw: RemoteReceiverBinarySensorConfigRcSwitchRaw;
    rc_switch_type_a: RemoteReceiverBinarySensorConfigRcSwitchTypeA;
    rc_switch_type_b: RemoteReceiverBinarySensorConfigRcSwitchTypeB;
    rc_switch_type_c: RemoteReceiverBinarySensorConfigRcSwitchTypeC;
    rc_switch_type_d: RemoteReceiverBinarySensorConfigRcSwitchTypeD;
    samsung: RemoteReceiverBinarySensorConfigSamsung;
    samsung36: RemoteReceiverBinarySensorConfigSamsung36;
    toshiba_ac: RemoteReceiverBinarySensorConfigToshibaAc;
    panasonic: RemoteReceiverBinarySensorConfigPanasonic;
    nexa: RemoteReceiverBinarySensorConfigNexa;
    midea: RemoteReceiverBinarySensorConfigMidea;
    aeha: RemoteReceiverBinarySensorConfigAeha;
    receiver_id?: ID;
}

export interface RemoteReceiverBinarySensorConfigCanalsat extends RemoteBaseCANALSAT_SCHEMA {
}

export interface RemoteReceiverBinarySensorConfigCanalsatld extends RemoteBaseCANALSAT_SCHEMA {
}

export interface RemoteReceiverBinarySensorConfigCoolix {
    first: string;
    second?: any;
}

export interface RemoteReceiverBinarySensorConfigDish {
    address?: number;
    command: number;
}

export interface RemoteReceiverBinarySensorConfigJvc {
    data: string;
}

export interface RemoteReceiverBinarySensorConfigLg {
    data: string;
    nbits?: RemoteReceiverBinarySensorConfigLgNbits;
}

export type RemoteReceiverBinarySensorConfigLgNbits = '28' | '32';

export interface RemoteReceiverBinarySensorConfigMagiquest {
    wand_id: string;
    magnitude?: any;
}

export interface RemoteReceiverBinarySensorConfigNec {
    address: string;
    command: string;
}

export interface RemoteReceiverBinarySensorConfigPioneer {
    rc_code_1: string;
    rc_code_2?: any;
}

export interface RemoteReceiverBinarySensorConfigPronto {
    data: string;
}

export interface RemoteReceiverBinarySensorConfigSony {
    data: string;
    nbits?: RemoteReceiverBinarySensorConfigSonyNbits;
}

export type RemoteReceiverBinarySensorConfigSonyNbits = '12' | '15' | '20';

export interface RemoteReceiverBinarySensorConfigRaw {
    code: string;
    code_storage_id?: ID;
}

export interface RemoteReceiverBinarySensorConfigDrayton {
    address: string;
    channel: string;
    command: string;
}

export interface RemoteReceiverBinarySensorConfigRc5 {
    address: string;
    command: string;
}

export interface RemoteReceiverBinarySensorConfigRc6 {
    address: string;
    command: string;
}

export interface RemoteReceiverBinarySensorConfigRcSwitchRaw {
    code: string;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchRawProtocol;
}

export interface RemoteReceiverBinarySensorConfigRcSwitchRawProtocol extends RemoteBaseRC_SWITCH_PROTOCOL_SCHEMA {
}

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeA {
    group: string;
    device: string;
    state: boolean;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchTypeAProtocol;
}

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeAProtocol extends RemoteBaseRC_SWITCH_PROTOCOL_SCHEMA {
}

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeB {
    address: number;
    channel: number;
    state: boolean;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchTypeBProtocol;
}

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeBProtocol extends RemoteBaseRC_SWITCH_PROTOCOL_SCHEMA {
}

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeC {
    family: RemoteReceiverBinarySensorConfigRcSwitchTypeCFamily;
    group: number;
    device: number;
    state: boolean;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchTypeCProtocol;
}

export type RemoteReceiverBinarySensorConfigRcSwitchTypeCFamily = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p';

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeCProtocol extends RemoteBaseRC_SWITCH_PROTOCOL_SCHEMA {
}

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeD {
    group: RemoteReceiverBinarySensorConfigRcSwitchTypeDGroup;
    device: number;
    state: boolean;
    protocol?: RemoteReceiverBinarySensorConfigRcSwitchTypeDProtocol;
    repeat?: RemoteReceiverBinarySensorConfigRcSwitchTypeDRepeat;
}

export type RemoteReceiverBinarySensorConfigRcSwitchTypeDGroup = 'a' | 'b' | 'c' | 'd';

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeDProtocol extends RemoteBaseRC_SWITCH_PROTOCOL_SCHEMA {
}

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeDRepeat {
    times: number;
    wait_time?: RemoteReceiverBinarySensorConfigRcSwitchTypeDRepeatWaitTime;
}

export interface RemoteReceiverBinarySensorConfigRcSwitchTypeDRepeatWaitTime extends CorePositiveTimePeriodMicroseconds {
}

export interface RemoteReceiverBinarySensorConfigSamsung {
    data: string;
    nbits?: number;
}

export interface RemoteReceiverBinarySensorConfigSamsung36 {
    address: string;
    command: string;
}

export interface RemoteReceiverBinarySensorConfigToshibaAc {
    rc_code_1: string;
    rc_code_2?: any;
}

export interface RemoteReceiverBinarySensorConfigPanasonic {
    address: string;
    command: string;
}

export interface RemoteReceiverBinarySensorConfigNexa {
    device: string;
    group: string;
    state: string;
    channel: string;
    level: string;
}

export interface RemoteReceiverBinarySensorConfigMidea {
    code: string;
}

export interface RemoteReceiverBinarySensorConfigAeha {
    address: string;
    data: string;
}
