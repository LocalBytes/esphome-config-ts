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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sgp30Sensor extends EsphomeComponent<Sgp30SensorConfig> {
    componentName: string = "sgp30.sensor";
}

export interface Sgp30SensorConfigEco2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sgp30SensorConfigTvoc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sgp30SensorConfigEco2Baseline extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface Sgp30SensorConfigTvocBaseline extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface Sgp30SensorConfigBaseline {
    eco2_baseline: string;
    tvoc_baseline: string;
}

export interface Sgp30SensorConfigCompensation {
    humidity_source: ID;
    temperature_source: ID;
}

export interface Sgp30SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    eco2: Sgp30SensorConfigEco2;
    tvoc: Sgp30SensorConfigTvoc;
    eco2_baseline?: Sgp30SensorConfigEco2Baseline;
    tvoc_baseline?: Sgp30SensorConfigTvocBaseline;
    store_baseline?: boolean;
    baseline?: Sgp30SensorConfigBaseline;
    compensation?: Sgp30SensorConfigCompensation;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
