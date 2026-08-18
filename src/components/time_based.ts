/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: time_based.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/time_based
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { CoverCOVERSCHEMA } from "./cover.js";

export class TimeBasedCover extends EsphomeComponent<TimeBasedCoverConfig> {
    componentName: string = "time_based.cover";
}

export type TimeBasedCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type TimeBasedCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type TimeBasedCoverConfig = {
        assumed_state?: boolean;
        close_action: object[];
        close_duration: TimeBasedCoverConfigCloseDuration;
        has_built_in_endstop?: boolean;
        id?: ID;
        manual_control?: boolean;
        open_action: object[];
        open_duration: TimeBasedCoverConfigOpenDuration;
        stop_action: object[];
    } & CoverCOVERSCHEMA & CoreCOMPONENTSCHEMA;
