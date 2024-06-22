/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: current_based.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/current_based
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { CoverCOVER_SCHEMA } from "./cover.js";

export class CurrentBasedCover extends EsphomeComponent<CurrentBasedCoverConfig> {
    componentName: string = "current_based.cover";
}

export type CurrentBasedCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type CurrentBasedCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type CurrentBasedCoverConfigMaxDuration = CorePositiveTimePeriodMilliseconds;
export type CurrentBasedCoverConfigStartSensingDelay = CorePositiveTimePeriodMilliseconds;
export type CurrentBasedCoverConfig = {
        id?: any;
        stop_action: object[];
        open_sensor: ID;
        open_moving_current_threshold: string;
        open_obstacle_current_threshold?: any;
        open_action: object[];
        open_duration: CurrentBasedCoverConfigOpenDuration;
        close_sensor: ID;
        close_moving_current_threshold: string;
        close_obstacle_current_threshold?: any;
        close_action: object[];
        close_duration: CurrentBasedCoverConfigCloseDuration;
        obstacle_rollback?: any;
        max_duration?: CurrentBasedCoverConfigMaxDuration;
        malfunction_detection?: boolean;
        malfunction_action?: object[];
        start_sensing_delay?: CurrentBasedCoverConfigStartSensingDelay;
    } & CoverCOVER_SCHEMA & CoreCOMPONENT_SCHEMA;
