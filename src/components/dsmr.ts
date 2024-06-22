/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: dsmr.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dsmr
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Dsmr extends EsphomeComponent<DsmrConfig> {
    componentName: string = "dsmr";
}

export type DsmrConfigRequestInterval = CorePositiveTimePeriodMilliseconds;
export type DsmrConfigReceiveTimeout = CorePositiveTimePeriodMilliseconds;

export interface DsmrConfig {
    id?: ID;
    decryption_key?: any;
    crc_check?: boolean;
    gas_mbus_id?: number;
    water_mbus_id?: number;
    max_telegram_length?: number;
    request_pin?: Pin;
    request_interval?: DsmrConfigRequestInterval;
    receive_timeout?: DsmrConfigReceiveTimeout;
    uart_id?: ID;
}

export class DsmrSensor extends EsphomeComponent<DsmrSensorConfig> {
    componentName: string = "dsmr.sensor";
}

export interface DsmrSensorConfigEnergyDeliveredLux extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigEnergyReturnedLux extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigTotalImportedEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigTotalExportedEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigPowerDelivered extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerReturned extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigReactivePowerDelivered extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigReactivePowerReturned extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigElectricityThreshold extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigElectricitySwitchPosition extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigElectricityFailures extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigElectricityLongFailures extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigElectricitySagsL1 extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigElectricitySagsL2 extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigElectricitySagsL3 extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigElectricitySwellsL1 extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigElectricitySwellsL2 extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigElectricitySwellsL3 extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
}

export interface DsmrSensorConfigCurrentL1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigCurrentL2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigCurrentL3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerDeliveredL1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerDeliveredL2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerDeliveredL3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerReturnedL1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerReturnedL2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerReturnedL3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigReactivePowerDeliveredL1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigReactivePowerDeliveredL2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigReactivePowerDeliveredL3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigReactivePowerReturnedL1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigReactivePowerReturnedL2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigReactivePowerReturnedL3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigVoltageL1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigVoltageL2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigVoltageL3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigGasDelivered extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigGasDeliveredBe extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigWaterDelivered extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigActiveEnergyImportCurrentAverageDemand extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigActiveEnergyImportMaximumDemandRunningMonth extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigActiveEnergyImportMaximumDemandLast_13Months extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfig extends CoreCOMPONENT_SCHEMA {
    dsmr_id?: ID;
    energy_delivered_lux?: DsmrSensorConfigEnergyDeliveredLux;
    energy_delivered_tariff1?: DsmrSensorConfigEnergyDeliveredTariff1;
    energy_delivered_tariff2?: DsmrSensorConfigEnergyDeliveredTariff2;
    energy_returned_lux?: DsmrSensorConfigEnergyReturnedLux;
    energy_returned_tariff1?: DsmrSensorConfigEnergyReturnedTariff1;
    energy_returned_tariff2?: DsmrSensorConfigEnergyReturnedTariff2;
    total_imported_energy?: DsmrSensorConfigTotalImportedEnergy;
    total_exported_energy?: DsmrSensorConfigTotalExportedEnergy;
    power_delivered?: DsmrSensorConfigPowerDelivered;
    power_returned?: DsmrSensorConfigPowerReturned;
    reactive_power_delivered?: DsmrSensorConfigReactivePowerDelivered;
    reactive_power_returned?: DsmrSensorConfigReactivePowerReturned;
    electricity_threshold?: DsmrSensorConfigElectricityThreshold;
    electricity_switch_position?: DsmrSensorConfigElectricitySwitchPosition;
    electricity_failures?: DsmrSensorConfigElectricityFailures;
    electricity_long_failures?: DsmrSensorConfigElectricityLongFailures;
    electricity_sags_l1?: DsmrSensorConfigElectricitySagsL1;
    electricity_sags_l2?: DsmrSensorConfigElectricitySagsL2;
    electricity_sags_l3?: DsmrSensorConfigElectricitySagsL3;
    electricity_swells_l1?: DsmrSensorConfigElectricitySwellsL1;
    electricity_swells_l2?: DsmrSensorConfigElectricitySwellsL2;
    electricity_swells_l3?: DsmrSensorConfigElectricitySwellsL3;
    current_l1?: DsmrSensorConfigCurrentL1;
    current_l2?: DsmrSensorConfigCurrentL2;
    current_l3?: DsmrSensorConfigCurrentL3;
    power_delivered_l1?: DsmrSensorConfigPowerDeliveredL1;
    power_delivered_l2?: DsmrSensorConfigPowerDeliveredL2;
    power_delivered_l3?: DsmrSensorConfigPowerDeliveredL3;
    power_returned_l1?: DsmrSensorConfigPowerReturnedL1;
    power_returned_l2?: DsmrSensorConfigPowerReturnedL2;
    power_returned_l3?: DsmrSensorConfigPowerReturnedL3;
    reactive_power_delivered_l1?: DsmrSensorConfigReactivePowerDeliveredL1;
    reactive_power_delivered_l2?: DsmrSensorConfigReactivePowerDeliveredL2;
    reactive_power_delivered_l3?: DsmrSensorConfigReactivePowerDeliveredL3;
    reactive_power_returned_l1?: DsmrSensorConfigReactivePowerReturnedL1;
    reactive_power_returned_l2?: DsmrSensorConfigReactivePowerReturnedL2;
    reactive_power_returned_l3?: DsmrSensorConfigReactivePowerReturnedL3;
    voltage_l1?: DsmrSensorConfigVoltageL1;
    voltage_l2?: DsmrSensorConfigVoltageL2;
    voltage_l3?: DsmrSensorConfigVoltageL3;
    gas_delivered?: DsmrSensorConfigGasDelivered;
    gas_delivered_be?: DsmrSensorConfigGasDeliveredBe;
    water_delivered?: DsmrSensorConfigWaterDelivered;
    active_energy_import_current_average_demand?: DsmrSensorConfigActiveEnergyImportCurrentAverageDemand;
    active_energy_import_maximum_demand_running_month?: DsmrSensorConfigActiveEnergyImportMaximumDemandRunningMonth;
    active_energy_import_maximum_demand_last_13_months?: DsmrSensorConfigActiveEnergyImportMaximumDemandLast_13Months;
}

