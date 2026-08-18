/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tuya.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tuya
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";
import type { Cover_COVER_SCHEMA } from "./cover.js";
import type { Fan_FAN_SCHEMA } from "./fan.js";
import type { LightBRIGHTNESS_ONLY_LIGHT_SCHEMA } from "./light.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { Select_SELECT_SCHEMA } from "./select.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Tuya extends EsphomeComponent<TuyaConfig> {
    componentName: string = "tuya";
}

export interface TuyaConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    ignore_mcu_update_on_datapoints?: number[];
    on_datapoint_update?: object[];
    status_pin?: Pin;
    time_id?: ID;
    uart_id?: ID;
}

export class TuyaBinarySensor extends EsphomeComponent<TuyaBinarySensorConfig> {
    componentName: string = "tuya.binary_sensor";
}

export type TuyaBinarySensorConfig = {
        id?: any;
        sensor_datapoint: number;
        tuya_id?: ID;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TuyaClimate extends EsphomeComponent<TuyaClimateConfig> {
    componentName: string = "tuya.climate";
}

export interface TuyaClimateConfigActiveState {
    cooling_value?: number;
    datapoint: number;
    drying_value?: number;
    fanonly_value?: number;
    heating_value?: number;
}

export interface TuyaClimateConfigFanMode {
    auto_value?: number;
    datapoint: number;
    high_value?: number;
    low_value?: number;
    medium_value?: number;
    middle_value?: number;
}

export interface TuyaClimateConfigPresetEco {
    datapoint: number;
    temperature?: any;
}

export interface TuyaClimateConfigPresetSleep {
    datapoint: number;
}

export interface TuyaClimateConfigPreset {
    eco?: TuyaClimateConfigPresetEco;
    sleep?: TuyaClimateConfigPresetSleep;
}

export interface TuyaClimateConfigSwingMode {
    horizontal_datapoint?: number;
    vertical_datapoint?: number;
}

export type TuyaClimateConfig = {
        active_state?: TuyaClimateConfigActiveState;
        cooling_state_pin?: Pin;
        current_temperature_datapoint?: number;
        current_temperature_multiplier?: any;
        fan_mode?: TuyaClimateConfigFanMode;
        heating_state_pin?: Pin;
        id?: ID;
        preset?: TuyaClimateConfigPreset;
        reports_fahrenheit?: boolean;
        supports_cool?: boolean;
        supports_heat?: boolean;
        swing_mode?: TuyaClimateConfigSwingMode;
        switch_datapoint?: number;
        target_temperature_datapoint?: number;
        target_temperature_multiplier?: any;
        temperature_multiplier?: any;
        tuya_id?: ID;
    } & Climate_CLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TuyaCover extends EsphomeComponent<TuyaCoverConfig> {
    componentName: string = "tuya.cover";
}

export type TuyaCoverConfigRestoreMode = 'NO_RESTORE' | 'RESTORE' | 'RESTORE_AND_CALL';
export type TuyaCoverConfig = {
        control_datapoint?: number;
        direction_datapoint?: number;
        id?: ID;
        invert_position?: boolean;
        invert_position_report?: boolean;
        max_value?: number;
        min_value?: number;
        position_datapoint: number;
        position_report_datapoint?: number;
        restore_mode?: TuyaCoverConfigRestoreMode;
        tuya_id?: ID;
    } & Cover_COVER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TuyaFan extends EsphomeComponent<TuyaFanConfig> {
    componentName: string = "tuya.fan";
}

export type TuyaFanConfig = {
        direction_datapoint?: number;
        id?: ID;
        oscillation_datapoint?: number;
        speed_count?: number;
        speed_datapoint?: number;
        switch_datapoint?: number;
        tuya_id?: ID;
    } & Fan_FAN_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TuyaLight extends EsphomeComponent<TuyaLightConfig> {
    componentName: string = "tuya.light";
}

export type TuyaLightConfigColorType = 'RGB' | 'HSV' | 'RGBHSV';
export type TuyaLightConfig = {
        cold_white_color_temperature?: any;
        color_datapoint?: number;
        color_interlock?: boolean;
        color_temperature_datapoint?: number;
        color_temperature_invert?: boolean;
        color_temperature_max_value?: number;
        color_type?: TuyaLightConfigColorType;
        color_type_lowercase?: boolean;
        default_transition_length?: any;
        dimmer_datapoint?: number;
        gamma_correct?: any;
        max_value?: number;
        min_value?: number;
        min_value_datapoint?: number;
        output_id?: ID;
        switch_datapoint?: number;
        tuya_id?: ID;
        warm_white_color_temperature?: any;
    } & LightBRIGHTNESS_ONLY_LIGHT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TuyaNumber extends EsphomeComponent<TuyaNumberConfig> {
    componentName: string = "tuya.number";
}

export type TuyaNumberConfigDatapointHiddenDatapointType = 'int' | 'uint' | 'enum';

export interface TuyaNumberConfigDatapointHidden {
    datapoint_type: TuyaNumberConfigDatapointHiddenDatapointType;
    initial_value?: any;
    restore_value?: boolean;
}

export type TuyaNumberConfig = {
        datapoint_hidden?: TuyaNumberConfigDatapointHidden;
        id?: ID;
        max_value: string;
        min_value: string;
        multiply?: any;
        number_datapoint: number;
        step: string;
        tuya_id?: ID;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TuyaSelect extends EsphomeComponent<TuyaSelectConfig> {
    componentName: string = "tuya.select";
}

export type TuyaSelectConfig = {
        enum_datapoint?: number;
        id?: any;
        int_datapoint?: number;
        optimistic?: boolean;
        options: string;
        tuya_id?: ID;
    } & Select_SELECT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TuyaSensor extends EsphomeComponent<TuyaSensorConfig> {
    componentName: string = "tuya.sensor";
}

export type TuyaSensorConfig = {
        id?: any;
        sensor_datapoint: number;
        tuya_id?: ID;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TuyaSwitch extends EsphomeComponent<TuyaSwitchConfig> {
    componentName: string = "tuya.switch";
}

export type TuyaSwitchConfig = {
        id?: ID;
        switch_datapoint: number;
        tuya_id?: ID;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TuyaTextSensor extends EsphomeComponent<TuyaTextSensorConfig> {
    componentName: string = "tuya.text_sensor";
}

export type TuyaTextSensorConfig = {
        id?: any;
        sensor_datapoint: number;
        tuya_id?: ID;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
