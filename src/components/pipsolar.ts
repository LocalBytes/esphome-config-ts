/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pipsolar.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pipsolar
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Pipsolar extends EsphomeComponent<PipsolarConfig> {
    componentName: string = "pipsolar";
}

export interface PipsolarConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}

export interface PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    pipsolar_id: ID;
}

export class PipsolarBinarySensor extends EsphomeComponent<PipsolarBinarySensorConfig> {
    componentName: string = "pipsolar.binary_sensor";
}

export type PipsolarBinarySensorConfigAcChargingStatus = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigAddSbuPriorityVersion = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigAlarmOnWhenPrimarySourceInterrupt = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigBacklightOn = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigBatteryVoltageToSteadyWhileCharging = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigChargingStatus = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigChargingToFloatingMode = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigConfigurationStatus = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigDustproofInstalled = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBatteryOpen = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBatteryShort = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBusOver = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBusSoftFail = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBusUnder = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultCode = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultCodeRecord = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultCurrentSensorFailed = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultDcDcOverCurrent = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterFault = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterOverCurrent = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterSoftFailed = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterVoltageTooHigh = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterVoltageTooLow = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultMpptOverload = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultOpDcVoltageOver = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultOpvshort = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultSelfTestFailed = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultsPresent = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigLcdEscapeToDefault = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigLoadStatus = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigOverTemperatureRestartFunction = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigOverloadBypassFunction = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigOverloadRestartFunction = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigPowerSaving = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigSccChargingStatus = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigSccFirmwareVersion = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigSilenceBuzzerOpenBuzzer = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigSwitchOn = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryDerating = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryEqualization = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryLowAlarm = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryTooLowToCharge = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryUnderShutdown = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryVoltageHigh = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningEepromFailed = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningFanLock = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningHighAcInputDuringBusSoftStart = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningLineFail = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningLowPvEnergy = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningMpptOverload = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningOverLoad = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningOverTemperature = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningPowerLimit = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningPowerLoss = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningPvVoltageHigh = BinarySensor_BINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningsPresent = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface PipsolarBinarySensorConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    ac_charging_status?: PipsolarBinarySensorConfigAcChargingStatus;
    add_sbu_priority_version?: PipsolarBinarySensorConfigAddSbuPriorityVersion;
    alarm_on_when_primary_source_interrupt?: PipsolarBinarySensorConfigAlarmOnWhenPrimarySourceInterrupt;
    backlight_on?: PipsolarBinarySensorConfigBacklightOn;
    battery_voltage_to_steady_while_charging?: PipsolarBinarySensorConfigBatteryVoltageToSteadyWhileCharging;
    charging_status?: PipsolarBinarySensorConfigChargingStatus;
    charging_to_floating_mode?: PipsolarBinarySensorConfigChargingToFloatingMode;
    configuration_status?: PipsolarBinarySensorConfigConfigurationStatus;
    dustproof_installed?: PipsolarBinarySensorConfigDustproofInstalled;
    fault_battery_open?: PipsolarBinarySensorConfigFaultBatteryOpen;
    fault_battery_short?: PipsolarBinarySensorConfigFaultBatteryShort;
    fault_bus_over?: PipsolarBinarySensorConfigFaultBusOver;
    fault_bus_soft_fail?: PipsolarBinarySensorConfigFaultBusSoftFail;
    fault_bus_under?: PipsolarBinarySensorConfigFaultBusUnder;
    fault_code?: PipsolarBinarySensorConfigFaultCode;
    fault_code_record?: PipsolarBinarySensorConfigFaultCodeRecord;
    fault_current_sensor_failed?: PipsolarBinarySensorConfigFaultCurrentSensorFailed;
    fault_dc_dc_over_current?: PipsolarBinarySensorConfigFaultDcDcOverCurrent;
    fault_inverter_fault?: PipsolarBinarySensorConfigFaultInverterFault;
    fault_inverter_over_current?: PipsolarBinarySensorConfigFaultInverterOverCurrent;
    fault_inverter_soft_failed?: PipsolarBinarySensorConfigFaultInverterSoftFailed;
    fault_inverter_voltage_too_high?: PipsolarBinarySensorConfigFaultInverterVoltageTooHigh;
    fault_inverter_voltage_too_low?: PipsolarBinarySensorConfigFaultInverterVoltageTooLow;
    fault_mppt_overload?: PipsolarBinarySensorConfigFaultMpptOverload;
    fault_op_dc_voltage_over?: PipsolarBinarySensorConfigFaultOpDcVoltageOver;
    fault_opvshort?: PipsolarBinarySensorConfigFaultOpvshort;
    fault_self_test_failed?: PipsolarBinarySensorConfigFaultSelfTestFailed;
    faults_present?: PipsolarBinarySensorConfigFaultsPresent;
    lcd_escape_to_default?: PipsolarBinarySensorConfigLcdEscapeToDefault;
    load_status?: PipsolarBinarySensorConfigLoadStatus;
    over_temperature_restart_function?: PipsolarBinarySensorConfigOverTemperatureRestartFunction;
    overload_bypass_function?: PipsolarBinarySensorConfigOverloadBypassFunction;
    overload_restart_function?: PipsolarBinarySensorConfigOverloadRestartFunction;
    power_saving?: PipsolarBinarySensorConfigPowerSaving;
    scc_charging_status?: PipsolarBinarySensorConfigSccChargingStatus;
    scc_firmware_version?: PipsolarBinarySensorConfigSccFirmwareVersion;
    silence_buzzer_open_buzzer?: PipsolarBinarySensorConfigSilenceBuzzerOpenBuzzer;
    switch_on?: PipsolarBinarySensorConfigSwitchOn;
    warning_battery_derating?: PipsolarBinarySensorConfigWarningBatteryDerating;
    warning_battery_equalization?: PipsolarBinarySensorConfigWarningBatteryEqualization;
    warning_battery_low_alarm?: PipsolarBinarySensorConfigWarningBatteryLowAlarm;
    warning_battery_too_low_to_charge?: PipsolarBinarySensorConfigWarningBatteryTooLowToCharge;
    warning_battery_under_shutdown?: PipsolarBinarySensorConfigWarningBatteryUnderShutdown;
    warning_battery_voltage_high?: PipsolarBinarySensorConfigWarningBatteryVoltageHigh;
    warning_eeprom_failed?: PipsolarBinarySensorConfigWarningEepromFailed;
    warning_fan_lock?: PipsolarBinarySensorConfigWarningFanLock;
    warning_high_ac_input_during_bus_soft_start?: PipsolarBinarySensorConfigWarningHighAcInputDuringBusSoftStart;
    warning_line_fail?: PipsolarBinarySensorConfigWarningLineFail;
    warning_low_pv_energy?: PipsolarBinarySensorConfigWarningLowPvEnergy;
    warning_mppt_overload?: PipsolarBinarySensorConfigWarningMpptOverload;
    warning_over_load?: PipsolarBinarySensorConfigWarningOverLoad;
    warning_over_temperature?: PipsolarBinarySensorConfigWarningOverTemperature;
    warning_power_limit?: PipsolarBinarySensorConfigWarningPowerLimit;
    warning_power_loss?: PipsolarBinarySensorConfigWarningPowerLoss;
    warning_pv_voltage_high?: PipsolarBinarySensorConfigWarningPvVoltageHigh;
    warnings_present?: PipsolarBinarySensorConfigWarningsPresent;
}

