/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: absolute_humidity.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/absolute_humidity
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AbsoluteHumiditySensor extends BaseComponent<AbsoluteHumiditySensorConfig> {
    componentName: string = "absolute_humidity.sensor";
}

export interface AbsoluteHumiditySensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    id?: any;
    temperature: ID;
    humidity: ID;
    equation?: AbsoluteHumiditySensorConfigEquation;
}

export type AbsoluteHumiditySensorConfigEquation = 'BUCK' | 'TETENS' | 'WOBUS';
