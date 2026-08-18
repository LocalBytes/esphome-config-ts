/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: runtime_stats.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/runtime_stats
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export class RuntimeStats extends EsphomeComponent<RuntimeStatsConfig> {
    componentName: string = "runtime_stats";
}

export type RuntimeStatsConfigLogInterval = CorePositiveTimePeriodMilliseconds;

export interface RuntimeStatsConfig {
    id?: ID;
    log_interval?: RuntimeStatsConfigLogInterval;
}
