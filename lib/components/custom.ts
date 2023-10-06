/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: custom.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/custom
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { ClimateCLIMATE_SCHEMA } from "./climate.js";
import { CoverCOVER_SCHEMA } from "./cover.js";
import { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";
import { OutputBINARY_OUTPUT_SCHEMA, OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import { Switch_SWITCH_SCHEMA } from "./switch.js";
import { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class CustomSensor extends BaseComponent<CustomSensorConfig> {
    componentName: string = "custom.sensor";
}

export interface CustomSensorConfig {
    id?: ID;
    lambda: string;
    sensors: CustomSensorConfigSensors[];
}

export interface CustomSensorConfigSensors extends SensorSENSOR_SCHEMA {
}

export class CustomBinarySensor extends BaseComponent<CustomBinarySensorConfig> {
    componentName: string = "custom.binary_sensor";
}

export interface CustomBinarySensorConfig {
    id?: ID;
    lambda: string;
    binary_sensors: CustomBinarySensorConfigBinarySensors[];
}

export interface CustomBinarySensorConfigBinarySensors extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export class CustomClimate extends BaseComponent<CustomClimateConfig> {
    componentName: string = "custom.climate";
}

export interface CustomClimateConfig {
    id?: ID;
    lambda: string;
    climates: CustomClimateConfigClimates[];
}

export interface CustomClimateConfigClimates extends ClimateCLIMATE_SCHEMA {
}

export class CustomCover extends BaseComponent<CustomCoverConfig> {
    componentName: string = "custom.cover";
}

export interface CustomCoverConfig {
    id?: ID;
    lambda: string;
    covers: CustomCoverConfigCovers[];
}

export interface CustomCoverConfigCovers extends CoverCOVER_SCHEMA {
}

export class CustomLight extends BaseComponent<CustomLightConfig> {
    componentName: string = "custom.light";
}

export interface CustomLightConfig {
    id?: ID;
    lambda: string;
    lights: CustomLightConfigLights[];
}

export interface CustomLightConfigLights extends LightADDRESSABLE_LIGHT_SCHEMA {
}

export class CustomOutput extends BaseComponent<CustomOutputConfig> {
    componentName: string = "custom.output";
}

export type CustomOutputConfig = CustomOutputConfigBinary | CustomOutputConfigFloat;

export interface CustomOutputConfigBinary {
    type: "binary" | "BINARY";
    id?: ID;
    lambda: string;
    outputs: CustomOutputConfigBinaryOutputs[];
}

export interface CustomOutputConfigBinaryOutputs extends OutputBINARY_OUTPUT_SCHEMA {
    id?: ID;
}

export interface CustomOutputConfigFloat {
    type: "float" | "FLOAT";
    id?: ID;
    lambda: string;
    outputs: CustomOutputConfigFloatOutputs[];
}

export interface CustomOutputConfigFloatOutputs extends OutputFLOAT_OUTPUT_SCHEMA {
    id?: ID;
}

export class CustomSwitch extends BaseComponent<CustomSwitchConfig> {
    componentName: string = "custom.switch";
}

export interface CustomSwitchConfig {
    id?: ID;
    lambda: string;
    switches: CustomSwitchConfigSwitches[];
}

export interface CustomSwitchConfigSwitches extends Switch_SWITCH_SCHEMA {
    restore_mode?: CustomSwitchConfigSwitchesRestoreMode;
    id?: ID;
}

export type CustomSwitchConfigSwitchesRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export class CustomTextSensor extends BaseComponent<CustomTextSensorConfig> {
    componentName: string = "custom.text_sensor";
}

export interface CustomTextSensorConfig {
    id?: ID;
    lambda: string;
    text_sensors: CustomTextSensorConfigTextSensors[];
}

export interface CustomTextSensorConfigTextSensors extends TextSensorTEXT_SENSOR_SCHEMA {
}
