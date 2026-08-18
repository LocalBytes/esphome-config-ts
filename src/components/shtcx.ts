/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: shtcx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/shtcx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class ShtcxSensor extends EsphomeComponent<ShtcxSensorConfig> {
    componentName: string = "shtcx.sensor";
}

export interface ShtcxSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ShtcxSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ShtcxSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    humidity?: ShtcxSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: ShtcxSensorConfigTemperature;
    update_interval?: any;
}
