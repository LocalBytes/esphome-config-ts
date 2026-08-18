/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ltr_als_ps.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ltr_als_ps
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class LtrAlsPsSensor extends EsphomeComponent<LtrAlsPsSensorConfig> {
    componentName: string = "ltr_als_ps.sensor";
}

export interface LtrAlsPsSensorConfigActualGain extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface LtrAlsPsSensorConfigActualIntegrationTime extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface LtrAlsPsSensorConfigAmbientLight extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface LtrAlsPsSensorConfigFullSpectrumCounts extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type LtrAlsPsSensorConfigGain = '1X' | '2X' | '4X' | '8X' | '48X' | '96X';

export interface LtrAlsPsSensorConfigInfraredCounts extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type LtrAlsPsSensorConfigPsCooldown = CorePositiveTimePeriodSeconds;

export interface LtrAlsPsSensorConfigPsCounts extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type LtrAlsPsSensorConfigPsGain = '16X' | '32X' | '64X';
export type LtrAlsPsSensorConfigType = 'ALS' | 'PS' | 'ALS_PS';

export interface LtrAlsPsSensorConfig extends CoreCOMPONENT_SCHEMA {
    actual_gain?: LtrAlsPsSensorConfigActualGain;
    actual_integration_time?: LtrAlsPsSensorConfigActualIntegrationTime;
    address?: any;
    ambient_light?: LtrAlsPsSensorConfigAmbientLight;
    auto_mode?: boolean;
    full_spectrum_counts?: LtrAlsPsSensorConfigFullSpectrumCounts;
    gain?: LtrAlsPsSensorConfigGain;
    glass_attenuation_factor?: any;
    i2c_id?: ID;
    id?: ID;
    infrared_counts?: LtrAlsPsSensorConfigInfraredCounts;
    integration_time?: any;
    on_ps_high_threshold?: object[];
    on_ps_low_threshold?: object[];
    ps_cooldown?: LtrAlsPsSensorConfigPsCooldown;
    ps_counts?: LtrAlsPsSensorConfigPsCounts;
    ps_gain?: LtrAlsPsSensorConfigPsGain;
    ps_high_threshold?: number;
    ps_low_threshold?: number;
    repeat?: any;
    type?: LtrAlsPsSensorConfigType;
    update_interval?: any;
}
