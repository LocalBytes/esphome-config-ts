/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: anova.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/anova
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class AnovaClimate extends EsphomeComponent<AnovaClimateConfig> {
    componentName: string = "anova.climate";
}

export type AnovaClimateConfigUnitOfMeasurement = 'f' | 'c';
export type AnovaClimateConfig = {
        ble_client_id?: ID;
        id?: ID;
        unit_of_measurement: AnovaClimateConfigUnitOfMeasurement;
        update_interval?: any;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;
