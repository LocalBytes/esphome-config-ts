/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: micronova.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/micronova
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Button_BUTTON_SCHEMA } from "./button.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Micronova extends EsphomeComponent<MicronovaConfig> {
    componentName: string = "micronova";
}

export interface MicronovaConfig {
    enable_rx_pin: Pin;
    id?: ID;
    uart_id?: ID;
}

export class MicronovaButton extends EsphomeComponent<MicronovaButtonConfig> {
    componentName: string = "micronova.button";
}

export interface MicronovaButtonConfigCustomButton extends Button_BUTTON_SCHEMA {
    id?: ID;
    memory_address: string;
    memory_data: string;
    memory_location: string;
    micronova_id?: ID;
}

export interface MicronovaButtonConfig {
    custom_button?: MicronovaButtonConfigCustomButton;
    micronova_id?: ID;
}

export class MicronovaNumber extends EsphomeComponent<MicronovaNumberConfig> {
    componentName: string = "micronova.number";
}

export type MicronovaNumberConfigPowerLevel = {
        icon?: any;
        id?: ID;
        memory_address?: any;
        memory_location?: any;
        micronova_id?: ID;
        update_interval?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type MicronovaNumberConfigThermostatTemperature = {
        device_class?: any;
        id?: ID;
        memory_address?: any;
        memory_location?: any;
        micronova_id?: ID;
        step?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface MicronovaNumberConfig {
    micronova_id?: ID;
    power_level?: MicronovaNumberConfigPowerLevel;
    thermostat_temperature?: MicronovaNumberConfigThermostatTemperature;
}

export class MicronovaSensor extends EsphomeComponent<MicronovaSensorConfig> {
    componentName: string = "micronova.sensor";
}

export type MicronovaSensorConfigFanSpeed = {
        fan_rpm_offset?: number;
        id?: any;
        memory_address?: any;
        memory_location?: any;
        micronova_id?: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type MicronovaSensorConfigFumesTemperature = {
        accuracy_decimals?: any;
        device_class?: any;
        id?: any;
        memory_address?: any;
        memory_location?: any;
        micronova_id?: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type MicronovaSensorConfigMemoryAddressSensor = {
        id?: any;
        memory_address: string;
        memory_location: string;
        micronova_id?: ID;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type MicronovaSensorConfigRoomTemperature = {
        accuracy_decimals?: any;
        device_class?: any;
        id?: any;
        memory_address?: any;
        memory_location?: any;
        micronova_id?: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type MicronovaSensorConfigStovePower = {
        accuracy_decimals?: any;
        id?: any;
        memory_address?: any;
        memory_location?: any;
        micronova_id?: ID;
        state_class?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type MicronovaSensorConfigWaterPressure = {
        accuracy_decimals?: any;
        device_class?: any;
        id?: any;
        memory_address?: any;
        memory_location?: any;
        micronova_id?: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type MicronovaSensorConfigWaterTemperature = {
        accuracy_decimals?: any;
        device_class?: any;
        id?: any;
        memory_address?: any;
        memory_location?: any;
        micronova_id?: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface MicronovaSensorConfig {
    fan_speed?: MicronovaSensorConfigFanSpeed;
    fumes_temperature?: MicronovaSensorConfigFumesTemperature;
    memory_address_sensor?: MicronovaSensorConfigMemoryAddressSensor;
    micronova_id?: ID;
    room_temperature?: MicronovaSensorConfigRoomTemperature;
    stove_power?: MicronovaSensorConfigStovePower;
    water_pressure?: MicronovaSensorConfigWaterPressure;
    water_temperature?: MicronovaSensorConfigWaterTemperature;
}

export class MicronovaSwitch extends EsphomeComponent<MicronovaSwitchConfig> {
    componentName: string = "micronova.switch";
}

export type MicronovaSwitchConfigStove = {
        icon?: any;
        id?: ID;
        memory_address?: any;
        memory_data_off?: any;
        memory_data_on?: any;
        memory_location?: any;
        micronova_id?: ID;
        update_interval?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface MicronovaSwitchConfig {
    micronova_id?: ID;
    stove?: MicronovaSwitchConfigStove;
}

export class MicronovaTextSensor extends EsphomeComponent<MicronovaTextSensorConfig> {
    componentName: string = "micronova.text_sensor";
}

export type MicronovaTextSensorConfigStoveState = {
        id?: any;
        memory_address?: any;
        memory_location?: any;
        micronova_id?: ID;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface MicronovaTextSensorConfig {
    micronova_id?: ID;
    stove_state?: MicronovaTextSensorConfigStoveState;
}
