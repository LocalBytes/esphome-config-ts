/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tormatic.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tormatic
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { CoverCOVERSCHEMA } from "./cover.js";

export class TormaticCover extends EsphomeComponent<TormaticCoverConfig> {
    componentName: string = "tormatic.cover";
}

export type TormaticCoverConfigCloseDuration = CorePositiveTimePeriodMilliseconds;
export type TormaticCoverConfigOpenDuration = CorePositiveTimePeriodMilliseconds;
export type TormaticCoverConfig = {
        close_duration?: TormaticCoverConfigCloseDuration;
        id?: ID;
        open_duration?: TormaticCoverConfigOpenDuration;
        uart_id?: ID;
        update_interval?: any;
    } & CoverCOVERSCHEMA & CoreCOMPONENTSCHEMA;
