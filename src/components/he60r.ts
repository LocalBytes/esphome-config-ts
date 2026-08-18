/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: he60r.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/he60r
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Cover_COVER_SCHEMA } from "./cover.js";

export class He60rCover extends EsphomeComponent<He60rCoverConfig> {
    componentName: string = "he60r.cover";
}

export type He60rCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type He60rCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type He60rCoverConfig = {
        close_duration?: He60rCoverConfigCloseDuration;
        id?: ID;
        open_duration?: He60rCoverConfigOpenDuration;
        uart_id?: ID;
    } & Cover_COVER_SCHEMA & CoreCOMPONENT_SCHEMA;
