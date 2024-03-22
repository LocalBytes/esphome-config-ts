/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hte501.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hte501
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hte501Sensor extends BaseComponent<Hte501SensorConfig> {
    componentName: string = "hte501.sensor";
}

export interface Hte501SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature: Hte501SensorConfigTemperature;
    humidity: Hte501SensorConfigHumidity;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Hte501SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hte501SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
