/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: rtttl.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rtttl
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Rtttl extends EsphomeComponent<RtttlConfig> {
    componentName: string = "rtttl";
}

export interface RtttlConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    output: ID;
    on_finished_playback?: object[];
}
