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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { CoverCOVER_SCHEMA } from "./cover.js";

export class FeedbackCover extends EsphomeComponent<FeedbackCoverConfig> {
    componentName: string = "feedback.cover";
}

export type FeedbackCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigMaxDuration = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigUpdateInterval = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigDirectionChangeWaitTime = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfigAccelerationWaitTime = CorePositiveTimePeriodMilliseconds;
export type FeedbackCoverConfig = {
        id?: any;
        stop_action: object[];
        open_action: object[];
        open_duration: FeedbackCoverConfigOpenDuration;
        open_endstop?: ID;
        open_sensor?: ID;
        open_obstacle_sensor?: ID;
        close_action: object[];
        close_duration: FeedbackCoverConfigCloseDuration;
        close_endstop?: ID;
        close_sensor?: ID;
        close_obstacle_sensor?: ID;
        max_duration?: FeedbackCoverConfigMaxDuration;
        has_built_in_endstop?: boolean;
        assumed_state?: boolean;
        update_interval?: FeedbackCoverConfigUpdateInterval;
        infer_endstop_from_movement?: boolean;
        direction_change_wait_time?: FeedbackCoverConfigDirectionChangeWaitTime;
        acceleration_wait_time?: FeedbackCoverConfigAccelerationWaitTime;
        obstacle_rollback?: any;
    } & CoverCOVER_SCHEMA & CoreCOMPONENT_SCHEMA;
