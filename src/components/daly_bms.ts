/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: daly_bms.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/daly_bms
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class DalyBms extends EsphomeComponent<DalyBmsConfig> {
    componentName: string = "daly_bms";
}

export interface DalyBmsConfig extends CoreCOMPONENT_SCHEMA {
    address?: number;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}

export class DalyBmsBinarySensor extends EsphomeComponent<DalyBmsBinarySensorConfig> {
    componentName: string = "daly_bms.binary_sensor";
}

export type DalyBmsBinarySensorConfigChargingMosEnabled = BinarySensor_BINARY_SENSOR_SCHEMA;
export type DalyBmsBinarySensorConfigDischargingMosEnabled = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface DalyBmsBinarySensorConfig extends CoreCOMPONENT_SCHEMA {
    bms_daly_id?: ID;
    charging_mos_enabled?: DalyBmsBinarySensorConfigChargingMosEnabled;
    discharging_mos_enabled?: DalyBmsBinarySensorConfigDischargingMosEnabled;
}

export class DalyBmsSensor extends EsphomeComponent<DalyBmsSensorConfig> {
    componentName: string = "daly_bms.sensor";
}

export interface DalyBmsSensorCELL_VOLTAGE_SCHEMA extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type DalyBmsSensorConfigCell_10Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_11Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_12Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_13Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_14Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_15Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_16Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_17Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_18Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_1Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_2Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_3Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_4Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_5Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_6Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_7Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_8Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;
export type DalyBmsSensorConfigCell_9Voltage = DalyBmsSensorCELL_VOLTAGE_SCHEMA;

export interface DalyBmsSensorConfigCellsNumber extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMaxCellVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMaxCellVoltageNumber extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigMaxTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMaxTemperatureProbeNumber extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigMinCellVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMinCellVoltageNumber extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigMinTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMinTemperatureProbeNumber extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigRemainingCapacity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigTemperature_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigTemperature_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfig extends CoreCOMPONENT_SCHEMA {
    battery_level?: DalyBmsSensorConfigBatteryLevel;
    bms_daly_id?: ID;
    cell_10_voltage?: DalyBmsSensorConfigCell_10Voltage;
    cell_11_voltage?: DalyBmsSensorConfigCell_11Voltage;
    cell_12_voltage?: DalyBmsSensorConfigCell_12Voltage;
    cell_13_voltage?: DalyBmsSensorConfigCell_13Voltage;
    cell_14_voltage?: DalyBmsSensorConfigCell_14Voltage;
    cell_15_voltage?: DalyBmsSensorConfigCell_15Voltage;
    cell_16_voltage?: DalyBmsSensorConfigCell_16Voltage;
    cell_17_voltage?: DalyBmsSensorConfigCell_17Voltage;
    cell_18_voltage?: DalyBmsSensorConfigCell_18Voltage;
    cell_1_voltage?: DalyBmsSensorConfigCell_1Voltage;
    cell_2_voltage?: DalyBmsSensorConfigCell_2Voltage;
    cell_3_voltage?: DalyBmsSensorConfigCell_3Voltage;
    cell_4_voltage?: DalyBmsSensorConfigCell_4Voltage;
    cell_5_voltage?: DalyBmsSensorConfigCell_5Voltage;
    cell_6_voltage?: DalyBmsSensorConfigCell_6Voltage;
    cell_7_voltage?: DalyBmsSensorConfigCell_7Voltage;
    cell_8_voltage?: DalyBmsSensorConfigCell_8Voltage;
    cell_9_voltage?: DalyBmsSensorConfigCell_9Voltage;
    cells_number?: DalyBmsSensorConfigCellsNumber;
    current?: DalyBmsSensorConfigCurrent;
    max_cell_voltage?: DalyBmsSensorConfigMaxCellVoltage;
    max_cell_voltage_number?: DalyBmsSensorConfigMaxCellVoltageNumber;
    max_temperature?: DalyBmsSensorConfigMaxTemperature;
    max_temperature_probe_number?: DalyBmsSensorConfigMaxTemperatureProbeNumber;
    min_cell_voltage?: DalyBmsSensorConfigMinCellVoltage;
    min_cell_voltage_number?: DalyBmsSensorConfigMinCellVoltageNumber;
    min_temperature?: DalyBmsSensorConfigMinTemperature;
    min_temperature_probe_number?: DalyBmsSensorConfigMinTemperatureProbeNumber;
    remaining_capacity?: DalyBmsSensorConfigRemainingCapacity;
    temperature_1?: DalyBmsSensorConfigTemperature_1;
    temperature_2?: DalyBmsSensorConfigTemperature_2;
    voltage?: DalyBmsSensorConfigVoltage;
}

export class DalyBmsTextSensor extends EsphomeComponent<DalyBmsTextSensorConfig> {
    componentName: string = "daly_bms.text_sensor";
}

export interface DalyBmsTextSensorConfigStatus extends TextSensor_TEXT_SENSOR_SCHEMA {
    icon?: any;
}

export interface DalyBmsTextSensorConfig extends CoreCOMPONENT_SCHEMA {
    bms_daly_id?: ID;
    status?: DalyBmsTextSensorConfigStatus;
}
