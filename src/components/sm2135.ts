/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm2135.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm2135
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Sm2135 extends EsphomeComponent<Sm2135Config> {
    componentName: string = "sm2135";
}

export type Sm2135ConfigRgbCurrent = '10mA' | '15mA' | '20mA' | '25mA' | '30mA' | '35mA' | '40mA' | '45mA';
export type Sm2135ConfigCwCurrent = '10mA' | '15mA' | '20mA' | '25mA' | '30mA' | '35mA' | '40mA' | '45mA' | '50mA' | '55mA' | '60mA';

export interface Sm2135Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    data_pin: Pin;
    clock_pin: Pin;
    rgb_current?: Sm2135ConfigRgbCurrent;
    cw_current?: Sm2135ConfigCwCurrent;
}

export class Sm2135Output extends EsphomeComponent<Sm2135OutputConfig> {
    componentName: string = "sm2135.output";
}

export type Sm2135OutputConfig = {
        sm2135_id?: ID;
        id: string;
        channel: number;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
