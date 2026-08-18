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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Scd4x extends EsphomeComponent {
    componentName: string = "scd4x";
}

export class Scd4xSensor extends EsphomeComponent<Scd4xSensorConfig> {
    componentName: string = "scd4x.sensor";
}

export interface Scd4xSensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Scd4xSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Scd4xSensorConfigMeasurementMode = 'periodic' | 'low_power_periodic' | 'single_shot' | 'single_shot_rht_only';

export interface Scd4xSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Scd4xSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    altitude_compensation?: number;
    ambient_pressure_compensation?: any;
    ambient_pressure_compensation_source?: ID;
    automatic_self_calibration?: boolean;
    co2?: Scd4xSensorConfigCo2;
    humidity?: Scd4xSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    measurement_mode?: Scd4xSensorConfigMeasurementMode;
    temperature?: Scd4xSensorConfigTemperature;
    temperature_offset?: any;
    update_interval?: any;
}
