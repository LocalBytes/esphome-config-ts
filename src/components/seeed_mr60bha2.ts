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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class SeeedMr60bha2 extends EsphomeComponent<SeeedMr60bha2Config> {
    componentName: string = "seeed_mr60bha2";
}

export interface SeeedMr60bha2Config extends CoreCOMPONENTSCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class SeeedMr60bha2BinarySensor extends EsphomeComponent<SeeedMr60bha2BinarySensorConfig> {
    componentName: string = "seeed_mr60bha2.binary_sensor";
}

export interface SeeedMr60bha2BinarySensorConfigHasTarget extends BinarySensorBINARYSENSORSCHEMA {
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

export interface SeeedMr60bha2SensorConfigBreathRate extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface SeeedMr60bha2SensorConfigDistance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SeeedMr60bha2SensorConfigHeartRate extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SeeedMr60bha2SensorConfigNumTargets extends SensorSENSORSCHEMA {
    icon?: any;
}

export interface SeeedMr60bha2SensorConfig {
    breath_rate?: SeeedMr60bha2SensorConfigBreathRate;
    distance?: SeeedMr60bha2SensorConfigDistance;
    heart_rate?: SeeedMr60bha2SensorConfigHeartRate;
    mr60bha2_id?: ID;
    num_targets?: SeeedMr60bha2SensorConfigNumTargets;
}
