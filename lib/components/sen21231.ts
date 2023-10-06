/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sen21231.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sen21231
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sen21231Sensor extends BaseComponent<Sen21231SensorConfig> {
    componentName: string = "sen21231.sensor";
}

export interface Sen21231SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    icon?: any;
    accuracy_decimals?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
