/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: psram.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/psram
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Psram extends EsphomeComponent<PsramConfig> {
    componentName: string = "psram";
}

export type PsramConfigMode = 'quad' | 'octal' | 'hex';
export type PsramConfigSpeed = '40MHZ' | '80MHZ' | '120MHZ' | '20MHZ' | '100MHZ' | '200MHZ';

export interface PsramConfig {
    disabled?: boolean;
    enable_ecc?: boolean;
    id?: ID;
    ignore_not_found?: boolean;
    mode?: PsramConfigMode;
    speed?: PsramConfigSpeed;
}
