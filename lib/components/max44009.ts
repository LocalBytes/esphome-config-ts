/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max44009.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max44009
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Max44009Sensor extends BaseComponent<Max44009SensorConfig> {
    componentName: string = "max44009.sensor";
}

export interface Max44009SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    id?: any;
    mode?: Max44009SensorConfigMode;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export type Max44009SensorConfigMode = 'auto' | 'low_power' | 'continuous';
