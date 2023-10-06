/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tmp102.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tmp102
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tmp102Sensor extends BaseComponent<Tmp102SensorConfig> {
    componentName: string = "tmp102.sensor";
}

export interface Tmp102SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
