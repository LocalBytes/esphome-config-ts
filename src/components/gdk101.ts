/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gdk101.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gdk101
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Gdk101 extends EsphomeComponent<Gdk101Config> {
    componentName: string = "gdk101";
}

export interface Gdk101Config extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    update_interval?: any;
}

export class Gdk101BinarySensor extends EsphomeComponent<Gdk101BinarySensorConfig> {
    componentName: string = "gdk101.binary_sensor";
}

export interface Gdk101BinarySensorConfigVibrations extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
}

export interface Gdk101BinarySensorConfig {
    gdk101_id?: ID;
    vibrations: Gdk101BinarySensorConfigVibrations;
}

export class Gdk101Sensor extends EsphomeComponent<Gdk101SensorConfig> {
    componentName: string = "gdk101.sensor";
}

export interface Gdk101SensorConfigMeasurementDuration extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gdk101SensorConfigRadiationDosePer_10m extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gdk101SensorConfigRadiationDosePer_1m extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gdk101SensorConfigStatus extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface Gdk101SensorConfig {
    gdk101_id?: ID;
    measurement_duration?: Gdk101SensorConfigMeasurementDuration;
    radiation_dose_per_10m?: Gdk101SensorConfigRadiationDosePer_10m;
    radiation_dose_per_1m?: Gdk101SensorConfigRadiationDosePer_1m;
    status?: Gdk101SensorConfigStatus;
}

export class Gdk101TextSensor extends EsphomeComponent<Gdk101TextSensorConfig> {
    componentName: string = "gdk101.text_sensor";
}

export interface Gdk101TextSensorConfigVersion extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Gdk101TextSensorConfig {
    gdk101_id?: ID;
    version: Gdk101TextSensorConfigVersion;
}
