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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { CoverCOVER_SCHEMA } from "./cover.js";

export class TimeBasedCover extends BaseComponent<TimeBasedCoverConfig> {
    componentName: string = "time_based.cover";
}

export type TimeBasedCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type TimeBasedCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type TimeBasedCoverConfig = {
        id?: any;
        stop_action: object[];
        open_action: object[];
        open_duration: TimeBasedCoverConfigOpenDuration;
        close_action: object[];
        close_duration: TimeBasedCoverConfigCloseDuration;
        has_built_in_endstop?: boolean;
        manual_control?: boolean;
        assumed_state?: boolean;
    } & CoverCOVER_SCHEMA & CoreCOMPONENT_SCHEMA;
