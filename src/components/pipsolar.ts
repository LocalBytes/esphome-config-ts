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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Pipsolar extends EsphomeComponent<PipsolarConfig> {
    componentName: string = "pipsolar";
}

export interface PipsolarConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    update_interval?: any;
    uart_id?: ID;
}

export interface PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    pipsolar_id: ID;
}

export class PipsolarSensor extends EsphomeComponent<PipsolarSensorConfig> {
    componentName: string = "pipsolar.sensor";
}

export interface PipsolarSensorConfigGridRatingVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigGridRatingCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigAcOutputRatingVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigAcOutputRatingFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigAcOutputRatingCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigAcOutputRatingApparentPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigAcOutputRatingActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryRatingVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryRechargeVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryUnderVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryBulkVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryFloatVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryType extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigCurrentMaxAcChargingCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigCurrentMaxChargingCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigInputVoltageRange extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigOutputSourcePriority extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigChargerSourcePriority extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigParallelMaxNum extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigMachineType extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigTopology extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigOutputMode extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigBatteryRedischargeVoltage extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigPvOkConditionForParallel extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigPvPowerBalance extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigGridVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigGridFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigAcOutputVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigAcOutputFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigAcOutputApparentPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigAcOutputActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigOutputLoadPercent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigBusVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryChargingCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryCapacityPercent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigInverterHeatSinkTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigPvInputCurrentForBattery extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigPvInputVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryVoltageScc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryDischargeCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigBatteryVoltageOffsetForFansOn extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfigEepromVersion extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface PipsolarSensorConfigPvChargingPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface PipsolarSensorConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    grid_rating_voltage?: PipsolarSensorConfigGridRatingVoltage;
    grid_rating_current?: PipsolarSensorConfigGridRatingCurrent;
    ac_output_rating_voltage?: PipsolarSensorConfigAcOutputRatingVoltage;
    ac_output_rating_frequency?: PipsolarSensorConfigAcOutputRatingFrequency;
    ac_output_rating_current?: PipsolarSensorConfigAcOutputRatingCurrent;
    ac_output_rating_apparent_power?: PipsolarSensorConfigAcOutputRatingApparentPower;
    ac_output_rating_active_power?: PipsolarSensorConfigAcOutputRatingActivePower;
    battery_rating_voltage?: PipsolarSensorConfigBatteryRatingVoltage;
    battery_recharge_voltage?: PipsolarSensorConfigBatteryRechargeVoltage;
    battery_under_voltage?: PipsolarSensorConfigBatteryUnderVoltage;
    battery_bulk_voltage?: PipsolarSensorConfigBatteryBulkVoltage;
    battery_float_voltage?: PipsolarSensorConfigBatteryFloatVoltage;
    battery_type?: PipsolarSensorConfigBatteryType;
    current_max_ac_charging_current?: PipsolarSensorConfigCurrentMaxAcChargingCurrent;
    current_max_charging_current?: PipsolarSensorConfigCurrentMaxChargingCurrent;
    input_voltage_range?: PipsolarSensorConfigInputVoltageRange;
    output_source_priority?: PipsolarSensorConfigOutputSourcePriority;
    charger_source_priority?: PipsolarSensorConfigChargerSourcePriority;
    parallel_max_num?: PipsolarSensorConfigParallelMaxNum;
    machine_type?: PipsolarSensorConfigMachineType;
    topology?: PipsolarSensorConfigTopology;
    output_mode?: PipsolarSensorConfigOutputMode;
    battery_redischarge_voltage?: PipsolarSensorConfigBatteryRedischargeVoltage;
    pv_ok_condition_for_parallel?: PipsolarSensorConfigPvOkConditionForParallel;
    pv_power_balance?: PipsolarSensorConfigPvPowerBalance;
    grid_voltage?: PipsolarSensorConfigGridVoltage;
    grid_frequency?: PipsolarSensorConfigGridFrequency;
    ac_output_voltage?: PipsolarSensorConfigAcOutputVoltage;
    ac_output_frequency?: PipsolarSensorConfigAcOutputFrequency;
    ac_output_apparent_power?: PipsolarSensorConfigAcOutputApparentPower;
    ac_output_active_power?: PipsolarSensorConfigAcOutputActivePower;
    output_load_percent?: PipsolarSensorConfigOutputLoadPercent;
    bus_voltage?: PipsolarSensorConfigBusVoltage;
    battery_voltage?: PipsolarSensorConfigBatteryVoltage;
    battery_charging_current?: PipsolarSensorConfigBatteryChargingCurrent;
    battery_capacity_percent?: PipsolarSensorConfigBatteryCapacityPercent;
    inverter_heat_sink_temperature?: PipsolarSensorConfigInverterHeatSinkTemperature;
    pv_input_current_for_battery?: PipsolarSensorConfigPvInputCurrentForBattery;
    pv_input_voltage?: PipsolarSensorConfigPvInputVoltage;
    battery_voltage_scc?: PipsolarSensorConfigBatteryVoltageScc;
    battery_discharge_current?: PipsolarSensorConfigBatteryDischargeCurrent;
    battery_voltage_offset_for_fans_on?: PipsolarSensorConfigBatteryVoltageOffsetForFansOn;
    eeprom_version?: PipsolarSensorConfigEepromVersion;
    pv_charging_power?: PipsolarSensorConfigPvChargingPower;
}

