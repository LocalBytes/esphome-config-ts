/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: feedback.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/feedback
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { CoverCOVER_SCHEMA } from "./cover.js";

export class FeedbackCover extends BaseComponent<FeedbackCoverConfig> {
    componentName: string = "feedback.cover";
}

export interface FeedbackCoverConfig extends CoverCOVER_SCHEMA, CoreCOMPONENT_SCHEMA {
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
}

export interface FeedbackCoverConfigOpenDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface FeedbackCoverConfigCloseDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface FeedbackCoverConfigMaxDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface FeedbackCoverConfigUpdateInterval extends CorePositiveTimePeriodMilliseconds {
}

export interface FeedbackCoverConfigDirectionChangeWaitTime extends CorePositiveTimePeriodMilliseconds {
}

export interface FeedbackCoverConfigAccelerationWaitTime extends CorePositiveTimePeriodMilliseconds {
}
