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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Dsmr extends EsphomeComponent<DsmrConfig> {
    componentName: string = "dsmr";
}

export type DsmrConfigReceiveTimeout = CorePositiveTimePeriodMilliseconds;
export type DsmrConfigRequestInterval = CorePositiveTimePeriodMilliseconds;

export interface DsmrConfig extends CoreCOMPONENT_SCHEMA {
    crc_check?: boolean;
    decryption_key?: any;
    gas_mbus_id?: number;
    id?: ID;
    max_telegram_length?: number;
    receive_timeout?: DsmrConfigReceiveTimeout;
    request_interval?: DsmrConfigRequestInterval;
    request_pin?: Pin;
    thermal_mbus_id?: number;
    uart_id?: ID;
    water_mbus_id?: number;
}

export class DsmrSensor extends EsphomeComponent<DsmrSensorConfig> {
    componentName: string = "dsmr.sensor";
}

export interface DsmrSensorConfigAbsPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigActiveDemandAbs extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigActiveDemandNet extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigActiveDemandPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigActiveEnergyExportCurrentAverageDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigActiveEnergyExportLastCompletedDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigActiveEnergyImportCurrentAverageDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigActiveEnergyImportLastCompletedDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigActiveEnergyImportMaximumDemandLast_13Months extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigActiveEnergyImportMaximumDemandRunningMonth extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentDeliveryPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentDeliveryPowerL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentDeliveryPowerL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentDeliveryPowerL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentEnergyExportCurrentAverageDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentEnergyExportLastCompletedDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentEnergyImportCurrentAverageDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentEnergyImportLastCompletedDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentReturnPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentReturnPowerL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentReturnPowerL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigApparentReturnPowerL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigCurrentFuseL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigCurrentFuseL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigCurrentFuseL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigCurrentL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigCurrentL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigCurrentL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigCurrentN extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigCurrentSum extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigElectricityFailures extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigElectricityLongFailures extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigElectricitySagsL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigElectricitySagsL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigElectricitySagsL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigElectricitySwellsL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigElectricitySwellsL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigElectricitySwellsL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigElectricityThreshold extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredLux extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff1Ch extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff1Il extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff2Ch extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff2Il extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff3Il extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyDeliveredTariff4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedLux extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff1Ch extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff1Il extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff2Ch extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff2Il extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff3Il extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigEnergyReturnedTariff4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigGasDelivered extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigGasDeliveredBe extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigGasDeliveredGj extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigGasDeviceType extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigGasValvePosition extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigMinPowerFactor extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPeriod_3ForInstantaneousValues extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerDelivered extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerDeliveredCh extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerDeliveredL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerDeliveredL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerDeliveredL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerFactor extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerFactorL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerFactorL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerFactorL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DsmrSensorConfigPowerReturned extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerReturnedCh extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerReturnedL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerReturnedL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigPowerReturnedL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyDeliveredTariff1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyDeliveredTariff2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyDeliveredTariff3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyDeliveredTariff4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyExportCurrentAverageDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyExportLastCompletedDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyImportCurrentAverageDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyImportLastCompletedDemand extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyReturnedTariff1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyReturnedTariff2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyReturnedTariff3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactiveEnergyReturnedTariff4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactivePowerDelivered extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactivePowerDeliveredL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactivePowerDeliveredL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactivePowerDeliveredL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactivePowerReturned extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactivePowerReturnedL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactivePowerReturnedL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigReactivePowerReturnedL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigSubDelivered extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigSubDeviceType extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigSubValvePosition extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigThermalDelivered extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigThermalDeviceType extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigThermalValvePosition extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigTotalExportedEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigTotalImportedEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageAvgL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageAvgL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageAvgL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSagL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSagL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSagL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSagTimeL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSagTimeL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSagTimeL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSwellL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSwellL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSwellL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSwellTimeL1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSwellTimeL2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigVoltageSwellTimeL3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigWaterDelivered extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DsmrSensorConfigWaterDeviceType extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfigWaterValvePosition extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface DsmrSensorConfig extends CoreCOMPONENT_SCHEMA {
    abs_power?: DsmrSensorConfigAbsPower;
    active_demand_abs?: DsmrSensorConfigActiveDemandAbs;
    active_demand_net?: DsmrSensorConfigActiveDemandNet;
    active_demand_power?: DsmrSensorConfigActiveDemandPower;
    active_energy_export_current_average_demand?: DsmrSensorConfigActiveEnergyExportCurrentAverageDemand;
    active_energy_export_last_completed_demand?: DsmrSensorConfigActiveEnergyExportLastCompletedDemand;
    active_energy_import_current_average_demand?: DsmrSensorConfigActiveEnergyImportCurrentAverageDemand;
    active_energy_import_last_completed_demand?: DsmrSensorConfigActiveEnergyImportLastCompletedDemand;
    active_energy_import_maximum_demand_last_13_months?: DsmrSensorConfigActiveEnergyImportMaximumDemandLast_13Months;
    active_energy_import_maximum_demand_running_month?: DsmrSensorConfigActiveEnergyImportMaximumDemandRunningMonth;
    apparent_delivery_power?: DsmrSensorConfigApparentDeliveryPower;
    apparent_delivery_power_l1?: DsmrSensorConfigApparentDeliveryPowerL1;
    apparent_delivery_power_l2?: DsmrSensorConfigApparentDeliveryPowerL2;
    apparent_delivery_power_l3?: DsmrSensorConfigApparentDeliveryPowerL3;
    apparent_energy_export_current_average_demand?: DsmrSensorConfigApparentEnergyExportCurrentAverageDemand;
    apparent_energy_export_last_completed_demand?: DsmrSensorConfigApparentEnergyExportLastCompletedDemand;
    apparent_energy_import_current_average_demand?: DsmrSensorConfigApparentEnergyImportCurrentAverageDemand;
    apparent_energy_import_last_completed_demand?: DsmrSensorConfigApparentEnergyImportLastCompletedDemand;
    apparent_return_power?: DsmrSensorConfigApparentReturnPower;
    apparent_return_power_l1?: DsmrSensorConfigApparentReturnPowerL1;
    apparent_return_power_l2?: DsmrSensorConfigApparentReturnPowerL2;
    apparent_return_power_l3?: DsmrSensorConfigApparentReturnPowerL3;
    current?: DsmrSensorConfigCurrent;
    current_fuse_l1?: DsmrSensorConfigCurrentFuseL1;
    current_fuse_l2?: DsmrSensorConfigCurrentFuseL2;
    current_fuse_l3?: DsmrSensorConfigCurrentFuseL3;
    current_l1?: DsmrSensorConfigCurrentL1;
    current_l2?: DsmrSensorConfigCurrentL2;
    current_l3?: DsmrSensorConfigCurrentL3;
    current_n?: DsmrSensorConfigCurrentN;
    current_sum?: DsmrSensorConfigCurrentSum;
    dsmr_id?: ID;
    electricity_failures?: DsmrSensorConfigElectricityFailures;
    electricity_long_failures?: DsmrSensorConfigElectricityLongFailures;
    electricity_sags_l1?: DsmrSensorConfigElectricitySagsL1;
    electricity_sags_l2?: DsmrSensorConfigElectricitySagsL2;
    electricity_sags_l3?: DsmrSensorConfigElectricitySagsL3;
    electricity_swells_l1?: DsmrSensorConfigElectricitySwellsL1;
    electricity_swells_l2?: DsmrSensorConfigElectricitySwellsL2;
    electricity_swells_l3?: DsmrSensorConfigElectricitySwellsL3;
    electricity_threshold?: DsmrSensorConfigElectricityThreshold;
    energy_delivered_lux?: DsmrSensorConfigEnergyDeliveredLux;
    energy_delivered_tariff1?: DsmrSensorConfigEnergyDeliveredTariff1;
    energy_delivered_tariff1_ch?: DsmrSensorConfigEnergyDeliveredTariff1Ch;
    energy_delivered_tariff1_il?: DsmrSensorConfigEnergyDeliveredTariff1Il;
    energy_delivered_tariff2?: DsmrSensorConfigEnergyDeliveredTariff2;
    energy_delivered_tariff2_ch?: DsmrSensorConfigEnergyDeliveredTariff2Ch;
    energy_delivered_tariff2_il?: DsmrSensorConfigEnergyDeliveredTariff2Il;
    energy_delivered_tariff3?: DsmrSensorConfigEnergyDeliveredTariff3;
    energy_delivered_tariff3_il?: DsmrSensorConfigEnergyDeliveredTariff3Il;
    energy_delivered_tariff4?: DsmrSensorConfigEnergyDeliveredTariff4;
    energy_returned_lux?: DsmrSensorConfigEnergyReturnedLux;
    energy_returned_tariff1?: DsmrSensorConfigEnergyReturnedTariff1;
    energy_returned_tariff1_ch?: DsmrSensorConfigEnergyReturnedTariff1Ch;
    energy_returned_tariff1_il?: DsmrSensorConfigEnergyReturnedTariff1Il;
    energy_returned_tariff2?: DsmrSensorConfigEnergyReturnedTariff2;
    energy_returned_tariff2_ch?: DsmrSensorConfigEnergyReturnedTariff2Ch;
    energy_returned_tariff2_il?: DsmrSensorConfigEnergyReturnedTariff2Il;
    energy_returned_tariff3?: DsmrSensorConfigEnergyReturnedTariff3;
    energy_returned_tariff3_il?: DsmrSensorConfigEnergyReturnedTariff3Il;
    energy_returned_tariff4?: DsmrSensorConfigEnergyReturnedTariff4;
    frequency?: DsmrSensorConfigFrequency;
    gas_delivered?: DsmrSensorConfigGasDelivered;
    gas_delivered_be?: DsmrSensorConfigGasDeliveredBe;
    gas_delivered_gj?: DsmrSensorConfigGasDeliveredGj;
    gas_device_type?: DsmrSensorConfigGasDeviceType;
    gas_valve_position?: DsmrSensorConfigGasValvePosition;
    min_power_factor?: DsmrSensorConfigMinPowerFactor;
    period_3_for_instantaneous_values?: DsmrSensorConfigPeriod_3ForInstantaneousValues;
    power_delivered?: DsmrSensorConfigPowerDelivered;
    power_delivered_ch?: DsmrSensorConfigPowerDeliveredCh;
    power_delivered_l1?: DsmrSensorConfigPowerDeliveredL1;
    power_delivered_l2?: DsmrSensorConfigPowerDeliveredL2;
    power_delivered_l3?: DsmrSensorConfigPowerDeliveredL3;
    power_factor?: DsmrSensorConfigPowerFactor;
    power_factor_l1?: DsmrSensorConfigPowerFactorL1;
    power_factor_l2?: DsmrSensorConfigPowerFactorL2;
    power_factor_l3?: DsmrSensorConfigPowerFactorL3;
    power_returned?: DsmrSensorConfigPowerReturned;
    power_returned_ch?: DsmrSensorConfigPowerReturnedCh;
    power_returned_l1?: DsmrSensorConfigPowerReturnedL1;
    power_returned_l2?: DsmrSensorConfigPowerReturnedL2;
    power_returned_l3?: DsmrSensorConfigPowerReturnedL3;
    reactive_energy_delivered_tariff1?: DsmrSensorConfigReactiveEnergyDeliveredTariff1;
    reactive_energy_delivered_tariff2?: DsmrSensorConfigReactiveEnergyDeliveredTariff2;
    reactive_energy_delivered_tariff3?: DsmrSensorConfigReactiveEnergyDeliveredTariff3;
    reactive_energy_delivered_tariff4?: DsmrSensorConfigReactiveEnergyDeliveredTariff4;
    reactive_energy_export_current_average_demand?: DsmrSensorConfigReactiveEnergyExportCurrentAverageDemand;
    reactive_energy_export_last_completed_demand?: DsmrSensorConfigReactiveEnergyExportLastCompletedDemand;
    reactive_energy_import_current_average_demand?: DsmrSensorConfigReactiveEnergyImportCurrentAverageDemand;
    reactive_energy_import_last_completed_demand?: DsmrSensorConfigReactiveEnergyImportLastCompletedDemand;
    reactive_energy_returned_tariff1?: DsmrSensorConfigReactiveEnergyReturnedTariff1;
    reactive_energy_returned_tariff2?: DsmrSensorConfigReactiveEnergyReturnedTariff2;
    reactive_energy_returned_tariff3?: DsmrSensorConfigReactiveEnergyReturnedTariff3;
    reactive_energy_returned_tariff4?: DsmrSensorConfigReactiveEnergyReturnedTariff4;
    reactive_power_delivered?: DsmrSensorConfigReactivePowerDelivered;
    reactive_power_delivered_l1?: DsmrSensorConfigReactivePowerDeliveredL1;
    reactive_power_delivered_l2?: DsmrSensorConfigReactivePowerDeliveredL2;
    reactive_power_delivered_l3?: DsmrSensorConfigReactivePowerDeliveredL3;
    reactive_power_returned?: DsmrSensorConfigReactivePowerReturned;
    reactive_power_returned_l1?: DsmrSensorConfigReactivePowerReturnedL1;
    reactive_power_returned_l2?: DsmrSensorConfigReactivePowerReturnedL2;
    reactive_power_returned_l3?: DsmrSensorConfigReactivePowerReturnedL3;
    sub_delivered?: DsmrSensorConfigSubDelivered;
    sub_device_type?: DsmrSensorConfigSubDeviceType;
    sub_valve_position?: DsmrSensorConfigSubValvePosition;
    thermal_delivered?: DsmrSensorConfigThermalDelivered;
    thermal_device_type?: DsmrSensorConfigThermalDeviceType;
    thermal_valve_position?: DsmrSensorConfigThermalValvePosition;
    total_exported_energy?: DsmrSensorConfigTotalExportedEnergy;
    total_imported_energy?: DsmrSensorConfigTotalImportedEnergy;
    voltage?: DsmrSensorConfigVoltage;
    voltage_avg_l1?: DsmrSensorConfigVoltageAvgL1;
    voltage_avg_l2?: DsmrSensorConfigVoltageAvgL2;
    voltage_avg_l3?: DsmrSensorConfigVoltageAvgL3;
    voltage_l1?: DsmrSensorConfigVoltageL1;
    voltage_l2?: DsmrSensorConfigVoltageL2;
    voltage_l3?: DsmrSensorConfigVoltageL3;
    voltage_sag_l1?: DsmrSensorConfigVoltageSagL1;
    voltage_sag_l2?: DsmrSensorConfigVoltageSagL2;
    voltage_sag_l3?: DsmrSensorConfigVoltageSagL3;
    voltage_sag_time_l1?: DsmrSensorConfigVoltageSagTimeL1;
    voltage_sag_time_l2?: DsmrSensorConfigVoltageSagTimeL2;
    voltage_sag_time_l3?: DsmrSensorConfigVoltageSagTimeL3;
    voltage_swell_l1?: DsmrSensorConfigVoltageSwellL1;
    voltage_swell_l2?: DsmrSensorConfigVoltageSwellL2;
    voltage_swell_l3?: DsmrSensorConfigVoltageSwellL3;
    voltage_swell_time_l1?: DsmrSensorConfigVoltageSwellTimeL1;
    voltage_swell_time_l2?: DsmrSensorConfigVoltageSwellTimeL2;
    voltage_swell_time_l3?: DsmrSensorConfigVoltageSwellTimeL3;
    water_delivered?: DsmrSensorConfigWaterDelivered;
    water_device_type?: DsmrSensorConfigWaterDeviceType;
    water_valve_position?: DsmrSensorConfigWaterValvePosition;
}

