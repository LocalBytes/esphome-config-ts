/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: climate_ir.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/climate_ir
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { ClimateCLIMATE_SCHEMA } from "./climate.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class ClimateIr extends BaseComponent {
    componentName: string = "climate_ir";
}

export interface ClimateIrCLIMATE_IR_SCHEMA extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA {
    transmitter_id?: ID;
    supports_cool?: boolean;
    supports_heat?: boolean;
    sensor?: ID;
}

export interface ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA extends ClimateIrCLIMATE_IR_SCHEMA {
    receiver_id?: ID;
}
