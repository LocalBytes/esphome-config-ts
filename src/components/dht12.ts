/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dht12.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dht12
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Dht12Sensor extends BaseComponent<Dht12SensorConfig> {
    componentName: string = "dht12.sensor";
}

export interface Dht12SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Dht12SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Dht12SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Dht12SensorConfigTemperature;
    humidity?: Dht12SensorConfigHumidity;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
