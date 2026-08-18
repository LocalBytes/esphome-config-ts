/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp4461.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp4461
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";

export class Mcp4461 extends EsphomeComponent<Mcp4461Config> {
    componentName: string = "mcp4461";
}

export interface Mcp4461Config extends CoreCOMPONENTSCHEMA {
    address?: any;
    disable_wiper_0?: boolean;
    disable_wiper_1?: boolean;
    disable_wiper_2?: boolean;
    disable_wiper_3?: boolean;
    i2c_id?: ID;
    id?: ID;
}

export class Mcp4461Output extends EsphomeComponent<Mcp4461OutputConfig> {
    componentName: string = "mcp4461.output";
}

export type Mcp4461OutputConfigChannel = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export interface Mcp4461OutputConfig extends OutputFLOATOUTPUTSCHEMA {
    channel: Mcp4461OutputConfigChannel;
    id: string;
    initial_value?: any;
    mcp4461_id?: ID;
    terminal_a?: boolean;
    terminal_b?: boolean;
    terminal_w?: boolean;
}