export class PipsolarOutput extends EsphomeComponent<PipsolarOutputConfig> {
    componentName: string = "pipsolar.output";
}

export interface PipsolarOutputConfigBatteryFloatVoltage extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryRechargeVoltage extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryRedischargeVoltage extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryType extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryUnderVoltage extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigChargerSourcePriority extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigCurrentMaxAcChargingCurrent extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigCurrentMaxChargingCurrent extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigOutputSourcePriority extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    battery_float_voltage?: PipsolarOutputConfigBatteryFloatVoltage;
    battery_recharge_voltage?: PipsolarOutputConfigBatteryRechargeVoltage;
    battery_redischarge_voltage?: PipsolarOutputConfigBatteryRedischargeVoltage;
    battery_type?: PipsolarOutputConfigBatteryType;
    battery_under_voltage?: PipsolarOutputConfigBatteryUnderVoltage;
    charger_source_priority?: PipsolarOutputConfigChargerSourcePriority;
    current_max_ac_charging_current?: PipsolarOutputConfigCurrentMaxAcChargingCurrent;
    current_max_charging_current?: PipsolarOutputConfigCurrentMaxChargingCurrent;
    output_source_priority?: PipsolarOutputConfigOutputSourcePriority;
}

export class PipsolarSensor extends EsphomeComponent<PipsolarSensorConfig> {
    componentName: string = "pipsolar.sensor";
}

export interface PipsolarSensorConfigAcOutputActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputApparentPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingApparentPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryBulkVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryCapacityPercent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryChargingCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryDischargeCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryFloatVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryRatingVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryRechargeVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryRedischargeVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigBatteryType extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigBatteryUnderVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryVoltageOffsetForFansOn extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryVoltageScc extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBusVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigChargerSourcePriority extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigCurrentMaxAcChargingCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigCurrentMaxChargingCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigEepromVersion extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigGridFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigGridRatingCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigGridRatingVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigGridVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigInputVoltageRange extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigInverterHeatSinkTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigMachineType extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigOutputLoadPercent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigOutputMode extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigOutputSourcePriority extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigParallelMaxNum extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigPvChargingPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigPvInputCurrentForBattery extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigPvInputVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigPvOkConditionForParallel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigPvPowerBalance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigTopology extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    ac_output_active_power?: PipsolarSensorConfigAcOutputActivePower;
    ac_output_apparent_power?: PipsolarSensorConfigAcOutputApparentPower;
    ac_output_frequency?: PipsolarSensorConfigAcOutputFrequency;
    ac_output_rating_active_power?: PipsolarSensorConfigAcOutputRatingActivePower;
    ac_output_rating_apparent_power?: PipsolarSensorConfigAcOutputRatingApparentPower;
    ac_output_rating_current?: PipsolarSensorConfigAcOutputRatingCurrent;
    ac_output_rating_frequency?: PipsolarSensorConfigAcOutputRatingFrequency;
    ac_output_rating_voltage?: PipsolarSensorConfigAcOutputRatingVoltage;
    ac_output_voltage?: PipsolarSensorConfigAcOutputVoltage;
    battery_bulk_voltage?: PipsolarSensorConfigBatteryBulkVoltage;
    battery_capacity_percent?: PipsolarSensorConfigBatteryCapacityPercent;
    battery_charging_current?: PipsolarSensorConfigBatteryChargingCurrent;
    battery_discharge_current?: PipsolarSensorConfigBatteryDischargeCurrent;
    battery_float_voltage?: PipsolarSensorConfigBatteryFloatVoltage;
    battery_rating_voltage?: PipsolarSensorConfigBatteryRatingVoltage;
    battery_recharge_voltage?: PipsolarSensorConfigBatteryRechargeVoltage;
    battery_redischarge_voltage?: PipsolarSensorConfigBatteryRedischargeVoltage;
    battery_type?: PipsolarSensorConfigBatteryType;
    battery_under_voltage?: PipsolarSensorConfigBatteryUnderVoltage;
    battery_voltage?: PipsolarSensorConfigBatteryVoltage;
    battery_voltage_offset_for_fans_on?: PipsolarSensorConfigBatteryVoltageOffsetForFansOn;
    battery_voltage_scc?: PipsolarSensorConfigBatteryVoltageScc;
    bus_voltage?: PipsolarSensorConfigBusVoltage;
    charger_source_priority?: PipsolarSensorConfigChargerSourcePriority;
    current_max_ac_charging_current?: PipsolarSensorConfigCurrentMaxAcChargingCurrent;
    current_max_charging_current?: PipsolarSensorConfigCurrentMaxChargingCurrent;
    eeprom_version?: PipsolarSensorConfigEepromVersion;
    grid_frequency?: PipsolarSensorConfigGridFrequency;
    grid_rating_current?: PipsolarSensorConfigGridRatingCurrent;
    grid_rating_voltage?: PipsolarSensorConfigGridRatingVoltage;
    grid_voltage?: PipsolarSensorConfigGridVoltage;
    input_voltage_range?: PipsolarSensorConfigInputVoltageRange;
    inverter_heat_sink_temperature?: PipsolarSensorConfigInverterHeatSinkTemperature;
    machine_type?: PipsolarSensorConfigMachineType;
    output_load_percent?: PipsolarSensorConfigOutputLoadPercent;
    output_mode?: PipsolarSensorConfigOutputMode;
    output_source_priority?: PipsolarSensorConfigOutputSourcePriority;
    parallel_max_num?: PipsolarSensorConfigParallelMaxNum;
    pv_charging_power?: PipsolarSensorConfigPvChargingPower;
    pv_input_current_for_battery?: PipsolarSensorConfigPvInputCurrentForBattery;
    pv_input_voltage?: PipsolarSensorConfigPvInputVoltage;
    pv_ok_condition_for_parallel?: PipsolarSensorConfigPvOkConditionForParallel;
    pv_power_balance?: PipsolarSensorConfigPvPowerBalance;
    topology?: PipsolarSensorConfigTopology;
}

