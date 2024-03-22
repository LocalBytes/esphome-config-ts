/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dallas.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dallas
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";

export class Dallas extends BaseComponent<DallasConfig> {
    componentName: string = "dallas";
}

export interface DallasConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pin: Pin;
    update_interval?: any;
}

export class DallasSensor extends BaseComponent<DallasSensorConfig> {
    componentName: string = "dallas.sensor";
}

export interface DallasSensorConfig extends SensorSENSOR_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    dallas_id?: ID;
    address?: any;
    index?: number;
    resolution?: number;
}
