/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: htu21d.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/htu21d
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Htu21dSensor extends EsphomeComponent<Htu21dSensorConfig> {
    componentName: string = "htu21d.sensor";
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

export interface Htu21dSensorConfigHeater extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Htu21dSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Htu21dSensorConfigTemperature;
    humidity?: Htu21dSensorConfigHumidity;
    heater?: Htu21dSensorConfigHeater;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export abstract class Htu21d extends EsphomeComponent {
    componentName: string = "htu21d";
}
