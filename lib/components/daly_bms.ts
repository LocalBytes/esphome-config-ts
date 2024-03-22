/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: daly_bms.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/daly_bms
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class DalyBms extends BaseComponent<DalyBmsConfig> {
    componentName: string = "daly_bms";
}

export interface DalyBmsConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    address?: number;
    uart_id?: ID;
    update_interval?: any;
}

export class DalyBmsSensor extends BaseComponent<DalyBmsSensorConfig> {
    componentName: string = "daly_bms.sensor";
}

export interface DalyBmsSensorCELL_VOLTAGE_SCHEMA extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfig extends CoreCOMPONENT_SCHEMA {
    bms_daly_id?: ID;
    voltage?: DalyBmsSensorConfigVoltage;
    current?: DalyBmsSensorConfigCurrent;
    battery_level?: DalyBmsSensorConfigBatteryLevel;
    max_cell_voltage?: DalyBmsSensorConfigMaxCellVoltage;
    max_cell_voltage_number?: DalyBmsSensorConfigMaxCellVoltageNumber;
    min_cell_voltage?: DalyBmsSensorConfigMinCellVoltage;
    min_cell_voltage_number?: DalyBmsSensorConfigMinCellVoltageNumber;
    max_temperature?: DalyBmsSensorConfigMaxTemperature;
    max_temperature_probe_number?: DalyBmsSensorConfigMaxTemperatureProbeNumber;
    min_temperature?: DalyBmsSensorConfigMinTemperature;
    min_temperature_probe_number?: DalyBmsSensorConfigMinTemperatureProbeNumber;
    remaining_capacity?: DalyBmsSensorConfigRemainingCapacity;
    cells_number?: DalyBmsSensorConfigCellsNumber;
    temperature_1?: DalyBmsSensorConfigTemperature_1;
    temperature_2?: DalyBmsSensorConfigTemperature_2;
    cell_1_voltage?: DalyBmsSensorConfigCell_1Voltage;
    cell_2_voltage?: DalyBmsSensorConfigCell_2Voltage;
    cell_3_voltage?: DalyBmsSensorConfigCell_3Voltage;
    cell_4_voltage?: DalyBmsSensorConfigCell_4Voltage;
    cell_5_voltage?: DalyBmsSensorConfigCell_5Voltage;
    cell_6_voltage?: DalyBmsSensorConfigCell_6Voltage;
    cell_7_voltage?: DalyBmsSensorConfigCell_7Voltage;
    cell_8_voltage?: DalyBmsSensorConfigCell_8Voltage;
    cell_9_voltage?: DalyBmsSensorConfigCell_9Voltage;
    cell_10_voltage?: DalyBmsSensorConfigCell_10Voltage;
    cell_11_voltage?: DalyBmsSensorConfigCell_11Voltage;
    cell_12_voltage?: DalyBmsSensorConfigCell_12Voltage;
    cell_13_voltage?: DalyBmsSensorConfigCell_13Voltage;
    cell_14_voltage?: DalyBmsSensorConfigCell_14Voltage;
    cell_15_voltage?: DalyBmsSensorConfigCell_15Voltage;
    cell_16_voltage?: DalyBmsSensorConfigCell_16Voltage;
}

export interface DalyBmsSensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigMaxCellVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigMaxCellVoltageNumber extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
}

export interface DalyBmsSensorConfigMinCellVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigMinCellVoltageNumber extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
}

export interface DalyBmsSensorConfigMaxTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigMaxTemperatureProbeNumber extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
}

export interface DalyBmsSensorConfigMinTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigMinTemperatureProbeNumber extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
}

export interface DalyBmsSensorConfigRemainingCapacity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigCellsNumber extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
}

export interface DalyBmsSensorConfigTemperature_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigTemperature_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DalyBmsSensorConfigCell_1Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_2Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_3Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_4Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_5Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_6Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_7Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_8Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_9Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_10Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_11Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_12Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_13Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_14Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_15Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export interface DalyBmsSensorConfigCell_16Voltage extends DalyBmsSensorCELL_VOLTAGE_SCHEMA {
}

export class DalyBmsBinarySensor extends BaseComponent<DalyBmsBinarySensorConfig> {
    componentName: string = "daly_bms.binary_sensor";
}

export interface DalyBmsBinarySensorConfig extends CoreCOMPONENT_SCHEMA {
    bms_daly_id?: ID;
    charging_mos_enabled?: DalyBmsBinarySensorConfigChargingMosEnabled;
    discharging_mos_enabled?: DalyBmsBinarySensorConfigDischargingMosEnabled;
}

export interface DalyBmsBinarySensorConfigChargingMosEnabled extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface DalyBmsBinarySensorConfigDischargingMosEnabled extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export class DalyBmsTextSensor extends BaseComponent<DalyBmsTextSensorConfig> {
    componentName: string = "daly_bms.text_sensor";
}

export interface DalyBmsTextSensorConfig extends CoreCOMPONENT_SCHEMA {
    bms_daly_id?: ID;
    status?: DalyBmsTextSensorConfigStatus;
}

export interface DalyBmsTextSensorConfigStatus extends TextSensorTEXT_SENSOR_SCHEMA {
    icon?: any;
}