export class PipsolarBinarySensor extends EsphomeComponent<PipsolarBinarySensorConfig> {
    componentName: string = "pipsolar.binary_sensor";
}

export type PipsolarBinarySensorConfigAddSbuPriorityVersion = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigConfigurationStatus = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigSccFirmwareVersion = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigLoadStatus = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigBatteryVoltageToSteadyWhileCharging = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigChargingStatus = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigSccChargingStatus = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigAcChargingStatus = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigChargingToFloatingMode = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigSwitchOn = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigDustproofInstalled = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigSilenceBuzzerOpenBuzzer = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigOverloadBypassFunction = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigLcdEscapeToDefault = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigOverloadRestartFunction = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigOverTemperatureRestartFunction = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigBacklightOn = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigAlarmOnWhenPrimarySourceInterrupt = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultCodeRecord = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigPowerSaving = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningsPresent = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultsPresent = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningPowerLoss = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterFault = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBusOver = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBusUnder = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBusSoftFail = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningLineFail = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultOpvshort = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterVoltageTooLow = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterVoltageTooHigh = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningOverTemperature = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningFanLock = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryVoltageHigh = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryLowAlarm = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryUnderShutdown = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryDerating = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningOverLoad = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningEepromFailed = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterOverCurrent = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultInverterSoftFailed = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultSelfTestFailed = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultOpDcVoltageOver = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBatteryOpen = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultCurrentSensorFailed = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultBatteryShort = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningPowerLimit = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningPvVoltageHigh = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultMpptOverload = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningMpptOverload = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryTooLowToCharge = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultDcDcOverCurrent = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigFaultCode = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarnungLowPvEnergy = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningHighAcInputDuringBusSoftStart = BinarySensorBINARY_SENSOR_SCHEMA;
export type PipsolarBinarySensorConfigWarningBatteryEqualization = BinarySensorBINARY_SENSOR_SCHEMA;

