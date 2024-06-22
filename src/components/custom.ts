/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: custom.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/custom
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { ClimateCLIMATE_SCHEMA } from "./climate.js";
import type { CoverCOVER_SCHEMA } from "./cover.js";
import type { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";
import type { OutputBINARY_OUTPUT_SCHEMA, OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class CustomSensor extends EsphomeComponent<CustomSensorConfig> {
    componentName: string = "custom.sensor";
}

export type CustomSensorConfigSensors = SensorSENSOR_SCHEMA;

export interface CustomSensorConfig {
    id?: ID;
    lambda: string;
    sensors: CustomSensorConfigSensors[];
}

export class CustomBinarySensor extends EsphomeComponent<CustomBinarySensorConfig> {
    componentName: string = "custom.binary_sensor";
}

export type CustomBinarySensorConfigBinarySensors = BinarySensorBINARY_SENSOR_SCHEMA;

export interface CustomBinarySensorConfig {
    id?: ID;
    lambda: string;
    binary_sensors: CustomBinarySensorConfigBinarySensors[];
}

export class CustomClimate extends EsphomeComponent<CustomClimateConfig> {
    componentName: string = "custom.climate";
}

export type CustomClimateConfigClimates = ClimateCLIMATE_SCHEMA;

export interface CustomClimateConfig {
    id?: ID;
    lambda: string;
    climates: CustomClimateConfigClimates[];
}

export class CustomCover extends EsphomeComponent<CustomCoverConfig> {
    componentName: string = "custom.cover";
}

export type CustomCoverConfigCovers = CoverCOVER_SCHEMA;

export interface CustomCoverConfig {
    id?: ID;
    lambda: string;
    covers: CustomCoverConfigCovers[];
}

export class CustomLight extends EsphomeComponent<CustomLightConfig> {
    componentName: string = "custom.light";
}

export type CustomLightConfigLights = LightADDRESSABLE_LIGHT_SCHEMA;

export interface CustomLightConfig {
    id?: ID;
    lambda: string;
    lights: CustomLightConfigLights[];
}

export class CustomOutput extends EsphomeComponent<CustomOutputConfig> {
    componentName: string = "custom.output";
}

export type CustomOutputConfig = CustomOutputConfigBinary | CustomOutputConfigFloat;

export interface CustomOutputConfigBinaryOutputs extends OutputBINARY_OUTPUT_SCHEMA {
    id?: ID;
}

export interface CustomOutputConfigBinary {
    type: "binary" | "BINARY";
    id?: ID;
    lambda: string;
    outputs: CustomOutputConfigBinaryOutputs[];
}

export interface CustomOutputConfigFloatOutputs extends OutputFLOAT_OUTPUT_SCHEMA {
    id?: ID;
}

export interface CustomOutputConfigFloat {
    type: "float" | "FLOAT";
    id?: ID;
    lambda: string;
    outputs: CustomOutputConfigFloatOutputs[];
}

export class CustomSwitch extends EsphomeComponent<CustomSwitchConfig> {
    componentName: string = "custom.switch";
}

export type CustomSwitchConfigSwitchesRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface CustomSwitchConfigSwitches extends Switch_SWITCH_SCHEMA {
    restore_mode?: CustomSwitchConfigSwitchesRestoreMode;
    id?: ID;
}

export interface CustomSwitchConfig {
    id?: ID;
    lambda: string;
    switches: CustomSwitchConfigSwitches[];
}

export class CustomTextSensor extends EsphomeComponent<CustomTextSensorConfig> {
    componentName: string = "custom.text_sensor";
}

export type CustomTextSensorConfigTextSensors = TextSensorTEXT_SENSOR_SCHEMA;

export interface CustomTextSensorConfig {
    id?: ID;
    lambda: string;
    text_sensors: CustomTextSensorConfigTextSensors[];
}
