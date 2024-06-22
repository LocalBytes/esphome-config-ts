/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: scd4x.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/scd4x
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Scd4xSensor extends EsphomeComponent<Scd4xSensorConfig> {
    componentName: string = "scd4x.sensor";
}

export interface Scd4xSensorConfigCo2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Scd4xSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Scd4xSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export type Scd4xSensorConfigMeasurementMode = 'periodic' | 'low_power_periodic' | 'single_shot' | 'single_shot_rht_only';

export interface Scd4xSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    co2?: Scd4xSensorConfigCo2;
    temperature?: Scd4xSensorConfigTemperature;
    humidity?: Scd4xSensorConfigHumidity;
    automatic_self_calibration?: boolean;
    altitude_compensation?: number;
    ambient_pressure_compensation?: any;
    temperature_offset?: any;
    ambient_pressure_compensation_source?: ID;
    measurement_mode?: Scd4xSensorConfigMeasurementMode;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export abstract class Scd4x extends EsphomeComponent {
    componentName: string = "scd4x";
}
