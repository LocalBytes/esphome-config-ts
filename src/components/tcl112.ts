/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tcl112.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tcl112
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class Tcl112Climate extends BaseComponent<Tcl112ClimateConfig> {
    componentName: string = "tcl112.climate";
}

export interface Tcl112ClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
}
