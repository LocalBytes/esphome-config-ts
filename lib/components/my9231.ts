/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: my9231.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/my9231
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class My9231 extends BaseComponent<My9231Config> {
    componentName: string = "my9231";
}

export interface My9231Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    data_pin: Pin;
    clock_pin: Pin;
    num_channels?: number;
    num_chips?: number;
    bit_depth?: My9231ConfigBitDepth;
}

export type My9231ConfigBitDepth = '8' | '12' | '14' | '16';

export class My9231Output extends BaseComponent<My9231OutputConfig> {
    componentName: string = "my9231.output";
}

export interface My9231OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    my9231_id?: ID;
    id: string;
    channel: number;
}
