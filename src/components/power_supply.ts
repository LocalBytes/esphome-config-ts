/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: power_supply.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/power_supply
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class PowerSupply extends EsphomeComponent<PowerSupplyConfig> {
    componentName: string = "power_supply";
}

export type PowerSupplyConfigEnableTime = CorePositiveTimePeriodMilliseconds;
export type PowerSupplyConfigKeepOnTime = CorePositiveTimePeriodMilliseconds;

export interface PowerSupplyConfig extends CoreCOMPONENT_SCHEMA {
    enable_on_boot?: boolean;
    enable_time?: PowerSupplyConfigEnableTime;
    id: string;
    keep_on_time?: PowerSupplyConfigKeepOnTime;
    pin: Pin;
}
