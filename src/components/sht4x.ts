/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sht4x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sht4x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sht4xSensor extends EsphomeComponent<Sht4xSensorConfig> {
    componentName: string = "sht4x.sensor";
}

export type Sht4xSensorConfigHeaterPower = 'High' | 'Med' | 'Low';
export type Sht4xSensorConfigHeaterTime = 'Long' | 'Short';

export interface Sht4xSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Sht4xSensorConfigPrecision = 'High' | 'Med' | 'Low';

export interface Sht4xSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sht4xSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    heater_max_duty?: any;
    heater_power?: Sht4xSensorConfigHeaterPower;
    heater_time?: Sht4xSensorConfigHeaterTime;
    humidity?: Sht4xSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    precision?: Sht4xSensorConfigPrecision;
    temperature?: Sht4xSensorConfigTemperature;
    update_interval?: any;
}
