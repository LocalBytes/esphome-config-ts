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
import type { UartUART_DEVICE_SCHEMA } from "./uart.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Vbus extends EsphomeComponent<VbusConfig> {
    componentName: string = "vbus";
}

export interface VbusConfig extends UartUART_DEVICE_SCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class VbusBinarySensor extends EsphomeComponent<VbusBinarySensorConfig> {
    componentName: string = "vbus.binary_sensor";
}

export type VbusBinarySensorConfig = VbusBinarySensorConfigCustom | VbusBinarySensorConfigDeltasolBs2 | VbusBinarySensorConfigDeltasolBs_2009 | VbusBinarySensorConfigDeltasolBsPlus | VbusBinarySensorConfigDeltasolC | VbusBinarySensorConfigDeltasolCs2 | VbusBinarySensorConfigDeltasolCs4 | VbusBinarySensorConfigDeltasolCsPlus;

export interface VbusBinarySensorConfigCustomBinarySensors extends BinarySensor_BINARY_SENSOR_SCHEMA {
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

export interface VbusBinarySensorConfigDeltasolBs2Sensor1Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2Sensor2Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2Sensor3Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs2Sensor4Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
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

export interface VbusBinarySensorConfigDeltasolBs_2009FrostProtectionActive extends BinarySensor_BINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009Sensor1Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009Sensor2Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009Sensor3Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009Sensor4Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009 {
    model: "deltasol_bs_2009" | "DELTASOL_BS_2009";
    frost_protection_active?: VbusBinarySensorConfigDeltasolBs_2009FrostProtectionActive;
    id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolBs_2009Sensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolBs_2009Sensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolBs_2009Sensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolBs_2009Sensor4Error;
    vbus_id?: ID;
}

export interface VbusBinarySensorConfigDeltasolBsPlusCollectorFrost extends BinarySensor_BINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusCollectorMax extends BinarySensor_BINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusCollectorMin extends BinarySensor_BINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusHqm extends BinarySensor_BINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusRecooling extends BinarySensor_BINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export type VbusBinarySensorConfigDeltasolBsPlusRelay1 = BinarySensor_BINARY_SENSOR_SCHEMA;
export type VbusBinarySensorConfigDeltasolBsPlusRelay2 = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface VbusBinarySensorConfigDeltasolBsPlusSensor1Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusSensor2Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusSensor3Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusSensor4Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusTubeCollector extends BinarySensor_BINARY_SENSOR_SCHEMA {
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

export interface VbusBinarySensorConfigDeltasolCSensor1Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCSensor2Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCSensor3Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCSensor4Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
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

export interface VbusBinarySensorConfigDeltasolCs2Sensor1Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor2Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor3Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor4Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
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

export interface VbusBinarySensorConfigDeltasolCs4Sensor1Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs4Sensor2Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs4Sensor3Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCs4Sensor4Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
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

export interface VbusBinarySensorConfigDeltasolCsPlusSensor1Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor2Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor3Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor4Error extends BinarySensor_BINARY_SENSOR_SCHEMA {
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

export type VbusSensorConfig = VbusSensorConfigCustom | VbusSensorConfigDeltasolBs2 | VbusSensorConfigDeltasolBs_2009 | VbusSensorConfigDeltasolBsPlus | VbusSensorConfigDeltasolC | VbusSensorConfigDeltasolCs2 | VbusSensorConfigDeltasolCs4 | VbusSensorConfigDeltasolCsPlus;

export interface VbusSensorConfigCustomSensors extends Sensor_SENSOR_SCHEMA {
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

export interface VbusSensorConfigDeltasolBs2HeatQuantity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2OperatingHours_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2OperatingHours_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2PumpSpeed_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2PumpSpeed_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Temperature_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Temperature_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Temperature_3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Temperature_4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs2Version extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBs2 {
    model: "deltasol_bs2" | "DELTASOL_BS2";
    heat_quantity?: VbusSensorConfigDeltasolBs2HeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolBs2OperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolBs2OperatingHours_2;
    pump_speed_1?: VbusSensorConfigDeltasolBs2PumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolBs2PumpSpeed_2;
    temperature_1?: VbusSensorConfigDeltasolBs2Temperature_1;
    temperature_2?: VbusSensorConfigDeltasolBs2Temperature_2;
    temperature_3?: VbusSensorConfigDeltasolBs2Temperature_3;
    temperature_4?: VbusSensorConfigDeltasolBs2Temperature_4;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolBs2Version;
}

export interface VbusSensorConfigDeltasolBs_2009HeatQuantity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009OperatingHours_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009OperatingHours_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009PumpSpeed_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009PumpSpeed_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Temperature_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Temperature_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Temperature_3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Temperature_4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Time extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Version extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBs_2009 {
    model: "deltasol_bs_2009" | "DELTASOL_BS_2009";
    heat_quantity?: VbusSensorConfigDeltasolBs_2009HeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolBs_2009OperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolBs_2009OperatingHours_2;
    pump_speed_1?: VbusSensorConfigDeltasolBs_2009PumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolBs_2009PumpSpeed_2;
    temperature_1?: VbusSensorConfigDeltasolBs_2009Temperature_1;
    temperature_2?: VbusSensorConfigDeltasolBs_2009Temperature_2;
    temperature_3?: VbusSensorConfigDeltasolBs_2009Temperature_3;
    temperature_4?: VbusSensorConfigDeltasolBs_2009Temperature_4;
    time?: VbusSensorConfigDeltasolBs_2009Time;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolBs_2009Version;
}

export interface VbusSensorConfigDeltasolBsPlusHeatQuantity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusOperatingHours_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusOperatingHours_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusPumpSpeed_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusPumpSpeed_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature_3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature_4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTime extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolBsPlusVersion extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBsPlus {
    model: "deltasol_bs_plus" | "DELTASOL_BS_PLUS";
    heat_quantity?: VbusSensorConfigDeltasolBsPlusHeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolBsPlusOperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolBsPlusOperatingHours_2;
    pump_speed_1?: VbusSensorConfigDeltasolBsPlusPumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolBsPlusPumpSpeed_2;
    temperature_1?: VbusSensorConfigDeltasolBsPlusTemperature_1;
    temperature_2?: VbusSensorConfigDeltasolBsPlusTemperature_2;
    temperature_3?: VbusSensorConfigDeltasolBsPlusTemperature_3;
    temperature_4?: VbusSensorConfigDeltasolBsPlusTemperature_4;
    time?: VbusSensorConfigDeltasolBsPlusTime;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolBsPlusVersion;
}

export interface VbusSensorConfigDeltasolCHeatQuantity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCOperatingHours_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCOperatingHours_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCPumpSpeed_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCPumpSpeed_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTemperature_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTemperature_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTemperature_3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTemperature_4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCTime extends Sensor_SENSOR_SCHEMA {
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
    operating_hours_1?: VbusSensorConfigDeltasolCOperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolCOperatingHours_2;
    pump_speed_1?: VbusSensorConfigDeltasolCPumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolCPumpSpeed_2;
    temperature_1?: VbusSensorConfigDeltasolCTemperature_1;
    temperature_2?: VbusSensorConfigDeltasolCTemperature_2;
    temperature_3?: VbusSensorConfigDeltasolCTemperature_3;
    temperature_4?: VbusSensorConfigDeltasolCTemperature_4;
    time?: VbusSensorConfigDeltasolCTime;
    vbus_id?: ID;
}

export interface VbusSensorConfigDeltasolCs2HeatQuantity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2OperatingHours extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2PumpSpeed extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature_3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature_4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs2Version extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolCs2 {
    model: "deltasol_cs2" | "DELTASOL_CS2";
    heat_quantity?: VbusSensorConfigDeltasolCs2HeatQuantity;
    id?: ID;
    operating_hours?: VbusSensorConfigDeltasolCs2OperatingHours;
    pump_speed?: VbusSensorConfigDeltasolCs2PumpSpeed;
    temperature_1?: VbusSensorConfigDeltasolCs2Temperature_1;
    temperature_2?: VbusSensorConfigDeltasolCs2Temperature_2;
    temperature_3?: VbusSensorConfigDeltasolCs2Temperature_3;
    temperature_4?: VbusSensorConfigDeltasolCs2Temperature_4;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolCs2Version;
}

export interface VbusSensorConfigDeltasolCs4FlowRate extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCs4HeatQuantity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4OperatingHours_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4OperatingHours_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4PumpSpeed_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4PumpSpeed_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature_3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature_4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Temperature_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Time extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCs4Version extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolCs4 {
    model: "deltasol_cs4" | "DELTASOL_CS4";
    flow_rate?: VbusSensorConfigDeltasolCs4FlowRate;
    heat_quantity?: VbusSensorConfigDeltasolCs4HeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolCs4OperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolCs4OperatingHours_2;
    pump_speed_1?: VbusSensorConfigDeltasolCs4PumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolCs4PumpSpeed_2;
    temperature_1?: VbusSensorConfigDeltasolCs4Temperature_1;
    temperature_2?: VbusSensorConfigDeltasolCs4Temperature_2;
    temperature_3?: VbusSensorConfigDeltasolCs4Temperature_3;
    temperature_4?: VbusSensorConfigDeltasolCs4Temperature_4;
    temperature_5?: VbusSensorConfigDeltasolCs4Temperature_5;
    time?: VbusSensorConfigDeltasolCs4Time;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolCs4Version;
}

export interface VbusSensorConfigDeltasolCsPlusFlowRate extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusHeatQuantity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusOperatingHours_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusOperatingHours_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusPumpSpeed_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusPumpSpeed_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_4 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTime extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface VbusSensorConfigDeltasolCsPlusVersion extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolCsPlus {
    model: "deltasol_cs_plus" | "DELTASOL_CS_PLUS";
    flow_rate?: VbusSensorConfigDeltasolCsPlusFlowRate;
    heat_quantity?: VbusSensorConfigDeltasolCsPlusHeatQuantity;
    id?: ID;
    operating_hours_1?: VbusSensorConfigDeltasolCsPlusOperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolCsPlusOperatingHours_2;
    pump_speed_1?: VbusSensorConfigDeltasolCsPlusPumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolCsPlusPumpSpeed_2;
    temperature_1?: VbusSensorConfigDeltasolCsPlusTemperature_1;
    temperature_2?: VbusSensorConfigDeltasolCsPlusTemperature_2;
    temperature_3?: VbusSensorConfigDeltasolCsPlusTemperature_3;
    temperature_4?: VbusSensorConfigDeltasolCsPlusTemperature_4;
    temperature_5?: VbusSensorConfigDeltasolCsPlusTemperature_5;
    time?: VbusSensorConfigDeltasolCsPlusTime;
    vbus_id?: ID;
    version?: VbusSensorConfigDeltasolCsPlusVersion;
}
