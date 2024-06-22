/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dps310.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dps310
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Dps310Sensor extends BaseComponent<Dps310SensorConfig> {
    componentName: string = "dps310.sensor";
}

export interface Dps310SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Dps310SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Dps310SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature: Dps310SensorConfigTemperature;
    pressure: Dps310SensorConfigPressure;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
