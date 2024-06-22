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

export type PsramConfigMode = 'quad' | 'octal';
export type PsramConfigSpeed = '40000000.0' | '80000000.0' | '120000000.0';

export interface PsramConfig {
    id?: ID;
    mode?: PsramConfigMode;
    speed?: PsramConfigSpeed;
}
