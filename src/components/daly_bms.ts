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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class DalyBms extends EsphomeComponent<DalyBmsConfig> {
    componentName: string = "daly_bms";
}

export interface DalyBmsConfig extends CoreCOMPONENTSCHEMA {
    address?: number;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}

export class DalyBmsBinarySensor extends EsphomeComponent<DalyBmsBinarySensorConfig> {
    componentName: string = "daly_bms.binary_sensor";
}

export type DalyBmsBinarySensorConfigChargingMosEnabled = BinarySensorBINARYSENSORSCHEMA;
export type DalyBmsBinarySensorConfigDischargingMosEnabled = BinarySensorBINARYSENSORSCHEMA;

export interface DalyBmsBinarySensorConfig extends CoreCOMPONENTSCHEMA {
    bms_daly_id?: ID;
    charging_mos_enabled?: DalyBmsBinarySensorConfigChargingMosEnabled;
    discharging_mos_enabled?: DalyBmsBinarySensorConfigDischargingMosEnabled;
}

export class DalyBmsSensor extends EsphomeComponent<DalyBmsSensorConfig> {
    componentName: string = "daly_bms.sensor";
}

export interface DalyBmsSensorCELLVOLTAGESCHEMA extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type DalyBmsSensorConfigCell10Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell11Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell12Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell13Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell14Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell15Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell16Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell17Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell18Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell1Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell2Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell3Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell4Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell5Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell6Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell7Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell8Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;
export type DalyBmsSensorConfigCell9Voltage = DalyBmsSensorCELLVOLTAGESCHEMA;

export interface DalyBmsSensorConfigCellsNumber extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMaxCellVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMaxCellVoltageNumber extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigMaxTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMaxTemperatureProbeNumber extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigMinCellVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMinCellVoltageNumber extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigMinTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigMinTemperatureProbeNumber extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface DalyBmsSensorConfigRemainingCapacity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigTemperature1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigTemperature2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DalyBmsSensorConfig extends CoreCOMPONENTSCHEMA {
    battery_level?: DalyBmsSensorConfigBatteryLevel;
    bms_daly_id?: ID;
    cell_10_voltage?: DalyBmsSensorConfigCell10Voltage;
    cell_11_voltage?: DalyBmsSensorConfigCell11Voltage;
    cell_12_voltage?: DalyBmsSensorConfigCell12Voltage;
    cell_13_voltage?: DalyBmsSensorConfigCell13Voltage;
    cell_14_voltage?: DalyBmsSensorConfigCell14Voltage;
    cell_15_voltage?: DalyBmsSensorConfigCell15Voltage;
    cell_16_voltage?: DalyBmsSensorConfigCell16Voltage;
    cell_17_voltage?: DalyBmsSensorConfigCell17Voltage;
    cell_18_voltage?: DalyBmsSensorConfigCell18Voltage;
    cell_1_voltage?: DalyBmsSensorConfigCell1Voltage;
    cell_2_voltage?: DalyBmsSensorConfigCell2Voltage;
    cell_3_voltage?: DalyBmsSensorConfigCell3Voltage;
    cell_4_voltage?: DalyBmsSensorConfigCell4Voltage;
    cell_5_voltage?: DalyBmsSensorConfigCell5Voltage;
    cell_6_voltage?: DalyBmsSensorConfigCell6Voltage;
    cell_7_voltage?: DalyBmsSensorConfigCell7Voltage;
    cell_8_voltage?: DalyBmsSensorConfigCell8Voltage;
    cell_9_voltage?: DalyBmsSensorConfigCell9Voltage;
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
    temperature_1?: DalyBmsSensorConfigTemperature1;
    temperature_2?: DalyBmsSensorConfigTemperature2;
    voltage?: DalyBmsSensorConfigVoltage;
}

export class DalyBmsTextSensor extends EsphomeComponent<DalyBmsTextSensorConfig> {
    componentName: string = "daly_bms.text_sensor";
}

export interface DalyBmsTextSensorConfigStatus extends TextSensorTEXTSENSORSCHEMA {
    icon?: any;
}

export interface DalyBmsTextSensorConfig extends CoreCOMPONENTSCHEMA {
    bms_daly_id?: ID;
    status?: DalyBmsTextSensorConfigStatus;
}