export class DsmrTextSensor extends EsphomeComponent<DsmrTextSensorConfig> {
    componentName: string = "dsmr.text_sensor";
}

export type DsmrTextSensorConfigElectricityFailureLog = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigElectricityFailureLogIl = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigElectricitySwitchPosition = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigElectricityTariff = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigElectricityTariffIl = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigEquipmentId = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigFwCoreChecksum = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigFwCoreVersion = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigFwModuleChecksum = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigFwModuleVersion = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigGasDeliveredText = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigGasEquipmentId = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigGasEquipmentIdBe = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigIdentification = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigMessageLong = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigMessageShort = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigP1Version = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigP1VersionBe = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigSubEquipmentId = TextSensor_TEXT_SENSOR_SCHEMA;

export interface DsmrTextSensorConfigTelegram extends TextSensor_TEXT_SENSOR_SCHEMA {
    internal?: any;
}

export type DsmrTextSensorConfigThermalEquipmentId = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigTimestamp = TextSensor_TEXT_SENSOR_SCHEMA;
export type DsmrTextSensorConfigWaterEquipmentId = TextSensor_TEXT_SENSOR_SCHEMA;

export interface DsmrTextSensorConfig extends CoreCOMPONENT_SCHEMA {
    dsmr_id?: ID;
    electricity_failure_log?: DsmrTextSensorConfigElectricityFailureLog;
    electricity_failure_log_il?: DsmrTextSensorConfigElectricityFailureLogIl;
    electricity_switch_position?: DsmrTextSensorConfigElectricitySwitchPosition;
    electricity_tariff?: DsmrTextSensorConfigElectricityTariff;
    electricity_tariff_il?: DsmrTextSensorConfigElectricityTariffIl;
    equipment_id?: DsmrTextSensorConfigEquipmentId;
    fw_core_checksum?: DsmrTextSensorConfigFwCoreChecksum;
    fw_core_version?: DsmrTextSensorConfigFwCoreVersion;
    fw_module_checksum?: DsmrTextSensorConfigFwModuleChecksum;
    fw_module_version?: DsmrTextSensorConfigFwModuleVersion;
    gas_delivered_text?: DsmrTextSensorConfigGasDeliveredText;
    gas_equipment_id?: DsmrTextSensorConfigGasEquipmentId;
    gas_equipment_id_be?: DsmrTextSensorConfigGasEquipmentIdBe;
    identification?: DsmrTextSensorConfigIdentification;
    message_long?: DsmrTextSensorConfigMessageLong;
    message_short?: DsmrTextSensorConfigMessageShort;
    p1_version?: DsmrTextSensorConfigP1Version;
    p1_version_be?: DsmrTextSensorConfigP1VersionBe;
    sub_equipment_id?: DsmrTextSensorConfigSubEquipmentId;
    telegram?: DsmrTextSensorConfigTelegram;
    thermal_equipment_id?: DsmrTextSensorConfigThermalEquipmentId;
    timestamp?: DsmrTextSensorConfigTimestamp;
    water_equipment_id?: DsmrTextSensorConfigWaterEquipmentId;
}
