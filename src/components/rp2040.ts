/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rp2040.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rp2040
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export class Rp2040 extends EsphomeComponent<Rp2040Config> {
    componentName: string = "rp2040";
}

export interface Rp2040ConfigFramework {
    platform_version?: any;
    source?: string;
    version?: string;
}

export type Rp2040ConfigVariant = 'RP2040' | 'RP2350';
export type Rp2040ConfigWatchdogTimeout = CorePositiveTimePeriodMilliseconds;

export interface Rp2040Config {
    board?: string;
    enable_full_printf?: boolean;
    framework?: Rp2040ConfigFramework;
    variant?: Rp2040ConfigVariant;
    watchdog_timeout?: Rp2040ConfigWatchdogTimeout;
}
