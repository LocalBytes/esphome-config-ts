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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { CoverCOVERSCHEMA } from "./cover.js";

export class CurrentBasedCover extends EsphomeComponent<CurrentBasedCoverConfig> {
    componentName: string = "current_based.cover";
}

export type CurrentBasedCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type CurrentBasedCoverConfigMaxDuration = CorePositiveTimePeriodMilliseconds;
export type CurrentBasedCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type CurrentBasedCoverConfigStartSensingDelay = CorePositiveTimePeriodMilliseconds;
export type CurrentBasedCoverConfig = {
        close_action: object[];
        close_duration: CurrentBasedCoverConfigCloseDuration;
        close_moving_current_threshold: string;
        close_obstacle_current_threshold?: any;
        close_sensor: ID;
        id?: ID;
        malfunction_action?: object[];
        malfunction_detection?: boolean;
        max_duration?: CurrentBasedCoverConfigMaxDuration;
        obstacle_rollback?: any;
        open_action: object[];
        open_duration: CurrentBasedCoverConfigOpenDuration;
        open_moving_current_threshold: string;
        open_obstacle_current_threshold?: any;
        open_sensor: ID;
        start_sensing_delay?: CurrentBasedCoverConfigStartSensingDelay;
        stop_action: object[];
    } & CoverCOVERSCHEMA & CoreCOMPONENTSCHEMA;
