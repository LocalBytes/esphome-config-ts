/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pipsolar.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pipsolar
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Pipsolar extends BaseComponent<PipsolarConfig> {
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

export class PipsolarSensor extends BaseComponent<PipsolarSensorConfig> {
    componentName: string = "pipsolar.sensor";
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

export class PipsolarBinarySensor extends BaseComponent<PipsolarBinarySensorConfig> {
    componentName: string = "pipsolar.binary_sensor";
}

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

export interface PipsolarBinarySensorConfigAddSbuPriorityVersion extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigConfigurationStatus extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigSccFirmwareVersion extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigLoadStatus extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigBatteryVoltageToSteadyWhileCharging extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigChargingStatus extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigSccChargingStatus extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigAcChargingStatus extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigChargingToFloatingMode extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigSwitchOn extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigDustproofInstalled extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigSilenceBuzzerOpenBuzzer extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigOverloadBypassFunction extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigLcdEscapeToDefault extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigOverloadRestartFunction extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigOverTemperatureRestartFunction extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigBacklightOn extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigAlarmOnWhenPrimarySourceInterrupt extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultCodeRecord extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigPowerSaving extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningsPresent extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultsPresent extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningPowerLoss extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultInverterFault extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultBusOver extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultBusUnder extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultBusSoftFail extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningLineFail extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultOpvshort extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultInverterVoltageTooLow extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultInverterVoltageTooHigh extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningOverTemperature extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningFanLock extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningBatteryVoltageHigh extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningBatteryLowAlarm extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningBatteryUnderShutdown extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningBatteryDerating extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningOverLoad extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningEepromFailed extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultInverterOverCurrent extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultInverterSoftFailed extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultSelfTestFailed extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultOpDcVoltageOver extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultBatteryOpen extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultCurrentSensorFailed extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultBatteryShort extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningPowerLimit extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningPvVoltageHigh extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultMpptOverload extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningMpptOverload extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningBatteryTooLowToCharge extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultDcDcOverCurrent extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigFaultCode extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarnungLowPvEnergy extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningHighAcInputDuringBusSoftStart extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export interface PipsolarBinarySensorConfigWarningBatteryEqualization extends BinarySensorBINARY_SENSOR_SCHEMA {
}

export class PipsolarOutput extends BaseComponent<PipsolarOutputConfig> {
    componentName: string = "pipsolar.output";
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

export class PipsolarSwitch extends BaseComponent<PipsolarSwitchConfig> {
    componentName: string = "pipsolar.switch";
}

export interface PipsolarSwitchPIPSWITCH_SCHEMA extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    restore_mode?: PipsolarSwitchPIPSWITCH_SCHEMARestoreMode;
    id?: ID;
    icon?: any;
}

export type PipsolarSwitchPIPSWITCH_SCHEMARestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface PipsolarSwitchConfig extends PipsolarPIPSOLAR_COMPONENT_SCHEMA {
    output_source_priority_utility?: PipsolarSwitchConfigOutputSourcePriorityUtility;
    output_source_priority_solar?: PipsolarSwitchConfigOutputSourcePrioritySolar;
    output_source_priority_battery?: PipsolarSwitchConfigOutputSourcePriorityBattery;
    input_voltage_range?: PipsolarSwitchConfigInputVoltageRange;
    pv_ok_condition_for_parallel?: PipsolarSwitchConfigPvOkConditionForParallel;
    pv_power_balance?: PipsolarSwitchConfigPvPowerBalance;
}

export interface PipsolarSwitchConfigOutputSourcePriorityUtility extends PipsolarSwitchPIPSWITCH_SCHEMA {
}

export interface PipsolarSwitchConfigOutputSourcePrioritySolar extends PipsolarSwitchPIPSWITCH_SCHEMA {
}

export interface PipsolarSwitchConfigOutputSourcePriorityBattery extends PipsolarSwitchPIPSWITCH_SCHEMA {
}

export interface PipsolarSwitchConfigInputVoltageRange extends PipsolarSwitchPIPSWITCH_SCHEMA {
}

export interface PipsolarSwitchConfigPvOkConditionForParallel extends PipsolarSwitchPIPSWITCH_SCHEMA {
}

export interface PipsolarSwitchConfigPvPowerBalance extends PipsolarSwitchPIPSWITCH_SCHEMA {
}

export class PipsolarTextSensor extends BaseComponent<PipsolarTextSensorConfig> {
    componentName: string = "pipsolar.text_sensor";
}

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

export interface PipsolarTextSensorConfigDeviceMode extends TextSensorTEXT_SENSOR_SCHEMA {
}

export interface PipsolarTextSensorConfigLastQpigs extends TextSensorTEXT_SENSOR_SCHEMA {
}

export interface PipsolarTextSensorConfigLastQpiri extends TextSensorTEXT_SENSOR_SCHEMA {
}

export interface PipsolarTextSensorConfigLastQmod extends TextSensorTEXT_SENSOR_SCHEMA {
}

export interface PipsolarTextSensorConfigLastQflag extends TextSensorTEXT_SENSOR_SCHEMA {
}

export interface PipsolarTextSensorConfigLastQpiws extends TextSensorTEXT_SENSOR_SCHEMA {
}

export interface PipsolarTextSensorConfigLastQt extends TextSensorTEXT_SENSOR_SCHEMA {
}

export interface PipsolarTextSensorConfigLastQmn extends TextSensorTEXT_SENSOR_SCHEMA {
}
