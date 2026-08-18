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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Pipsolar extends EsphomeComponent<PipsolarConfig> {
    componentName: string = "pipsolar";
}

export interface PipsolarConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}

export interface PipsolarPIPSOLARCOMPONENTSCHEMA {
    pipsolar_id: ID;
}

export class PipsolarBinarySensor extends EsphomeComponent<PipsolarBinarySensorConfig> {
    componentName: string = "pipsolar.binary_sensor";
}

export type PipsolarBinarySensorConfigAcChargingStatus = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigAddSbuPriorityVersion = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigAlarmOnWhenPrimarySourceInterrupt = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigBacklightOn = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigBatteryVoltageToSteadyWhileCharging = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigChargingStatus = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigChargingToFloatingMode = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigConfigurationStatus = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigDustproofInstalled = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultBatteryOpen = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultBatteryShort = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultBusOver = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultBusSoftFail = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultBusUnder = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultCode = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultCodeRecord = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultCurrentSensorFailed = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultDcDcOverCurrent = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultInverterFault = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultInverterOverCurrent = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultInverterSoftFailed = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultInverterVoltageTooHigh = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultInverterVoltageTooLow = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultMpptOverload = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultOpDcVoltageOver = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultOpvshort = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultSelfTestFailed = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigFaultsPresent = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigLcdEscapeToDefault = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigLoadStatus = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigOverTemperatureRestartFunction = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigOverloadBypassFunction = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigOverloadRestartFunction = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigPowerSaving = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigSccChargingStatus = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigSccFirmwareVersion = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigSilenceBuzzerOpenBuzzer = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigSwitchOn = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryDerating = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryEqualization = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryLowAlarm = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryTooLowToCharge = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryUnderShutdown = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryVoltageHigh = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningEepromFailed = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningFanLock = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningHighAcInputDuringBusSoftStart = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningLineFail = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningLowPvEnergy = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningMpptOverload = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningOverLoad = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningOverTemperature = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningPowerLimit = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningPowerLoss = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningPvVoltageHigh = BinarySensorBINARYSENSORSCHEMA;
export type PipsolarBinarySensorConfigWarningsPresent = BinarySensorBINARYSENSORSCHEMA;

export interface PipsolarBinarySensorConfig extends PipsolarPIPSOLARCOMPONENTSCHEMA {
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

export interface PipsolarOutputConfigBatteryFloatVoltage extends OutputFLOATOUTPUTSCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryRechargeVoltage extends OutputFLOATOUTPUTSCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryRedischargeVoltage extends OutputFLOATOUTPUTSCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryType extends OutputFLOATOUTPUTSCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryUnderVoltage extends OutputFLOATOUTPUTSCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigChargerSourcePriority extends OutputFLOATOUTPUTSCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigCurrentMaxAcChargingCurrent extends OutputFLOATOUTPUTSCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigCurrentMaxChargingCurrent extends OutputFLOATOUTPUTSCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigOutputSourcePriority extends OutputFLOATOUTPUTSCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfig extends PipsolarPIPSOLARCOMPONENTSCHEMA {
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

export interface PipsolarSensorConfigAcOutputActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputApparentPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingApparentPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputRatingVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigAcOutputVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryBulkVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryCapacityPercent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryChargingCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryDischargeCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryFloatVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryRatingVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryRechargeVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryRedischargeVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigBatteryType extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigBatteryUnderVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryVoltageOffsetForFansOn extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBatteryVoltageScc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigBusVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigChargerSourcePriority extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigCurrentMaxAcChargingCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigCurrentMaxChargingCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigEepromVersion extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigGridFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigGridRatingCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigGridRatingVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigGridVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigInputVoltageRange extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigInverterHeatSinkTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigMachineType extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigOutputLoadPercent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigOutputMode extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigOutputSourcePriority extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigParallelMaxNum extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigPvChargingPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigPvInputCurrentForBattery extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigPvInputVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PipsolarSensorConfigPvOkConditionForParallel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigPvPowerBalance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigTopology extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfig extends PipsolarPIPSOLARCOMPONENTSCHEMA {
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

export type PipsolarSwitchConfigInputVoltageRange = PipsolarSwitchPIPSWITCHSCHEMA;
export type PipsolarSwitchConfigOutputSourcePriorityBattery = PipsolarSwitchPIPSWITCHSCHEMA;
export type PipsolarSwitchConfigOutputSourcePriorityHybrid = PipsolarSwitchPIPSWITCHSCHEMA;
export type PipsolarSwitchConfigOutputSourcePrioritySolar = PipsolarSwitchPIPSWITCHSCHEMA;
export type PipsolarSwitchConfigOutputSourcePriorityUtility = PipsolarSwitchPIPSWITCHSCHEMA;
export type PipsolarSwitchConfigPvOkConditionForParallel = PipsolarSwitchPIPSWITCHSCHEMA;
export type PipsolarSwitchConfigPvPowerBalance = PipsolarSwitchPIPSWITCHSCHEMA;

export interface PipsolarSwitchConfig extends PipsolarPIPSOLARCOMPONENTSCHEMA {
    input_voltage_range?: PipsolarSwitchConfigInputVoltageRange;
    output_source_priority_battery?: PipsolarSwitchConfigOutputSourcePriorityBattery;
    output_source_priority_hybrid?: PipsolarSwitchConfigOutputSourcePriorityHybrid;
    output_source_priority_solar?: PipsolarSwitchConfigOutputSourcePrioritySolar;
    output_source_priority_utility?: PipsolarSwitchConfigOutputSourcePriorityUtility;
    pv_ok_condition_for_parallel?: PipsolarSwitchConfigPvOkConditionForParallel;
    pv_power_balance?: PipsolarSwitchConfigPvPowerBalance;
}

export type PipsolarSwitchPIPSWITCHSCHEMA = {
        icon?: any;
        id?: ID;
    } & SwitchSWITCHSCHEMA & CoreCOMPONENTSCHEMA;

export class PipsolarTextSensor extends EsphomeComponent<PipsolarTextSensorConfig> {
    componentName: string = "pipsolar.text_sensor";
}

export type PipsolarTextSensorConfigDeviceMode = TextSensorTEXTSENSORSCHEMA;
export type PipsolarTextSensorConfigLastQflag = TextSensorTEXTSENSORSCHEMA;
export type PipsolarTextSensorConfigLastQmn = TextSensorTEXTSENSORSCHEMA;
export type PipsolarTextSensorConfigLastQmod = TextSensorTEXTSENSORSCHEMA;
export type PipsolarTextSensorConfigLastQpigs = TextSensorTEXTSENSORSCHEMA;
export type PipsolarTextSensorConfigLastQpiri = TextSensorTEXTSENSORSCHEMA;
export type PipsolarTextSensorConfigLastQpiws = TextSensorTEXTSENSORSCHEMA;
export type PipsolarTextSensorConfigLastQt = TextSensorTEXTSENSORSCHEMA;

export interface PipsolarTextSensorConfig extends PipsolarPIPSOLARCOMPONENTSCHEMA {
    device_mode?: PipsolarTextSensorConfigDeviceMode;
    last_qflag?: PipsolarTextSensorConfigLastQflag;
    last_qmn?: PipsolarTextSensorConfigLastQmn;
    last_qmod?: PipsolarTextSensorConfigLastQmod;
    last_qpigs?: PipsolarTextSensorConfigLastQpigs;
    last_qpiri?: PipsolarTextSensorConfigLastQpiri;
    last_qpiws?: PipsolarTextSensorConfigLastQpiws;
    last_qt?: PipsolarTextSensorConfigLastQt;
}
