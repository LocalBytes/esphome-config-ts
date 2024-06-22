/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: my9231.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/my9231
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class My9231 extends EsphomeComponent<My9231Config> {
    componentName: string = "my9231";
}

export type My9231ConfigBitDepth = '8' | '12' | '14' | '16';

export interface My9231Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    data_pin: Pin;
    clock_pin: Pin;
    num_channels?: number;
    num_chips?: number;
    bit_depth?: My9231ConfigBitDepth;
}

export class My9231Output extends EsphomeComponent<My9231OutputConfig> {
    componentName: string = "my9231.output";
}

export type My9231OutputConfig = {
        my9231_id?: ID;
        id: string;
        channel: number;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
