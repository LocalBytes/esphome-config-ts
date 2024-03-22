/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tuya.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tuya
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { ClimateCLIMATE_SCHEMA } from "./climate.js";
import type { CoverCOVER_SCHEMA } from "./cover.js";
import type { FanFAN_SCHEMA } from "./fan.js";
import type { LightBRIGHTNESS_ONLY_LIGHT_SCHEMA } from "./light.js";
import type { NumberNUMBER_SCHEMA } from "./number.js";
import type { SelectSELECT_SCHEMA } from "./select.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Tuya extends BaseComponent<TuyaConfig> {
    componentName: string = "tuya";
}

export interface TuyaConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    time_id?: ID;
    ignore_mcu_update_on_datapoints?: number[];
    status_pin?: Pin;
    on_datapoint_update?: object[];
    uart_id?: ID;
}

export class TuyaSensor extends BaseComponent<TuyaSensorConfig> {
    componentName: string = "tuya.sensor";
}

export interface TuyaSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    tuya_id?: ID;
    sensor_datapoint: number;
}

export class TuyaBinarySensor extends BaseComponent<TuyaBinarySensorConfig> {
    componentName: string = "tuya.binary_sensor";
}

export interface TuyaBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    tuya_id?: ID;
    sensor_datapoint: number;
}

export class TuyaClimate extends BaseComponent<TuyaClimateConfig> {
    componentName: string = "tuya.climate";
}

export interface TuyaClimateConfig extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    tuya_id?: ID;
    supports_heat?: boolean;
    supports_cool?: boolean;
    switch_datapoint?: number;
    active_state_datapoint?: number;
    active_state_heating_value?: number;
    active_state_cooling_value?: number;
    heating_state_pin?: Pin;
    cooling_state_pin?: Pin;
    target_temperature_datapoint?: number;
    current_temperature_datapoint?: number;
    temperature_multiplier?: any;
    current_temperature_multiplier?: any;
    target_temperature_multiplier?: any;
    eco_datapoint?: number;
    eco_temperature?: any;
    reports_fahrenheit?: boolean;
}

export class TuyaCover extends BaseComponent<TuyaCoverConfig> {
    componentName: string = "tuya.cover";
}

export interface TuyaCoverConfig extends CoverCOVER_SCHEMA, CoreCOMPONENT_SCHEMA {
    output_id?: ID;
    tuya_id?: ID;
    control_datapoint?: number;
    direction_datapoint?: number;
    position_datapoint: number;
    position_report_datapoint?: number;
    min_value?: number;
    max_value?: number;
    invert_position?: boolean;
    restore_mode?: TuyaCoverConfigRestoreMode;
}

export type TuyaCoverConfigRestoreMode = 'NO_RESTORE' | 'RESTORE' | 'RESTORE_AND_CALL';

export class TuyaFan extends BaseComponent<TuyaFanConfig> {
    componentName: string = "tuya.fan";
}

export interface TuyaFanConfig extends FanFAN_SCHEMA, CoreCOMPONENT_SCHEMA {
    output_id?: ID;
    tuya_id?: ID;
    oscillation_datapoint?: number;
    speed_datapoint?: number;
    switch_datapoint?: number;
    direction_datapoint?: number;
    speed_count?: number;
}

export class TuyaLight extends BaseComponent<TuyaLightConfig> {
    componentName: string = "tuya.light";
}

export interface TuyaLightConfig extends LightBRIGHTNESS_ONLY_LIGHT_SCHEMA, CoreCOMPONENT_SCHEMA {
    output_id?: ID;
    tuya_id?: ID;
    dimmer_datapoint?: number;
    min_value_datapoint?: number;
    switch_datapoint?: number;
    color_datapoint?: number;
    color_type?: TuyaLightConfigColorType;
    color_interlock?: boolean;
    color_temperature_datapoint?: number;
    color_temperature_invert?: boolean;
    min_value?: number;
    max_value?: number;
    color_temperature_max_value?: number;
    cold_white_color_temperature?: any;
    warm_white_color_temperature?: any;
    gamma_correct?: any;
    default_transition_length?: any;
}

export type TuyaLightConfigColorType = 'RGB' | 'HSV' | 'RGBHSV';

export class TuyaNumber extends BaseComponent<TuyaNumberConfig> {
    componentName: string = "tuya.number";
}

export interface TuyaNumberConfig extends NumberNUMBER_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    tuya_id?: ID;
    number_datapoint: number;
    max_value: string;
    min_value: string;
    step: string;
}

export class TuyaSelect extends BaseComponent<TuyaSelectConfig> {
    componentName: string = "tuya.select";
}

export interface TuyaSelectConfig extends SelectSELECT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    tuya_id?: ID;
    enum_datapoint: number;
    options: string;
    optimistic?: boolean;
}

export class TuyaSwitch extends BaseComponent<TuyaSwitchConfig> {
    componentName: string = "tuya.switch";
}

export interface TuyaSwitchConfig extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    restore_mode?: TuyaSwitchConfigRestoreMode;
    id?: ID;
    tuya_id?: ID;
    switch_datapoint: number;
}

export type TuyaSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export class TuyaTextSensor extends BaseComponent<TuyaTextSensorConfig> {
    componentName: string = "tuya.text_sensor";
}

export interface TuyaTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    tuya_id?: ID;
    sensor_datapoint: number;
}
