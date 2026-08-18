/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ltr501.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ltr501
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ltr501Sensor extends EsphomeComponent<Ltr501SensorConfig> {
    componentName: string = "ltr501.sensor";
}

export interface Ltr501SensorConfigActualGain extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
}

export interface Ltr501SensorConfigActualIntegrationTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ltr501SensorConfigAmbientLight extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ltr501SensorConfigFullSpectrumCounts extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Ltr501SensorConfigGain = '1X' | '150X';

export interface Ltr501SensorConfigInfraredCounts extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Ltr501SensorConfigPsCooldown = CorePositiveTimePeriodSeconds;

export interface Ltr501SensorConfigPsCounts extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Ltr501SensorConfigPsGain = '1X' | '4X' | '8X' | '16X';
export type Ltr501SensorConfigType = 'ALS' | 'PS' | 'ALS_PS';

export interface Ltr501SensorConfig extends CoreCOMPONENTSCHEMA {
    actual_gain?: Ltr501SensorConfigActualGain;
    actual_integration_time?: Ltr501SensorConfigActualIntegrationTime;
    address?: any;
    ambient_light?: Ltr501SensorConfigAmbientLight;
    auto_mode?: boolean;
    full_spectrum_counts?: Ltr501SensorConfigFullSpectrumCounts;
    gain?: Ltr501SensorConfigGain;
    glass_attenuation_factor?: any;
    i2c_id?: ID;
    id?: ID;
    infrared_counts?: Ltr501SensorConfigInfraredCounts;
    integration_time?: any;
    on_ps_high_threshold?: object[];
    on_ps_low_threshold?: object[];
    ps_cooldown?: Ltr501SensorConfigPsCooldown;
    ps_counts?: Ltr501SensorConfigPsCounts;
    ps_gain?: Ltr501SensorConfigPsGain;
    ps_high_threshold?: number;
    ps_low_threshold?: number;
    repeat?: any;
    type?: Ltr501SensorConfigType;
    update_interval?: any;
}
