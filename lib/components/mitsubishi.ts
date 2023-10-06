/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mitsubishi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mitsubishi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { ClimateIrCLIMATE_IR_SCHEMA } from "./climate_ir.js";

export class MitsubishiClimate extends BaseComponent<MitsubishiClimateConfig> {
    componentName: string = "mitsubishi.climate";
}

export interface MitsubishiClimateConfig extends ClimateIrCLIMATE_IR_SCHEMA {
    id?: any;
}
