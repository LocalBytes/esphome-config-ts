/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tlc5971.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tlc5971
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";

export class Tlc5971 extends EsphomeComponent<Tlc5971Config> {
    componentName: string = "tlc5971";
}

export interface Tlc5971Config extends CoreCOMPONENTSCHEMA {
    clock_pin: Pin;
    data_pin: Pin;
    id?: ID;
    num_chips?: number;
}

export class Tlc5971Output extends EsphomeComponent<Tlc5971OutputConfig> {
    componentName: string = "tlc5971.output";
}

export type Tlc5971OutputConfig = {
        channel: number;
        id: string;
        tlc5971_id?: ID;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
