/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: scd30.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/scd30
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Scd30Sensor extends BaseComponent<Scd30SensorConfig> {
    componentName: string = "scd30.sensor";
}

export interface Scd30SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    co2?: Scd30SensorConfigCo2;
    temperature?: Scd30SensorConfigTemperature;
    humidity?: Scd30SensorConfigHumidity;
    automatic_self_calibration?: boolean;
    altitude_compensation?: number;
    ambient_pressure_compensation?: any;
    temperature_offset?: any;
    update_interval?: Scd30SensorConfigUpdateInterval;
    i2c_id?: ID;
    address?: any;
}

export interface Scd30SensorConfigCo2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Scd30SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Scd30SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Scd30SensorConfigUpdateInterval extends CorePositiveTimePeriodSeconds {
}

export abstract class Scd30 extends BaseComponent {
    componentName: string = "scd30";
}
