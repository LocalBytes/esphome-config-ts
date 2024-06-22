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
import type { ClimateCLIMATE_SCHEMA } from "./climate.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AnovaClimate extends EsphomeComponent<AnovaClimateConfig> {
    componentName: string = "anova.climate";
}

export type AnovaClimateConfigUnitOfMeasurement = 'f' | 'c';
export type AnovaClimateConfig = {
        id?: any;
        unit_of_measurement: AnovaClimateConfigUnitOfMeasurement;
        ble_client_id?: ID;
        update_interval?: any;
    } & ClimateCLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA;
