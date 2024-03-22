/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tof10120.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tof10120
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tof10120Sensor extends BaseComponent<Tof10120SensorConfig> {
    componentName: string = "tof10120.sensor";
}

export interface Tof10120SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
