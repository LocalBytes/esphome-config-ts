/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dac7678.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dac7678
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Dac7678 extends BaseComponent<Dac7678Config> {
    componentName: string = "dac7678";
}

export interface Dac7678Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    internal_reference?: boolean;
    i2c_id?: ID;
    address?: any;
}

export class Dac7678Output extends BaseComponent<Dac7678OutputConfig> {
    componentName: string = "dac7678.output";
}

export interface Dac7678OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    dac7678_id?: ID;
    channel: number;
}
