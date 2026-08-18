/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: weikai.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/weikai
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Weikai extends EsphomeComponent {
    componentName: string = "weikai";
}

export interface WeikaiWEIKAIPINSCHEMAMode {
    input?: boolean;
    output?: boolean;
}

export interface WeikaiWEIKAIPINSCHEMA {
    inverted?: boolean;
    mode?: WeikaiWEIKAIPINSCHEMAMode;
    number: number;
}

export type WeikaiWKBASESCHEMAUartDataBits = '8';
export type WeikaiWKBASESCHEMAUartParity = 'NONE' | 'EVEN' | 'ODD';
export type WeikaiWKBASESCHEMAUartStopBits = '1' | '2';

export interface WeikaiWKBASESCHEMAUart {
    baud_rate: number;
    channel?: number;
    data_bits?: WeikaiWKBASESCHEMAUartDataBits;
    id: string;
    parity?: WeikaiWKBASESCHEMAUartParity;
    stop_bits?: WeikaiWKBASESCHEMAUartStopBits;
}

export interface WeikaiWKBASESCHEMA extends CoreCOMPONENTSCHEMA {
    crystal?: number;
    id?: ID;
    test_mode?: number;
    uart: WeikaiWKBASESCHEMAUart[];
}
