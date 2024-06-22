/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp4725.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp4725
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp4725Output extends EsphomeComponent<Mcp4725OutputConfig> {
    componentName: string = "mcp4725.output";
}

export type Mcp4725OutputConfig = {
        id: string;
        i2c_id?: ID;
        address?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
