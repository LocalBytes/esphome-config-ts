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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { UartUARTDEVICESCHEMA } from "./uart.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class UponorSmatrix extends EsphomeComponent<UponorSmatrixConfig> {
    componentName: string = "uponor_smatrix";
}

export type UponorSmatrixConfig = {
        id?: ID;
        time_device_address?: any;
        time_id?: ID;
        uart_id?: ID;
    } & CoreCOMPONENTSCHEMA & UartUARTDEVICESCHEMA;

export interface UponorSmatrixUPONORSMATRIXDEVICESCHEMA {
    address: string;
    uponor_smatrix_id?: ID;
}

export class UponorSmatrixClimate extends EsphomeComponent<UponorSmatrixClimateConfig> {
    componentName: string = "uponor_smatrix.climate";
}

export type UponorSmatrixClimateConfig = {
        id?: ID;
    } & ClimateCLIMATESCHEMA & UponorSmatrixUPONORSMATRIXDEVICESCHEMA;

export class UponorSmatrixSensor extends EsphomeComponent<UponorSmatrixSensorConfig> {
    componentName: string = "uponor_smatrix.sensor";
}

export interface UponorSmatrixSensorConfigExternalTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UponorSmatrixSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UponorSmatrixSensorConfigTargetTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UponorSmatrixSensorConfigTemperature extends SensorSENSORSCHEMA {
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
    } & CoreCOMPONENTSCHEMA & UponorSmatrixUPONORSMATRIXDEVICESCHEMA;
