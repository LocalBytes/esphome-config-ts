/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp47a1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp47a1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp47a1Output extends BaseComponent<Mcp47a1OutputConfig> {
    componentName: string = "mcp47a1.output";
}

export interface Mcp47a1OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id: string;
    i2c_id?: ID;
    address?: any;
}
