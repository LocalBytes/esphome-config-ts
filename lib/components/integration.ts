/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: integration.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/integration
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class IntegrationSensor extends BaseComponent<IntegrationSensorConfig> {
    componentName: string = "integration.sensor";
}

export interface IntegrationSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    sensor: ID;
    time_unit: IntegrationSensorConfigTimeUnit;
    integration_method?: IntegrationSensorConfigIntegrationMethod;
    restore?: boolean;
}

export type IntegrationSensorConfigTimeUnit = 'ms' | 's' | 'min' | 'h' | 'd';
export type IntegrationSensorConfigIntegrationMethod = 'trapezoid' | 'left' | 'right';
