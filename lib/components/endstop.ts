/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: endstop.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/endstop
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { CoverCOVER_SCHEMA } from "./cover.js";

export class EndstopCover extends BaseComponent<EndstopCoverConfig> {
    componentName: string = "endstop.cover";
}

export interface EndstopCoverConfig extends CoverCOVER_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    stop_action: object[];
    open_endstop: ID;
    open_action: object[];
    open_duration: EndstopCoverConfigOpenDuration;
    close_action: object[];
    close_endstop: ID;
    close_duration: EndstopCoverConfigCloseDuration;
    max_duration?: EndstopCoverConfigMaxDuration;
}

export interface EndstopCoverConfigOpenDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface EndstopCoverConfigCloseDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface EndstopCoverConfigMaxDuration extends CorePositiveTimePeriodMilliseconds {
}
