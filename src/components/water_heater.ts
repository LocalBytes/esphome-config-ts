/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: water_heater.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/water_heater
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA } from "./esphome.js";

export abstract class WaterHeater extends EsphomeComponent {
    componentName: string = "water_heater";
}

export interface WaterHeater_WATER_HEATER_SCHEMAVisual {
    max_temperature?: any;
    min_temperature?: any;
    target_temperature_step?: any;
}

export interface WaterHeater_WATER_HEATER_SCHEMA extends CoreENTITY_BASE_SCHEMA {
    visual?: WaterHeater_WATER_HEATER_SCHEMAVisual;
    id?: any;
    name?: any;
    icon?: any;
    supported_modes?: any;
    internal?: any;
    disabled_by_default?: any;
    entity_category?: any;
    mode?: any;
    target_temperature?: any;
}
