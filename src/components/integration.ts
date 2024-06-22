/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: integration.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/integration
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class IntegrationSensor extends EsphomeComponent<IntegrationSensorConfig> {
    componentName: string = "integration.sensor";
}

export type IntegrationSensorConfigTimeUnit = 'ms' | 's' | 'min' | 'h' | 'd';
export type IntegrationSensorConfigIntegrationMethod = 'trapezoid' | 'left' | 'right';
export type IntegrationSensorConfig = {
        id?: any;
        sensor: ID;
        time_unit: IntegrationSensorConfigTimeUnit;
        integration_method?: IntegrationSensorConfigIntegrationMethod;
        restore?: boolean;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
