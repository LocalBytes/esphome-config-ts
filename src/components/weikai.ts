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
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Weikai extends EsphomeComponent {
    componentName: string = "weikai";
}

export interface WeikaiWEIKAI_PIN_SCHEMAMode {
    input?: boolean;
    output?: boolean;
}

export interface WeikaiWEIKAI_PIN_SCHEMA {
    inverted?: boolean;
    mode?: WeikaiWEIKAI_PIN_SCHEMAMode;
    number: number;
}

export type WeikaiWKBASE_SCHEMAUartDataBits = '8';
export type WeikaiWKBASE_SCHEMAUartParity = 'NONE' | 'EVEN' | 'ODD';
export type WeikaiWKBASE_SCHEMAUartStopBits = '1' | '2';

export interface WeikaiWKBASE_SCHEMAUart {
    baud_rate: number;
    channel?: number;
    data_bits?: WeikaiWKBASE_SCHEMAUartDataBits;
    id: string;
    parity?: WeikaiWKBASE_SCHEMAUartParity;
    stop_bits?: WeikaiWKBASE_SCHEMAUartStopBits;
}

export interface WeikaiWKBASE_SCHEMA extends CoreCOMPONENT_SCHEMA {
    crystal?: number;
    id?: ID;
    test_mode?: number;
    uart: WeikaiWKBASE_SCHEMAUart[];
}
