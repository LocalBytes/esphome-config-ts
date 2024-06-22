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
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Bp5758d extends EsphomeComponent<Bp5758dConfig> {
    componentName: string = "bp5758d";
}

export interface Bp5758dConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    data_pin: Pin;
    clock_pin: Pin;
}

export class Bp5758dOutput extends EsphomeComponent<Bp5758dOutputConfig> {
    componentName: string = "bp5758d.output";
}

export type Bp5758dOutputConfig = {
        bp5758d_id?: ID;
        id: string;
        channel: number;
        current?: number;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
