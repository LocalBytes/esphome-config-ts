/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: htu21d.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/htu21d
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Htu21dSensor extends BaseComponent<Htu21dSensorConfig> {
    componentName: string = "htu21d.sensor";
}

export interface Htu21dSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Htu21dSensorConfigTemperature;
    humidity?: Htu21dSensorConfigHumidity;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Htu21dSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Htu21dSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
