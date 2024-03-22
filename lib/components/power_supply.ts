/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: power_supply.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/power_supply
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class PowerSupply extends BaseComponent<PowerSupplyConfig> {
    componentName: string = "power_supply";
}

export interface PowerSupplyConfig extends CoreCOMPONENT_SCHEMA {
    id: string;
    pin: Pin;
    enable_time?: PowerSupplyConfigEnableTime;
    keep_on_time?: PowerSupplyConfigKeepOnTime;
}

export interface PowerSupplyConfigEnableTime extends CorePositiveTimePeriodMilliseconds {
}

export interface PowerSupplyConfigKeepOnTime extends CorePositiveTimePeriodMilliseconds {
}
