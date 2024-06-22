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
import type { CoreTimePeriodDict, CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Esp32Touch extends EsphomeComponent<Esp32TouchConfig> {
    componentName: string = "esp32_touch";
}

export type Esp32TouchConfigSleepDuration = CoreTimePeriodDict;
export type Esp32TouchConfigMeasurementDuration = CoreTimePeriodDict;
export type Esp32TouchConfigIirFilter = CorePositiveTimePeriodMilliseconds;
export type Esp32TouchConfigFilterMode = 'IIR_4' | 'IIR_8' | 'IIR_16' | 'IIR_32' | 'IIR_64' | 'IIR_128' | 'IIR_256' | 'JITTER';
export type Esp32TouchConfigSmoothMode = 'OFF' | 'IIR_2' | 'IIR_4' | 'IIR_8';
export type Esp32TouchConfigDenoiseGrade = 'BIT12' | 'BIT10' | 'BIT8' | 'BIT4';
export type Esp32TouchConfigDenoiseCapLevel = 'L0' | 'L1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6' | 'L7';
export type Esp32TouchConfigWaterproofShieldDriver = 'L0' | 'L1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6' | 'L7';

export interface Esp32TouchConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    setup_mode?: boolean;
    sleep_duration?: Esp32TouchConfigSleepDuration;
    measurement_duration?: Esp32TouchConfigMeasurementDuration;
    low_voltage_reference?: any;
    high_voltage_reference?: any;
    voltage_attenuation?: any;
    iir_filter?: Esp32TouchConfigIirFilter;
    debounce_count?: number;
    filter_mode?: Esp32TouchConfigFilterMode;
    noise_threshold?: number;
    jitter_step?: number;
    smooth_mode?: Esp32TouchConfigSmoothMode;
    denoise_grade?: Esp32TouchConfigDenoiseGrade;
    denoise_cap_level?: Esp32TouchConfigDenoiseCapLevel;
    waterproof_guard_ring?: any;
    waterproof_shield_driver?: Esp32TouchConfigWaterproofShieldDriver;
}

export class Esp32TouchBinarySensor extends EsphomeComponent<Esp32TouchBinarySensorConfig> {
    componentName: string = "esp32_touch.binary_sensor";
}

export interface Esp32TouchBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    esp32_touch_id?: ID;
    pin: string;
    threshold: number;
    wakeup_threshold?: number;
}