export interface PipsolarBinarySensorConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    add_sbu_priority_version?: PipsolarBinarySensorConfigAddSbuPriorityVersion;
    configuration_status?: PipsolarBinarySensorConfigConfigurationStatus;
    scc_firmware_version?: PipsolarBinarySensorConfigSccFirmwareVersion;
    load_status?: PipsolarBinarySensorConfigLoadStatus;
    battery_voltage_to_steady_while_charging?: PipsolarBinarySensorConfigBatteryVoltageToSteadyWhileCharging;
    charging_status?: PipsolarBinarySensorConfigChargingStatus;
    scc_charging_status?: PipsolarBinarySensorConfigSccChargingStatus;
    ac_charging_status?: PipsolarBinarySensorConfigAcChargingStatus;
    charging_to_floating_mode?: PipsolarBinarySensorConfigChargingToFloatingMode;
    switch_on?: PipsolarBinarySensorConfigSwitchOn;
    dustproof_installed?: PipsolarBinarySensorConfigDustproofInstalled;
    silence_buzzer_open_buzzer?: PipsolarBinarySensorConfigSilenceBuzzerOpenBuzzer;
    overload_bypass_function?: PipsolarBinarySensorConfigOverloadBypassFunction;
    lcd_escape_to_default?: PipsolarBinarySensorConfigLcdEscapeToDefault;
    overload_restart_function?: PipsolarBinarySensorConfigOverloadRestartFunction;
    over_temperature_restart_function?: PipsolarBinarySensorConfigOverTemperatureRestartFunction;
    backlight_on?: PipsolarBinarySensorConfigBacklightOn;
    alarm_on_when_primary_source_interrupt?: PipsolarBinarySensorConfigAlarmOnWhenPrimarySourceInterrupt;
    fault_code_record?: PipsolarBinarySensorConfigFaultCodeRecord;
    power_saving?: PipsolarBinarySensorConfigPowerSaving;
    warnings_present?: PipsolarBinarySensorConfigWarningsPresent;
    faults_present?: PipsolarBinarySensorConfigFaultsPresent;
    warning_power_loss?: PipsolarBinarySensorConfigWarningPowerLoss;
    fault_inverter_fault?: PipsolarBinarySensorConfigFaultInverterFault;
    fault_bus_over?: PipsolarBinarySensorConfigFaultBusOver;
    fault_bus_under?: PipsolarBinarySensorConfigFaultBusUnder;
    fault_bus_soft_fail?: PipsolarBinarySensorConfigFaultBusSoftFail;
    warning_line_fail?: PipsolarBinarySensorConfigWarningLineFail;
    fault_opvshort?: PipsolarBinarySensorConfigFaultOpvshort;
    fault_inverter_voltage_too_low?: PipsolarBinarySensorConfigFaultInverterVoltageTooLow;
    fault_inverter_voltage_too_high?: PipsolarBinarySensorConfigFaultInverterVoltageTooHigh;
    warning_over_temperature?: PipsolarBinarySensorConfigWarningOverTemperature;
    warning_fan_lock?: PipsolarBinarySensorConfigWarningFanLock;
    warning_battery_voltage_high?: PipsolarBinarySensorConfigWarningBatteryVoltageHigh;
    warning_battery_low_alarm?: PipsolarBinarySensorConfigWarningBatteryLowAlarm;
    warning_battery_under_shutdown?: PipsolarBinarySensorConfigWarningBatteryUnderShutdown;
    warning_battery_derating?: PipsolarBinarySensorConfigWarningBatteryDerating;
    warning_over_load?: PipsolarBinarySensorConfigWarningOverLoad;
    warning_eeprom_failed?: PipsolarBinarySensorConfigWarningEepromFailed;
    fault_inverter_over_current?: PipsolarBinarySensorConfigFaultInverterOverCurrent;
    fault_inverter_soft_failed?: PipsolarBinarySensorConfigFaultInverterSoftFailed;
    fault_self_test_failed?: PipsolarBinarySensorConfigFaultSelfTestFailed;
    fault_op_dc_voltage_over?: PipsolarBinarySensorConfigFaultOpDcVoltageOver;
    fault_battery_open?: PipsolarBinarySensorConfigFaultBatteryOpen;
    fault_current_sensor_failed?: PipsolarBinarySensorConfigFaultCurrentSensorFailed;
    fault_battery_short?: PipsolarBinarySensorConfigFaultBatteryShort;
    warning_power_limit?: PipsolarBinarySensorConfigWarningPowerLimit;
    warning_pv_voltage_high?: PipsolarBinarySensorConfigWarningPvVoltageHigh;
    fault_mppt_overload?: PipsolarBinarySensorConfigFaultMpptOverload;
    warning_mppt_overload?: PipsolarBinarySensorConfigWarningMpptOverload;
    warning_battery_too_low_to_charge?: PipsolarBinarySensorConfigWarningBatteryTooLowToCharge;
    fault_dc_dc_over_current?: PipsolarBinarySensorConfigFaultDcDcOverCurrent;
    fault_code?: PipsolarBinarySensorConfigFaultCode;
    warnung_low_pv_energy?: PipsolarBinarySensorConfigWarnungLowPvEnergy;
    warning_high_ac_input_during_bus_soft_start?: PipsolarBinarySensorConfigWarningHighAcInputDuringBusSoftStart;
    warning_battery_equalization?: PipsolarBinarySensorConfigWarningBatteryEqualization;
}

