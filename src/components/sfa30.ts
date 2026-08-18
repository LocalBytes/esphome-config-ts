/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sfa30.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sfa30
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sfa30Sensor extends EsphomeComponent<Sfa30SensorConfig> {
    componentName: string = "sfa30.sensor";
}

export interface Sfa30SensorConfigFormaldehyde extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sfa30SensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sfa30SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sfa30SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    formaldehyde?: Sfa30SensorConfigFormaldehyde;
    humidity?: Sfa30SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Sfa30SensorConfigTemperature;
    update_interval?: any;
}
