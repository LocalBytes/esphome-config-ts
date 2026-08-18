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
import type { CoreENTITYBASESCHEMA } from "./esphome.js";

export abstract class WaterHeater extends EsphomeComponent {
    componentName: string = "water_heater";
}

export interface WaterHeaterWATERHEATERSCHEMAVisual {
    max_temperature?: any;
    min_temperature?: any;
    target_temperature_step?: any;
}

export interface WaterHeaterWATERHEATERSCHEMA extends CoreENTITYBASESCHEMA {
    visual?: WaterHeaterWATERHEATERSCHEMAVisual;
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