export class PipsolarOutput extends EsphomeComponent<PipsolarOutputConfig> {
    componentName: string = "pipsolar.output";
}

export interface PipsolarOutputConfigBatteryRechargeVoltage extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryUnderVoltage extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryFloatVoltage extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryType extends OutputFLOAT_OUTPUT_SCHEMA {
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

export interface PipsolarOutputConfigChargerSourcePriority extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfigBatteryRedischargeVoltage extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    possible_values?: any[];
}

export interface PipsolarOutputConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    battery_recharge_voltage?: PipsolarOutputConfigBatteryRechargeVoltage;
    battery_under_voltage?: PipsolarOutputConfigBatteryUnderVoltage;
    battery_float_voltage?: PipsolarOutputConfigBatteryFloatVoltage;
    battery_type?: PipsolarOutputConfigBatteryType;
    current_max_ac_charging_current?: PipsolarOutputConfigCurrentMaxAcChargingCurrent;
    current_max_charging_current?: PipsolarOutputConfigCurrentMaxChargingCurrent;
    output_source_priority?: PipsolarOutputConfigOutputSourcePriority;
    charger_source_priority?: PipsolarOutputConfigChargerSourcePriority;
    battery_redischarge_voltage?: PipsolarOutputConfigBatteryRedischargeVoltage;
}

export class PipsolarSwitch extends EsphomeComponent<PipsolarSwitchConfig> {
    componentName: string = "pipsolar.switch";
}

export type PipsolarSwitchPIPSWITCH_SCHEMARestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type PipsolarSwitchPIPSWITCH_SCHEMA = {
        restore_mode?: PipsolarSwitchPIPSWITCH_SCHEMARestoreMode;
        id?: ID;
        icon?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
export type PipsolarSwitchConfigOutputSourcePriorityUtility = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigOutputSourcePrioritySolar = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigOutputSourcePriorityBattery = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigInputVoltageRange = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigPvOkConditionForParallel = PipsolarSwitchPIPSWITCH_SCHEMA;
export type PipsolarSwitchConfigPvPowerBalance = PipsolarSwitchPIPSWITCH_SCHEMA;

export interface PipsolarSwitchConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    output_source_priority_utility?: PipsolarSwitchConfigOutputSourcePriorityUtility;
    output_source_priority_solar?: PipsolarSwitchConfigOutputSourcePrioritySolar;
    output_source_priority_battery?: PipsolarSwitchConfigOutputSourcePriorityBattery;
    input_voltage_range?: PipsolarSwitchConfigInputVoltageRange;
    pv_ok_condition_for_parallel?: PipsolarSwitchConfigPvOkConditionForParallel;
    pv_power_balance?: PipsolarSwitchConfigPvPowerBalance;
}

export class PipsolarTextSensor extends EsphomeComponent<PipsolarTextSensorConfig> {
    componentName: string = "pipsolar.text_sensor";
}

export type PipsolarTextSensorConfigDeviceMode = TextSensorTEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQpigs = TextSensorTEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQpiri = TextSensorTEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQmod = TextSensorTEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQflag = TextSensorTEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQpiws = TextSensorTEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQt = TextSensorTEXT_SENSOR_SCHEMA;
export type PipsolarTextSensorConfigLastQmn = TextSensorTEXT_SENSOR_SCHEMA;

export interface PipsolarTextSensorConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    device_mode?: PipsolarTextSensorConfigDeviceMode;
    last_qpigs?: PipsolarTextSensorConfigLastQpigs;
    last_qpiri?: PipsolarTextSensorConfigLastQpiri;
    last_qmod?: PipsolarTextSensorConfigLastQmod;
    last_qflag?: PipsolarTextSensorConfigLastQflag;
    last_qpiws?: PipsolarTextSensorConfigLastQpiws;
    last_qt?: PipsolarTextSensorConfigLastQt;
    last_qmn?: PipsolarTextSensorConfigLastQmn;
}
