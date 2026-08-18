/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sound_level.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sound_level
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export abstract class SoundLevel extends EsphomeComponent {
    componentName: string = "sound_level";
}

export class SoundLevelSensor extends EsphomeComponent<SoundLevelSensorConfig> {
    componentName: string = "sound_level.sensor";
}

export type SoundLevelSensorConfigMeasurementDuration = CorePositiveTimePeriodMilliseconds;

export interface SoundLevelSensorConfigMicrophone {
    bits_per_sample?: number;
    channels?: number[];
    gain_factor?: number;
    id?: ID;
    microphone?: ID;
}

export interface SoundLevelSensorConfigPeak extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SoundLevelSensorConfigRms extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SoundLevelSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    measurement_duration?: SoundLevelSensorConfigMeasurementDuration;
    microphone?: SoundLevelSensorConfigMicrophone;
    passive: boolean;
    peak?: SoundLevelSensorConfigPeak;
    rms?: SoundLevelSensorConfigRms;
}

export interface SoundLevelSensorSOUND_LEVEL_ACTION_SCHEMA {
    id?: ID;
}
