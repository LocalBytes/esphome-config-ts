/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tmp117.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tmp117
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tmp117Sensor extends BaseComponent<Tmp117SensorConfig> {
    componentName: string = "tmp117.sensor";
}

export interface Tmp117SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
