/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: anova.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/anova
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { ClimateCLIMATE_SCHEMA } from "./climate.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AnovaClimate extends BaseComponent<AnovaClimateConfig> {
    componentName: string = "anova.climate";
}

export interface AnovaClimateConfig extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement: AnovaClimateConfigUnitOfMeasurement;
    ble_client_id?: ID;
    update_interval?: any;
}

export type AnovaClimateConfigUnitOfMeasurement = 'f' | 'c';
