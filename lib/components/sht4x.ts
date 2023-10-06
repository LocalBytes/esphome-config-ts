/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sht4x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sht4x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sht4xSensor extends BaseComponent<Sht4xSensorConfig> {
    componentName: string = "sht4x.sensor";
}

export interface Sht4xSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Sht4xSensorConfigTemperature;
    humidity?: Sht4xSensorConfigHumidity;
    precision?: Sht4xSensorConfigPrecision;
    heater_power?: Sht4xSensorConfigHeaterPower;
    heater_time?: Sht4xSensorConfigHeaterTime;
    heater_max_duty?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Sht4xSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sht4xSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export type Sht4xSensorConfigPrecision = 'High' | 'Med' | 'Low';
export type Sht4xSensorConfigHeaterPower = 'High' | 'Med' | 'Low';
export type Sht4xSensorConfigHeaterTime = 'Long' | 'Short';
