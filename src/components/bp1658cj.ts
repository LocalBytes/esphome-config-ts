/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bp1658cj.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bp1658cj
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Bp1658cj extends EsphomeComponent<Bp1658cjConfig> {
    componentName: string = "bp1658cj";
}

export interface Bp1658cjConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    data_pin: Pin;
    clock_pin: Pin;
    max_power_color_channels?: number;
    max_power_white_channels?: number;
}

export class Bp1658cjOutput extends EsphomeComponent<Bp1658cjOutputConfig> {
    componentName: string = "bp1658cj.output";
}

export type Bp1658cjOutputConfig = {
        bp1658cj_id?: ID;
        id: string;
        channel: number;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
