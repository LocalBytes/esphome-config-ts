/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: feedback.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/feedback
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { CoverCOVERSCHEMA } from "./cover.js";

export class FeedbackCover extends EsphomeComponent<FeedbackCoverConfig> {
    componentName: string = "feedback.cover";
}

export type FeedbackCoverConfigAccelerationWaitTime = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigDirectionChangeWaitTime = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigMaxDuration = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigUpdateInterval = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfig = {
        acceleration_wait_time?: FeedbackCoverConfigAccelerationWaitTime;
        assumed_state?: boolean;
        close_action: object[];
        close_duration: FeedbackCoverConfigCloseDuration;
        close_endstop?: ID;
        close_obstacle_sensor?: ID;
        close_sensor?: ID;
        direction_change_wait_time?: FeedbackCoverConfigDirectionChangeWaitTime;
        has_built_in_endstop?: boolean;
        id?: ID;
        infer_endstop_from_movement?: boolean;
        max_duration?: FeedbackCoverConfigMaxDuration;
        obstacle_rollback?: any;
        open_action: object[];
        open_duration: FeedbackCoverConfigOpenDuration;
        open_endstop?: ID;
        open_obstacle_sensor?: ID;
        open_sensor?: ID;
        stop_action: object[];
        update_interval?: FeedbackCoverConfigUpdateInterval;
    } & CoverCOVERSCHEMA & CoreCOMPONENTSCHEMA;
