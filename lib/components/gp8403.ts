/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gp8403.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gp8403
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Gp8403 extends BaseComponent<Gp8403Config> {
    componentName: string = "gp8403";
}

export interface Gp8403Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voltage: Gp8403ConfigVoltage;
    i2c_id?: ID;
    address?: any;
}

export type Gp8403ConfigVoltage = '5V' | '10V';

export class Gp8403Output extends BaseComponent<Gp8403OutputConfig> {
    componentName: string = "gp8403.output";
}

export interface Gp8403OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    gp8403_id?: ID;
    channel: Gp8403OutputConfigChannel;
}

export type Gp8403OutputConfigChannel = '0' | '1';
