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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export abstract class RemoteBase extends EsphomeComponent {
    componentName: string = "remote_base";
}

export interface RemoteBaseBASEREMOTETRANSMITTERSCHEMA extends RemoteBaseREMOTETRANSMITTABLESCHEMA {
    repeat?: any;
}

export interface RemoteBaseRCSWITCHPROTOCOLSCHEMA {
    inverted?: boolean;
    one?: any;
    pulse_length: number;
    sync?: any;
    zero?: any;
}

export interface RemoteBaseREMOTETRANSMITTABLESCHEMA {
    transmitter_id?: ID;
}
