/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: uponor_smatrix.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/uponor_smatrix
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { UartUART_DEVICE_SCHEMA } from "./uart.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class UponorSmatrix extends EsphomeComponent<UponorSmatrixConfig> {
    componentName: string = "uponor_smatrix";
}

export type UponorSmatrixConfig = {
        id?: ID;
        time_device_address?: any;
        time_id?: ID;
        uart_id?: ID;
    } & CoreCOMPONENT_SCHEMA & UartUART_DEVICE_SCHEMA;

export interface UponorSmatrixUPONOR_SMATRIX_DEVICE_SCHEMA {
    address: string;
    uponor_smatrix_id?: ID;
}

export class UponorSmatrixClimate extends EsphomeComponent<UponorSmatrixClimateConfig> {
    componentName: string = "uponor_smatrix.climate";
}

export type UponorSmatrixClimateConfig = {
        id?: ID;
    } & Climate_CLIMATE_SCHEMA & UponorSmatrixUPONOR_SMATRIX_DEVICE_SCHEMA;

export class UponorSmatrixSensor extends EsphomeComponent<UponorSmatrixSensorConfig> {
    componentName: string = "uponor_smatrix.sensor";
}

export interface UponorSmatrixSensorConfigExternalTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UponorSmatrixSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UponorSmatrixSensorConfigTargetTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UponorSmatrixSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type UponorSmatrixSensorConfig = {
        external_temperature?: UponorSmatrixSensorConfigExternalTemperature;
        humidity?: UponorSmatrixSensorConfigHumidity;
        id?: ID;
        target_temperature?: UponorSmatrixSensorConfigTargetTemperature;
        temperature?: UponorSmatrixSensorConfigTemperature;
    } & CoreCOMPONENT_SCHEMA & UponorSmatrixUPONOR_SMATRIX_DEVICE_SCHEMA;
