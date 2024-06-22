/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: remote_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/remote_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";

export abstract class RemoteBase extends BaseComponent {
    componentName: string = "remote_base";
}

export interface RemoteBaseBASE_REMOTE_TRANSMITTER_SCHEMA {
    transmitter_id?: ID;
    repeat?: any;
}

export interface RemoteBaseCANALSAT_SCHEMA {
    device: string;
    address?: any;
    command: string;
}

export interface RemoteBaseRC_SWITCH_PROTOCOL_SCHEMA {
    pulse_length: number;
    sync?: any;
    zero?: any;
    one?: any;
    inverted?: boolean;
}
