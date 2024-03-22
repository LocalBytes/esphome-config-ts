/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ufire_ec.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ufire_ec
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class UfireEcSensor extends BaseComponent<UfireEcSensorConfig> {
    componentName: string = "ufire_ec.sensor";
}

export interface UfireEcSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: UfireEcSensorConfigTemperature;
    ec?: UfireEcSensorConfigEc;
    temperature_sensor?: ID;
    temperature_compensation?: any;
    temperature_coefficient?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface UfireEcSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface UfireEcSensorConfigEc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export abstract class UfireEc extends BaseComponent {
    componentName: string = "ufire_ec";
}
