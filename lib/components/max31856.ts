/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max31856.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max31856
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Max31856Sensor extends BaseComponent<Max31856SensorConfig> {
    componentName: string = "max31856.sensor";
}

export interface Max31856SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    mains_filter?: Max31856SensorConfigMainsFilter;
    update_interval?: any;
    spi_id?: ID;
    cs_pin: Pin;
}

export type Max31856SensorConfigMainsFilter = '50HZ' | '60HZ';
