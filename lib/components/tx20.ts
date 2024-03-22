/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tx20.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tx20
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tx20Sensor extends BaseComponent<Tx20SensorConfig> {
    componentName: string = "tx20.sensor";
}

export interface Tx20SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    wind_speed?: Tx20SensorConfigWindSpeed;
    wind_direction_degrees?: Tx20SensorConfigWindDirectionDegrees;
    pin: Pin;
}

export interface Tx20SensorConfigWindSpeed extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Tx20SensorConfigWindDirectionDegrees extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}
