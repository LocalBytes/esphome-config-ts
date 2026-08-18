/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: scd30.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/scd30
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Scd30 extends EsphomeComponent {
    componentName: string = "scd30";
}

export class Scd30Sensor extends EsphomeComponent<Scd30SensorConfig> {
    componentName: string = "scd30.sensor";
}

export interface Scd30SensorConfigCo2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Scd30SensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Scd30SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Scd30SensorConfigUpdateInterval = CorePositiveTimePeriodSeconds;

export interface Scd30SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    altitude_compensation?: number;
    ambient_pressure_compensation?: any;
    automatic_self_calibration?: boolean;
    co2?: Scd30SensorConfigCo2;
    humidity?: Scd30SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Scd30SensorConfigTemperature;
    temperature_offset?: any;
    update_interval?: Scd30SensorConfigUpdateInterval;
}
