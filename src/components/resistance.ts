/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: resistance.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/resistance
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class ResistanceSensor extends BaseComponent<ResistanceSensorConfig> {
    componentName: string = "resistance.sensor";
}

export type ResistanceSensorConfigConfiguration = 'DOWNSTREAM' | 'UPSTREAM';
export type ResistanceSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
        state_class?: any;
        sensor: ID;
        configuration: ResistanceSensorConfigConfiguration;
        resistor: string;
        reference_voltage?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
