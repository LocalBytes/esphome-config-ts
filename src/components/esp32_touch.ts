/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_touch.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_touch
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CorePositiveTimePeriod, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export class Esp32Touch extends EsphomeComponent<Esp32TouchConfig> {
    componentName: string = "esp32_touch";
}

export type Esp32TouchConfigDenoiseCapLevel = 'L0' | 'L1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6' | 'L7';
export type Esp32TouchConfigDenoiseGrade = 'BIT12' | 'BIT10' | 'BIT8' | 'BIT4';
export type Esp32TouchConfigFilterMode = 'IIR_4' | 'IIR_8' | 'IIR_16' | 'IIR_32' | 'IIR_64' | 'IIR_128' | 'IIR_256' | 'JITTER';
export type Esp32TouchConfigIirFilter = CorePositiveTimePeriodMilliseconds;
export type Esp32TouchConfigMeasurementDuration = CorePositiveTimePeriod;
export type Esp32TouchConfigSleepDuration = CorePositiveTimePeriod;
export type Esp32TouchConfigSmoothMode = 'OFF' | 'IIR_2' | 'IIR_4' | 'IIR_8';

export interface Esp32TouchConfig extends CoreCOMPONENTSCHEMA {
    debounce_count?: number;
    denoise_cap_level?: Esp32TouchConfigDenoiseCapLevel;
    denoise_grade?: Esp32TouchConfigDenoiseGrade;
    filter_mode?: Esp32TouchConfigFilterMode;
    high_voltage_reference?: any;
    id?: ID;
    iir_filter?: Esp32TouchConfigIirFilter;
    jitter_step?: number;
    low_voltage_reference?: any;
    measurement_duration?: Esp32TouchConfigMeasurementDuration;
    noise_threshold?: number;
    setup_mode?: boolean;
    sleep_duration?: Esp32TouchConfigSleepDuration;
    smooth_mode?: Esp32TouchConfigSmoothMode;
    voltage_attenuation?: any;
    waterproof_guard_ring?: any;
    waterproof_shield_driver?: number;
}

export class Esp32TouchBinarySensor extends EsphomeComponent<Esp32TouchBinarySensorConfig> {
    componentName: string = "esp32_touch.binary_sensor";
}

export interface Esp32TouchBinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    esp32_touch_id?: ID;
    id?: any;
    pin: string;
    threshold: number;
    wakeup_threshold?: number;
}
