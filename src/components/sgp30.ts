/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sgp30.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sgp30
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Sgp30Sensor extends EsphomeComponent<Sgp30SensorConfig> {
    componentName: string = "sgp30.sensor";
}

export interface Sgp30SensorConfigBaseline {
    eco2_baseline: string;
    tvoc_baseline: string;
}

export interface Sgp30SensorConfigCompensation {
    humidity_source: ID;
    temperature_source: ID;
}

export interface Sgp30SensorConfigEco2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sgp30SensorConfigEco2Baseline extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface Sgp30SensorConfigTvoc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sgp30SensorConfigTvocBaseline extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface Sgp30SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    baseline?: Sgp30SensorConfigBaseline;
    compensation?: Sgp30SensorConfigCompensation;
    eco2?: Sgp30SensorConfigEco2;
    eco2_baseline?: Sgp30SensorConfigEco2Baseline;
    i2c_id?: ID;
    id?: ID;
    store_baseline?: boolean;
    tvoc?: Sgp30SensorConfigTvoc;
    tvoc_baseline?: Sgp30SensorConfigTvocBaseline;
    update_interval?: any;
}
