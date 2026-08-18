/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ufm01.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ufm01
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { UartUARTDEVICESCHEMA } from "./uart.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class Ufm01 extends EsphomeComponent<Ufm01Config> {
    componentName: string = "ufm01";
}

export type Ufm01Config = {
        id?: ID;
    } & UartUARTDEVICESCHEMA & CoreCOMPONENTSCHEMA;

export class Ufm01BinarySensor extends EsphomeComponent<Ufm01BinarySensorConfig> {
    componentName: string = "ufm01.binary_sensor";
}

export interface Ufm01BinarySensorConfigEmptyTube extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface Ufm01BinarySensorConfigFlowDirectionWrong extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface Ufm01BinarySensorConfigFlowRateOutOfRange extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface Ufm01BinarySensorConfigUfcChipError extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface Ufm01BinarySensorConfig {
    empty_tube?: Ufm01BinarySensorConfigEmptyTube;
    flow_direction_wrong?: Ufm01BinarySensorConfigFlowDirectionWrong;
    flow_rate_out_of_range?: Ufm01BinarySensorConfigFlowRateOutOfRange;
    ufc_chip_error?: Ufm01BinarySensorConfigUfcChipError;
    ufm01_id?: ID;
}

export class Ufm01Sensor extends EsphomeComponent<Ufm01SensorConfig> {
    componentName: string = "ufm01.sensor";
}

export interface Ufm01SensorConfigAccumulatedFlow extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ufm01SensorConfigFlow extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ufm01SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ufm01SensorConfig {
    accumulated_flow?: Ufm01SensorConfigAccumulatedFlow;
    flow?: Ufm01SensorConfigFlow;
    temperature?: Ufm01SensorConfigTemperature;
    ufm01_id?: ID;
}