export class DsmrTextSensor extends EsphomeComponent<DsmrTextSensorConfig> {
    componentName: string = "dsmr.text_sensor";
}

export type DsmrTextSensorConfigIdentification = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigP1Version = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigP1VersionBe = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigTimestamp = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigElectricityTariff = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigElectricityFailureLog = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigMessageShort = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigMessageLong = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigGasEquipmentId = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigThermalEquipmentId = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigWaterEquipmentId = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigSubEquipmentId = TextSensorTEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigGasDeliveredText = TextSensorTEXT_SENSOR_SCHEMA;

export interface DsmrTextSensorConfig extends CoreCOMPONENT_SCHEMA {
    dsmr_id?: ID;
    identification?: DsmrTextSensorConfigIdentification;
    p1_version?: DsmrTextSensorConfigP1Version;
    p1_version_be?: DsmrTextSensorConfigP1VersionBe;
    timestamp?: DsmrTextSensorConfigTimestamp;
    electricity_tariff?: DsmrTextSensorConfigElectricityTariff;
    electricity_failure_log?: DsmrTextSensorConfigElectricityFailureLog;
    message_short?: DsmrTextSensorConfigMessageShort;
    message_long?: DsmrTextSensorConfigMessageLong;
    gas_equipment_id?: DsmrTextSensorConfigGasEquipmentId;
    thermal_equipment_id?: DsmrTextSensorConfigThermalEquipmentId;
    water_equipment_id?: DsmrTextSensorConfigWaterEquipmentId;
    sub_equipment_id?: DsmrTextSensorConfigSubEquipmentId;
    gas_delivered_text?: DsmrTextSensorConfigGasDeliveredText;
}
