/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: resistance.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/resistance
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class ResistanceSensor extends BaseComponent<ResistanceSensorConfig> {
    componentName: string = "resistance.sensor";
}

export interface ResistanceSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    sensor: ID;
    configuration: ResistanceSensorConfigConfiguration;
    resistor: string;
    reference_voltage?: any;
}

export type ResistanceSensorConfigConfiguration = 'DOWNSTREAM' | 'UPSTREAM';
