/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: vbus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/vbus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { UartUARTDEVICESCHEMA } from "./uart.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class Vbus extends EsphomeComponent<VbusConfig> {
    componentName: string = "vbus";
}

export interface VbusConfig extends UartUARTDEVICESCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class VbusBinarySensor extends EsphomeComponent<VbusBinarySensorConfig> {
    componentName: string = "vbus.binary_sensor";
}

export type VbusBinarySensorConfig = VbusBinarySensorConfigCustom | VbusBinarySensorConfigDeltasolBs2 | VbusBinarySensorConfigDeltasolBs2009 | VbusBinarySensorConfigDeltasolBsPlus | VbusBinarySensorConfigDeltasolC | VbusBinarySensorConfigDeltasolCs2 | VbusBinarySensorConfigDeltasolCs4 | VbusBinarySensorConfigDeltasolCsPlus;

export interface VbusBinarySensorConfigCustomBinarySensors extends BinarySensorBINARYSENSORSCHEMA {
    id?: any;
    lambda: string;
}

export interface VbusBinarySensorConfigCustom {
    model: "custom" | "CUSTOM";
    binary_sensors?: VbusBinarySensorConfigCustomBinarySensors[];
    command?: number;
    dest?: number;
    id?: ID;
    source?: number;
    vbus_id?: ID;
}

export interface VbusBinarySensorConfigDeltasolBs2Sensor1Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2Sensor2Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2Sensor3Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2Sensor4Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2 {
    model: "deltasol_bs2" | "DELTASOL_BS2";
    id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolBs2Sensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolBs2Sensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolBs2Sensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolBs2Sensor4Error;
    vbus_id?: ID;
}

export interface VbusBinarySensorConfigDeltasolBs2009FrostProtectionActive extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2009Sensor1Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2009Sensor2Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2009Sensor3Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2009Sensor4Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2009 {
    model: "deltasol_bs_2009" | "DELTASOL_BS_2009";
    frost_protection_active?: VbusBinarySensorConfigDeltasolBs2009FrostProtectionActive;
    id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolBs2009Sensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolBs2009Sensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolBs2009Sensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolBs2009Sensor4Error;
    vbus_id?: ID;
}

export interface VbusBinarySensorConfigDeltasolBsPlusCollectorFrost extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusCollectorMax extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusCollectorMin extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusHqm extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusRecooling extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
}

export type VbusBinarySensorConfigDeltasolBsPlusRelay1 = BinarySensorBINARYSENSORSCHEMA;
export type VbusBinarySensorConfigDeltasolBsPlusRelay2 = BinarySensorBINARYSENSORSCHEMA;

export interface VbusBinarySensorConfigDeltasolBsPlusSensor1Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusSensor2Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusSensor3Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusSensor4Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusTubeCollector extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlus {
    model: "deltasol_bs_plus" | "DELTASOL_BS_PLUS";
    collector_frost?: VbusBinarySensorConfigDeltasolBsPlusCollectorFrost;
    collector_max?: VbusBinarySensorConfigDeltasolBsPlusCollectorMax;
    collector_min?: VbusBinarySensorConfigDeltasolBsPlusCollectorMin;
    hqm?: VbusBinarySensorConfigDeltasolBsPlusHqm;
    id?: ID;
    recooling?: VbusBinarySensorConfigDeltasolBsPlusRecooling;
    relay1?: VbusBinarySensorConfigDeltasolBsPlusRelay1;
    relay2?: VbusBinarySensorConfigDeltasolBsPlusRelay2;
    sensor1_error?: VbusBinarySensorConfigDeltasolBsPlusSensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolBsPlusSensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolBsPlusSensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolBsPlusSensor4Error;
    tube_collector?: VbusBinarySensorConfigDeltasolBsPlusTubeCollector;
    vbus_id?: ID;
}

