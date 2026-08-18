/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm2235.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm2235
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sm10bitBaseSM10BITBASECONFIGSCHEMA } from "./sm10bit_base.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Sm2235 extends EsphomeComponent<Sm2235Config> {
    componentName: string = "sm2235";
}

export interface Sm2235Config extends Sm10bitBaseSM10BITBASECONFIGSCHEMA {
    id?: ID;
}

export class Sm2235Output extends EsphomeComponent<Sm2235OutputConfig> {
    componentName: string = "sm2235.output";
}

export type Sm2235OutputConfig = {
        channel: number;
        id: string;
        sm2235_id?: ID;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
