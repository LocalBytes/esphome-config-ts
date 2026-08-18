/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gp8403.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gp8403
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";

export class Gp8403 extends EsphomeComponent<Gp8403Config> {
    componentName: string = "gp8403";
}

export type Gp8403ConfigModel = 'GP8403' | 'GP8413';
export type Gp8403ConfigVoltage = '5V' | '10V';

export interface Gp8403Config extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    model?: Gp8403ConfigModel;
    voltage: Gp8403ConfigVoltage;
}

export class Gp8403Output extends EsphomeComponent<Gp8403OutputConfig> {
    componentName: string = "gp8403.output";
}

export type Gp8403OutputConfig = {
        channel: number;
        gp8403_id?: ID;
        id?: ID;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