export class PipsolarSwitch extends EsphomeComponent<PipsolarSwitchConfig> {
    componentName: string = "pipsolar.switch";
}

export type PipsolarSwitchConfigInputVoltageRange = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigOutputSourcePriorityBattery = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigOutputSourcePriorityHybrid = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigOutputSourcePrioritySolar = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigOutputSourcePriorityUtility = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigPvOkConditionForParallel = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigPvPowerBalance = PipsolarSwitchPIPSWITCH_SCHEMA;

export interface PipsolarSwitchConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    input_voltage_range?: PipsolarSwitchConfigInputVoltageRange;
    output_source_priority_battery?: PipsolarSwitchConfigOutputSourcePriorityBattery;
    output_source_priority_hybrid?: PipsolarSwitchConfigOutputSourcePriorityHybrid;
    output_source_priority_solar?: PipsolarSwitchConfigOutputSourcePrioritySolar;
    output_source_priority_utility?: PipsolarSwitchConfigOutputSourcePriorityUtility;
    pv_ok_condition_for_parallel?: PipsolarSwitchConfigPvOkConditionForParallel;
    pv_power_balance?: PipsolarSwitchConfigPvPowerBalance;
}

export type PipsolarSwitchPIPSWITCH_SCHEMA = {
        icon?: any;
        id?: ID;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;

export class PipsolarTextSensor extends EsphomeComponent<PipsolarTextSensorConfig> {
    componentName: string = "pipsolar.text_sensor";
}

export type PipsolarTextSensorConfigDeviceMode = TextSensor_TEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQflag = TextSensor_TEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQmn = TextSensor_TEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQmod = TextSensor_TEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQpigs = TextSensor_TEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQpiri = TextSensor_TEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQpiws = TextSensor_TEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQt = TextSensor_TEXT_SENSOR_SCHEMA;

export interface PipsolarTextSensorConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    device_mode?: PipsolarTextSensorConfigDeviceMode;
    last_qflag?: PipsolarTextSensorConfigLastQflag;
    last_qmn?: PipsolarTextSensorConfigLastQmn;
    last_qmod?: PipsolarTextSensorConfigLastQmod;
    last_qpigs?: PipsolarTextSensorConfigLastQpigs;
    last_qpiri?: PipsolarTextSensorConfigLastQpiri;
    last_qpiws?: PipsolarTextSensorConfigLastQpiws;
    last_qt?: PipsolarTextSensorConfigLastQt;
}
