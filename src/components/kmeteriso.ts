/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: kmeteriso.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/kmeteriso
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class KmeterisoSensor extends EsphomeComponent<KmeterisoSensorConfig> {
    componentName: string = "kmeteriso.sensor";
}

export interface KmeterisoSensorConfigInternalTemperature extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KmeterisoSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KmeterisoSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    internal_temperature?: KmeterisoSensorConfigInternalTemperature;
    temperature?: KmeterisoSensorConfigTemperature;
    update_interval?: any;
}