export interface VbusBinarySensorConfigDeltasolCSensor1Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCSensor2Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCSensor3Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCSensor4Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolC {
    model: "deltasol_c" | "DELTASOL_C";
    id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolCSensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolCSensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolCSensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolCSensor4Error;
    vbus_id?: ID;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor1Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor2Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor3Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor4Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2 {
    model: "deltasol_cs2" | "DELTASOL_CS2";
    id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolCs2Sensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolCs2Sensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolCs2Sensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolCs2Sensor4Error;
    vbus_id?: ID;
}

export interface VbusBinarySensorConfigDeltasolCs4Sensor1Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs4Sensor2Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs4Sensor3Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs4Sensor4Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs4 {
    model: "deltasol_cs4" | "DELTASOL_CS4";
    id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolCs4Sensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolCs4Sensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolCs4Sensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolCs4Sensor4Error;
    vbus_id?: ID;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor1Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor2Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor3Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor4Error extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlus {
    model: "deltasol_cs_plus" | "DELTASOL_CS_PLUS";
    id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolCsPlusSensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolCsPlusSensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolCsPlusSensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolCsPlusSensor4Error;
    vbus_id?: ID;
}

export class VbusSensor extends EsphomeComponent<VbusSensorConfig> {
    componentName: string = "vbus.sensor";
}

export type VbusSensorConfig = VbusSensorConfigCustom | VbusSensorConfigDeltasolBs2 | VbusSensorConfigDeltasolBs2009 | VbusSensorConfigDeltasolBsPlus | VbusSensorConfigDeltasolC | VbusSensorConfigDeltasolCs2 | VbusSensorConfigDeltasolCs4 | VbusSensorConfigDeltasolCsPlus;

export interface VbusSensorConfigCustomSensors extends SensorSENSORSCHEMA {
    id?: any;
    lambda: string;
}

export interface VbusSensorConfigCustom {
    model: "custom" | "CUSTOM";
    command?: number;
    dest?: number;
    id?: ID;
    sensors?: VbusSensorConfigCustomSensors[];
    source?: number;
    vbus_id?: ID;
}

export interface VbusSensorConfigDeltasolBs2HeatQuantity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2OperatingHours1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2OperatingHours2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2PumpSpeed1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2PumpSpeed2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Temperature1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Temperature2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Temperature3 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Temperature4 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Version extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBs2 {
    model: "deltasol_bs2" | "DELTASOL_BS2";
    heat_quantity?: VbusSensorConfigDeltasolBs2HeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolBs2OperatingHours1;
    operating_hours_2?: VbusSensorConfigDeltasolBs2OperatingHours2;
    pump_speed_1?: VbusSensorConfigDeltasolBs2PumpSpeed1;
    pump_speed_2?: VbusSensorConfigDeltasolBs2PumpSpeed2;
    temperature_1?: VbusSensorConfigDeltasolBs2Temperature1;
    temperature_2?: VbusSensorConfigDeltasolBs2Temperature2;
    temperature_3?: VbusSensorConfigDeltasolBs2Temperature3;
    temperature_4?: VbusSensorConfigDeltasolBs2Temperature4;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolBs2Version;
}

export interface VbusSensorConfigDeltasolBs2009HeatQuantity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009OperatingHours1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009OperatingHours2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009PumpSpeed1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009PumpSpeed2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009Temperature1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009Temperature2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009Temperature3 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009Temperature4 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009Time extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2009Version extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBs2009 {
    model: "deltasol_bs_2009" | "DELTASOL_BS_2009";
    heat_quantity?: VbusSensorConfigDeltasolBs2009HeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolBs2009OperatingHours1;
    operating_hours_2?: VbusSensorConfigDeltasolBs2009OperatingHours2;
    pump_speed_1?: VbusSensorConfigDeltasolBs2009PumpSpeed1;
    pump_speed_2?: VbusSensorConfigDeltasolBs2009PumpSpeed2;
    temperature_1?: VbusSensorConfigDeltasolBs2009Temperature1;
    temperature_2?: VbusSensorConfigDeltasolBs2009Temperature2;
    temperature_3?: VbusSensorConfigDeltasolBs2009Temperature3;
    temperature_4?: VbusSensorConfigDeltasolBs2009Temperature4;
    time?: VbusSensorConfigDeltasolBs2009Time;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolBs2009Version;
}

export interface VbusSensorConfigDeltasolBsPlusHeatQuantity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusOperatingHours1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusOperatingHours2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusPumpSpeed1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusPumpSpeed2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature3 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature4 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusVersion extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBsPlus {
    model: "deltasol_bs_plus" | "DELTASOL_BS_PLUS";
    heat_quantity?: VbusSensorConfigDeltasolBsPlusHeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolBsPlusOperatingHours1;
    operating_hours_2?: VbusSensorConfigDeltasolBsPlusOperatingHours2;
    pump_speed_1?: VbusSensorConfigDeltasolBsPlusPumpSpeed1;
    pump_speed_2?: VbusSensorConfigDeltasolBsPlusPumpSpeed2;
    temperature_1?: VbusSensorConfigDeltasolBsPlusTemperature1;
    temperature_2?: VbusSensorConfigDeltasolBsPlusTemperature2;
    temperature_3?: VbusSensorConfigDeltasolBsPlusTemperature3;
    temperature_4?: VbusSensorConfigDeltasolBsPlusTemperature4;
    time?: VbusSensorConfigDeltasolBsPlusTime;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolBsPlusVersion;
}

export interface VbusSensorConfigDeltasolCHeatQuantity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCOperatingHours1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCOperatingHours2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCPumpSpeed1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCPumpSpeed2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTemperature1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTemperature2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTemperature3 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTemperature4 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolC {
    model: "deltasol_c" | "DELTASOL_C";
    heat_quantity?: VbusSensorConfigDeltasolCHeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolCOperatingHours1;
    operating_hours_2?: VbusSensorConfigDeltasolCOperatingHours2;
    pump_speed_1?: VbusSensorConfigDeltasolCPumpSpeed1;
    pump_speed_2?: VbusSensorConfigDeltasolCPumpSpeed2;
    temperature_1?: VbusSensorConfigDeltasolCTemperature1;
    temperature_2?: VbusSensorConfigDeltasolCTemperature2;
    temperature_3?: VbusSensorConfigDeltasolCTemperature3;
    temperature_4?: VbusSensorConfigDeltasolCTemperature4;
    time?: VbusSensorConfigDeltasolCTime;
    vbus_id?: ID;
}

export interface VbusSensorConfigDeltasolCs2HeatQuantity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2OperatingHours extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2PumpSpeed extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature3 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature4 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Version extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolCs2 {
    model: "deltasol_cs2" | "DELTASOL_CS2";
    heat_quantity?: VbusSensorConfigDeltasolCs2HeatQuantity;
    id?: ID;
    operating_hours?: VbusSensorConfigDeltasolCs2OperatingHours;
    pump_speed?: VbusSensorConfigDeltasolCs2PumpSpeed;
    temperature_1?: VbusSensorConfigDeltasolCs2Temperature1;
    temperature_2?: VbusSensorConfigDeltasolCs2Temperature2;
    temperature_3?: VbusSensorConfigDeltasolCs2Temperature3;
    temperature_4?: VbusSensorConfigDeltasolCs2Temperature4;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolCs2Version;
}

export interface VbusSensorConfigDeltasolCs4FlowRate extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCs4HeatQuantity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4OperatingHours1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4OperatingHours2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4PumpSpeed1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4PumpSpeed2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature3 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature4 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature5 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Time extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Version extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolCs4 {
    model: "deltasol_cs4" | "DELTASOL_CS4";
    flow_rate?: VbusSensorConfigDeltasolCs4FlowRate;
    heat_quantity?: VbusSensorConfigDeltasolCs4HeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolCs4OperatingHours1;
    operating_hours_2?: VbusSensorConfigDeltasolCs4OperatingHours2;
    pump_speed_1?: VbusSensorConfigDeltasolCs4PumpSpeed1;
    pump_speed_2?: VbusSensorConfigDeltasolCs4PumpSpeed2;
    temperature_1?: VbusSensorConfigDeltasolCs4Temperature1;
    temperature_2?: VbusSensorConfigDeltasolCs4Temperature2;
    temperature_3?: VbusSensorConfigDeltasolCs4Temperature3;
    temperature_4?: VbusSensorConfigDeltasolCs4Temperature4;
    temperature_5?: VbusSensorConfigDeltasolCs4Temperature5;
    time?: VbusSensorConfigDeltasolCs4Time;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolCs4Version;
}

export interface VbusSensorConfigDeltasolCsPlusFlowRate extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusHeatQuantity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusOperatingHours1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusOperatingHours2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusPumpSpeed1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusPumpSpeed2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature3 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature4 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature5 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusVersion extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolCsPlus {
    model: "deltasol_cs_plus" | "DELTASOL_CS_PLUS";
    flow_rate?: VbusSensorConfigDeltasolCsPlusFlowRate;
    heat_quantity?: VbusSensorConfigDeltasolCsPlusHeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolCsPlusOperatingHours1;
    operating_hours_2?: VbusSensorConfigDeltasolCsPlusOperatingHours2;
    pump_speed_1?: VbusSensorConfigDeltasolCsPlusPumpSpeed1;
    pump_speed_2?: VbusSensorConfigDeltasolCsPlusPumpSpeed2;
    temperature_1?: VbusSensorConfigDeltasolCsPlusTemperature1;
    temperature_2?: VbusSensorConfigDeltasolCsPlusTemperature2;
    temperature_3?: VbusSensorConfigDeltasolCsPlusTemperature3;
    temperature_4?: VbusSensorConfigDeltasolCsPlusTemperature4;
    temperature_5?: VbusSensorConfigDeltasolCsPlusTemperature5;
    time?: VbusSensorConfigDeltasolCsPlusTime;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolCsPlusVersion;
}
