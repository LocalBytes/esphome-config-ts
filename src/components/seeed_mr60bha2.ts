/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: seeed_mr60bha2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/seeed_mr60bha2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class SeeedMr60bha2 extends EsphomeComponent<SeeedMr60bha2Config> {
    componentName: string = "seeed_mr60bha2";
}

export interface SeeedMr60bha2Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class SeeedMr60bha2BinarySensor extends EsphomeComponent<SeeedMr60bha2BinarySensorConfig> {
    componentName: string = "seeed_mr60bha2.binary_sensor";
}

export interface SeeedMr60bha2BinarySensorConfigHasTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export interface SeeedMr60bha2BinarySensorConfig {
    has_target?: SeeedMr60bha2BinarySensorConfigHasTarget;
    mr60bha2_id?: ID;
}

export class SeeedMr60bha2Sensor extends EsphomeComponent<SeeedMr60bha2SensorConfig> {
    componentName: string = "seeed_mr60bha2.sensor";
}

export interface SeeedMr60bha2SensorConfigBreathRate extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface SeeedMr60bha2SensorConfigDistance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SeeedMr60bha2SensorConfigHeartRate extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SeeedMr60bha2SensorConfigNumTargets extends Sensor_SENSOR_SCHEMA {
    icon?: any;
}

export interface SeeedMr60bha2SensorConfig {
    breath_rate?: SeeedMr60bha2SensorConfigBreathRate;
    distance?: SeeedMr60bha2SensorConfigDistance;
    heart_rate?: SeeedMr60bha2SensorConfigHeartRate;
    mr60bha2_id?: ID;
    num_targets?: SeeedMr60bha2SensorConfigNumTargets;
}
