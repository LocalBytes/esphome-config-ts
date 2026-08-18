/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bp5758d.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bp5758d
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";

export class Bp5758d extends EsphomeComponent<Bp5758dConfig> {
    componentName: string = "bp5758d";
}

export interface Bp5758dConfig extends CoreCOMPONENTSCHEMA {
    clock_pin: Pin;
    data_pin: Pin;
    id?: ID;
}

export class Bp5758dOutput extends EsphomeComponent<Bp5758dOutputConfig> {
    componentName: string = "bp5758d.output";
}

export type Bp5758dOutputConfig = {
        bp5758d_id?: ID;
        channel: number;
        current?: number;
        id: string;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
