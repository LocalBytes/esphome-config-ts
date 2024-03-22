/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: total_daily_energy.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/total_daily_energy
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class TotalDailyEnergySensor extends BaseComponent<TotalDailyEnergySensorConfig> {
    componentName: string = "total_daily_energy.sensor";
}

export interface TotalDailyEnergySensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    device_class?: any;
    state_class?: any;
    time_id?: ID;
    power_id: ID;
    restore?: boolean;
    method?: TotalDailyEnergySensorConfigMethod;
}

export type TotalDailyEnergySensorConfigMethod = 'trapezoid' | 'left' | 'right';
