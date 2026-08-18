/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dlms_meter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dlms_meter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class DlmsMeter extends EsphomeComponent<DlmsMeterConfig> {
    componentName: string = "dlms_meter";
}

export interface DlmsMeterConfigCustomPatterns {
    default_obis?: any;
    name?: string;
    pattern: string;
    priority?: number;
}

export type DlmsMeterConfigReceiveTimeout = CorePositiveTimePeriodMilliseconds;

export interface DlmsMeterConfig extends CoreCOMPONENTSCHEMA {
    auth_key?: any;
    custom_patterns?: DlmsMeterConfigCustomPatterns[];
    decryption_key?: any;
    id?: ID;
    provider?: string;
    receive_timeout?: DlmsMeterConfigReceiveTimeout;
    skip_crc?: boolean;
    uart_id?: ID;
}

export class DlmsMeterBinarySensor extends EsphomeComponent<DlmsMeterBinarySensorConfig> {
    componentName: string = "dlms_meter.binary_sensor";
}

export interface DlmsMeterBinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    dlms_meter_id?: ID;
    obis_code: string;
}

export class DlmsMeterSensor extends EsphomeComponent<DlmsMeterSensorConfig> {
    componentName: string = "dlms_meter.sensor";
}

export interface DlmsMeterSensorConfigActiveEnergyMinus extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigActiveEnergyPlus extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigActivePowerMinus extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigActivePowerPlus extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigCurrentL1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigCurrentL2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigCurrentL3 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigPowerFactor extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DlmsMeterSensorConfigReactiveEnergyMinus extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigReactiveEnergyPlus extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigVoltageL1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigVoltageL2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfigVoltageL3 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DlmsMeterSensorConfig extends CoreCOMPONENTSCHEMA {
    active_energy_minus?: DlmsMeterSensorConfigActiveEnergyMinus;
    active_energy_plus?: DlmsMeterSensorConfigActiveEnergyPlus;
    active_power_minus?: DlmsMeterSensorConfigActivePowerMinus;
    active_power_plus?: DlmsMeterSensorConfigActivePowerPlus;
    current_l1?: DlmsMeterSensorConfigCurrentL1;
    current_l2?: DlmsMeterSensorConfigCurrentL2;
    current_l3?: DlmsMeterSensorConfigCurrentL3;
    dlms_meter_id?: ID;
    obis_code: string;
    power_factor?: DlmsMeterSensorConfigPowerFactor;
    reactive_energy_minus?: DlmsMeterSensorConfigReactiveEnergyMinus;
    reactive_energy_plus?: DlmsMeterSensorConfigReactiveEnergyPlus;
    voltage_l1?: DlmsMeterSensorConfigVoltageL1;
    voltage_l2?: DlmsMeterSensorConfigVoltageL2;
    voltage_l3?: DlmsMeterSensorConfigVoltageL3;
}

export class DlmsMeterTextSensor extends EsphomeComponent<DlmsMeterTextSensorConfig> {
    componentName: string = "dlms_meter.text_sensor";
}

export type DlmsMeterTextSensorConfigMeternumber = TextSensorTEXTSENSORSCHEMA;
export type DlmsMeterTextSensorConfigTimestamp = TextSensorTEXTSENSORSCHEMA;

export interface DlmsMeterTextSensorConfig extends CoreCOMPONENTSCHEMA {
    dlms_meter_id?: ID;
    meternumber?: DlmsMeterTextSensorConfigMeternumber;
    obis_code: string;
    timestamp?: DlmsMeterTextSensorConfigTimestamp;
}
