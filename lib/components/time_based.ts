/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: time_based.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/time_based
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { CoverCOVER_SCHEMA } from "./cover.js";

export class TimeBasedCover extends BaseComponent<TimeBasedCoverConfig> {
    componentName: string = "time_based.cover";
}

export interface TimeBasedCoverConfig extends CoverCOVER_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    stop_action: object[];
    open_action: object[];
    open_duration: TimeBasedCoverConfigOpenDuration;
    close_action: object[];
    close_duration: TimeBasedCoverConfigCloseDuration;
    has_built_in_endstop?: boolean;
    manual_control?: boolean;
    assumed_state?: boolean;
}

export interface TimeBasedCoverConfigOpenDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface TimeBasedCoverConfigCloseDuration extends CorePositiveTimePeriodMilliseconds {
}
