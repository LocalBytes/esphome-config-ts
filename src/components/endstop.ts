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
import type { CoverCOVER_SCHEMA } from "./cover.js";

export class EndstopCover extends EsphomeComponent<EndstopCoverConfig> {
    componentName: string = "endstop.cover";
}

export type EndstopCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type EndstopCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type EndstopCoverConfigMaxDuration = CorePositiveTimePeriodMilliseconds;
export type EndstopCoverConfig = {
        id?: any;
        stop_action: object[];
        open_endstop: ID;
        open_action: object[];
        open_duration: EndstopCoverConfigOpenDuration;
        close_action: object[];
        close_endstop: ID;
        close_duration: EndstopCoverConfigCloseDuration;
        max_duration?: EndstopCoverConfigMaxDuration;
    } & CoverCOVER_SCHEMA & CoreCOMPONENT_SCHEMA;
