/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ota.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ota
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export abstract class Ota extends EsphomeComponent {
    componentName: string = "ota";
}

export interface OtaBASEOTASCHEMA {
    on_abort?: object[];
    on_begin?: object[];
    on_end?: object[];
    on_error?: object[];
    on_progress?: object[];
    on_state_change?: object[];
}
