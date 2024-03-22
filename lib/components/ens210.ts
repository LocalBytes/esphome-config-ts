/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ens210.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ens210
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ens210Sensor extends BaseComponent<Ens210SensorConfig> {
    componentName: string = "ens210.sensor";
}

export interface Ens210SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Ens210SensorConfigTemperature;
    humidity?: Ens210SensorConfigHumidity;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Ens210SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ens210SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
