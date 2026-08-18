/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: endstop.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/endstop
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Cover_COVER_SCHEMA } from "./cover.js";

export class EndstopCover extends EsphomeComponent<EndstopCoverConfig> {
    componentName: string = "endstop.cover";
}

export type EndstopCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type EndstopCoverConfigMaxDuration = CorePositiveTimePeriodMilliseconds;
export type EndstopCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type EndstopCoverConfig = {
        close_action: object[];
        close_duration: EndstopCoverConfigCloseDuration;
        close_endstop: ID;
        id?: ID;
        max_duration?: EndstopCoverConfigMaxDuration;
        open_action: object[];
        open_duration: EndstopCoverConfigOpenDuration;
        open_endstop: ID;
        stop_action: object[];
    } & Cover_COVER_SCHEMA & CoreCOMPONENT_SCHEMA;
