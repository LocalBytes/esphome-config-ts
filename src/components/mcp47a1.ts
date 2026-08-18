/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp47a1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp47a1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mcp47a1Output extends EsphomeComponent<Mcp47a1OutputConfig> {
    componentName: string = "mcp47a1.output";
}

export type Mcp47a1OutputConfig = {
        address?: any;
        i2c_id?: ID;
        id: string;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
