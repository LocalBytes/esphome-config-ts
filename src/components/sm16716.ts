/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: sm16716.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm16716
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Sm16716 extends EsphomeComponent<Sm16716Config> {
    componentName: string = "sm16716";
}

export interface Sm16716Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    data_pin: Pin;
    clock_pin: Pin;
    num_channels?: number;
    num_chips?: number;
}

export class Sm16716Output extends EsphomeComponent<Sm16716OutputConfig> {
    componentName: string = "sm16716.output";
}

export type Sm16716OutputConfig = {
        sm16716_id?: ID;
        id: string;
        channel: number;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
