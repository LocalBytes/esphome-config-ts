/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: current_based.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/current_based
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { CoverCOVER_SCHEMA } from "./cover.js";

export class CurrentBasedCover extends BaseComponent<CurrentBasedCoverConfig> {
    componentName: string = "current_based.cover";
}

export interface CurrentBasedCoverConfig extends CoverCOVER_SCHEMA, CoreCOMPONENT_SCHEMA {
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
}

export interface CurrentBasedCoverConfigOpenDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface CurrentBasedCoverConfigCloseDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface CurrentBasedCoverConfigMaxDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface CurrentBasedCoverConfigStartSensingDelay extends CorePositiveTimePeriodMilliseconds {
}
