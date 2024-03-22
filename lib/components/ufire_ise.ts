/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ufire_ise.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ufire_ise
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class UfireIseSensor extends BaseComponent<UfireIseSensorConfig> {
    componentName: string = "ufire_ise.sensor";
}

export interface UfireIseSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: UfireIseSensorConfigTemperature;
    ph?: UfireIseSensorConfigPh;
    temperature_sensor?: ID;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface UfireIseSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface UfireIseSensorConfigPh extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface UfireIseSensorUFIRE_ISE_CALIBRATE_PROBE_SCHEMA {
    id?: ID;
    solution: string;
}

export abstract class UfireIse extends BaseComponent {
    componentName: string = "ufire_ise";
}
