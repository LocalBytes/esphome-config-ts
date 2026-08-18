/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm2335.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm2335
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sm10bitBaseSM10BITBASECONFIGSCHEMA } from "./sm10bit_base.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Sm2335 extends EsphomeComponent<Sm2335Config> {
    componentName: string = "sm2335";
}

export interface Sm2335Config extends Sm10bitBaseSM10BITBASECONFIGSCHEMA {
    id?: ID;
    data_pin: string;
    clock_pin: string;
    max_power_color_channels?: any;
    max_power_white_channels?: any;
}

export class Sm2335Output extends EsphomeComponent<Sm2335OutputConfig> {
    componentName: string = "sm2335.output";
}

export type Sm2335OutputConfig = {
        channel: number;
        id: string;
        sm2335_id?: ID;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
