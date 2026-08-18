/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: total_daily_energy.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/total_daily_energy
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class TotalDailyEnergySensor extends EsphomeComponent<TotalDailyEnergySensorConfig> {
    componentName: string = "total_daily_energy.sensor";
}

export type TotalDailyEnergySensorConfigMethod = 'trapezoid' | 'left' | 'right';
export type TotalDailyEnergySensorConfig = {
        device_class?: any;
        id?: any;
        method?: TotalDailyEnergySensorConfigMethod;
        power_id: ID;
        restore?: boolean;
        state_class?: any;
        time_id?: ID;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
