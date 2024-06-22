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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Vbus extends EsphomeComponent<VbusConfig> {
    componentName: string = "vbus";
}

export interface VbusConfig extends UartUART_DEVICE_SCHEMA {
    id?: ID;
}

export class VbusSensor extends EsphomeComponent<VbusSensorConfig> {
    componentName: string = "vbus.sensor";
}

export type VbusSensorConfig = VbusSensorConfigDeltasolBsPlus | VbusSensorConfigDeltasolBs_2009 | VbusSensorConfigDeltasolC | VbusSensorConfigDeltasolCs2 | VbusSensorConfigDeltasolCsPlus | VbusSensorConfigCustom;

export interface VbusSensorConfigDeltasolBsPlusTemperature_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature_3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTemperature_4 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBsPlusPumpSpeed_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBsPlusPumpSpeed_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBsPlusOperatingHours_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBsPlusOperatingHours_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBsPlusHeatQuantity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBsPlusTime extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBsPlusVersion extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBsPlus {
    model: "deltasol_bs_plus" | "DELTASOL_BS_PLUS";
    id?: ID;
    vbus_id?: ID;
    temperature_1?: VbusSensorConfigDeltasolBsPlusTemperature_1;
    temperature_2?: VbusSensorConfigDeltasolBsPlusTemperature_2;
    temperature_3?: VbusSensorConfigDeltasolBsPlusTemperature_3;
    temperature_4?: VbusSensorConfigDeltasolBsPlusTemperature_4;
    pump_speed_1?: VbusSensorConfigDeltasolBsPlusPumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolBsPlusPumpSpeed_2;
    operating_hours_1?: VbusSensorConfigDeltasolBsPlusOperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolBsPlusOperatingHours_2;
    heat_quantity?: VbusSensorConfigDeltasolBsPlusHeatQuantity;
    time?: VbusSensorConfigDeltasolBsPlusTime;
    version?: VbusSensorConfigDeltasolBsPlusVersion;
}

export interface VbusSensorConfigDeltasolBs_2009Temperature_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Temperature_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Temperature_3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Temperature_4 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBs_2009PumpSpeed_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBs_2009PumpSpeed_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBs_2009OperatingHours_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBs_2009OperatingHours_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBs_2009HeatQuantity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Time extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBs_2009Version extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolBs_2009 {
    model: "deltasol_bs_2009" | "DELTASOL_BS_2009";
    id?: ID;
    vbus_id?: ID;
    temperature_1?: VbusSensorConfigDeltasolBs_2009Temperature_1;
    temperature_2?: VbusSensorConfigDeltasolBs_2009Temperature_2;
    temperature_3?: VbusSensorConfigDeltasolBs_2009Temperature_3;
    temperature_4?: VbusSensorConfigDeltasolBs_2009Temperature_4;
    pump_speed_1?: VbusSensorConfigDeltasolBs_2009PumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolBs_2009PumpSpeed_2;
    operating_hours_1?: VbusSensorConfigDeltasolBs_2009OperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolBs_2009OperatingHours_2;
    heat_quantity?: VbusSensorConfigDeltasolBs_2009HeatQuantity;
    time?: VbusSensorConfigDeltasolBs_2009Time;
    version?: VbusSensorConfigDeltasolBs_2009Version;
}

export interface VbusSensorConfigDeltasolCTemperature_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCTemperature_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCTemperature_3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCTemperature_4 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCPumpSpeed_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCPumpSpeed_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCOperatingHours_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCOperatingHours_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCHeatQuantity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCTime extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolC {
    model: "deltasol_c" | "DELTASOL_C";
    id?: ID;
    vbus_id?: ID;
    temperature_1?: VbusSensorConfigDeltasolCTemperature_1;
    temperature_2?: VbusSensorConfigDeltasolCTemperature_2;
    temperature_3?: VbusSensorConfigDeltasolCTemperature_3;
    temperature_4?: VbusSensorConfigDeltasolCTemperature_4;
    pump_speed_1?: VbusSensorConfigDeltasolCPumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolCPumpSpeed_2;
    operating_hours_1?: VbusSensorConfigDeltasolCOperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolCOperatingHours_2;
    heat_quantity?: VbusSensorConfigDeltasolCHeatQuantity;
    time?: VbusSensorConfigDeltasolCTime;
}

export interface VbusSensorConfigDeltasolCs2Temperature_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature_3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCs2Temperature_4 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCs2PumpSpeed extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCs2OperatingHours extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCs2HeatQuantity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCs2Version extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolCs2 {
    model: "deltasol_cs2" | "DELTASOL_CS2";
    id?: ID;
    vbus_id?: ID;
    temperature_1?: VbusSensorConfigDeltasolCs2Temperature_1;
    temperature_2?: VbusSensorConfigDeltasolCs2Temperature_2;
    temperature_3?: VbusSensorConfigDeltasolCs2Temperature_3;
    temperature_4?: VbusSensorConfigDeltasolCs2Temperature_4;
    pump_speed?: VbusSensorConfigDeltasolCs2PumpSpeed;
    operating_hours?: VbusSensorConfigDeltasolCs2OperatingHours;
    heat_quantity?: VbusSensorConfigDeltasolCs2HeatQuantity;
    version?: VbusSensorConfigDeltasolCs2Version;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_4 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTemperature_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusPumpSpeed_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusPumpSpeed_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusOperatingHours_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusOperatingHours_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusHeatQuantity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlusTime extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolCsPlusVersion extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface VbusSensorConfigDeltasolCsPlusFlowRate extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface VbusSensorConfigDeltasolCsPlus {
    model: "deltasol_cs_plus" | "DELTASOL_CS_PLUS";
    id?: ID;
    vbus_id?: ID;
    temperature_1?: VbusSensorConfigDeltasolCsPlusTemperature_1;
    temperature_2?: VbusSensorConfigDeltasolCsPlusTemperature_2;
    temperature_3?: VbusSensorConfigDeltasolCsPlusTemperature_3;
    temperature_4?: VbusSensorConfigDeltasolCsPlusTemperature_4;
    temperature_5?: VbusSensorConfigDeltasolCsPlusTemperature_5;
    pump_speed_1?: VbusSensorConfigDeltasolCsPlusPumpSpeed_1;
    pump_speed_2?: VbusSensorConfigDeltasolCsPlusPumpSpeed_2;
    operating_hours_1?: VbusSensorConfigDeltasolCsPlusOperatingHours_1;
    operating_hours_2?: VbusSensorConfigDeltasolCsPlusOperatingHours_2;
    heat_quantity?: VbusSensorConfigDeltasolCsPlusHeatQuantity;
    time?: VbusSensorConfigDeltasolCsPlusTime;
    version?: VbusSensorConfigDeltasolCsPlusVersion;
    flow_rate?: VbusSensorConfigDeltasolCsPlusFlowRate;
}

export interface VbusSensorConfigCustomSensors extends SensorSENSOR_SCHEMA {
    id?: any;
    lambda: string;
}

export interface VbusSensorConfigCustom {
    model: "custom" | "CUSTOM";
    id?: ID;
    vbus_id?: ID;
    command?: number;
    source?: number;
    dest?: number;
    sensors?: VbusSensorConfigCustomSensors[];
}

export class VbusBinarySensor extends EsphomeComponent<VbusBinarySensorConfig> {
    componentName: string = "vbus.binary_sensor";
}

export type VbusBinarySensorConfig = VbusBinarySensorConfigDeltasolBsPlus | VbusBinarySensorConfigDeltasolBs_2009 | VbusBinarySensorConfigDeltasolC | VbusBinarySensorConfigDeltasolCs2 | VbusBinarySensorConfigDeltasolCsPlus | VbusBinarySensorConfigCustom;
export type VbusBinarySensorConfigDeltasolBsPlusRelay1 = BinarySensorBINARY_SENSOR_SCHEMA;
export type VbusBinarySensorConfigDeltasolBsPlusRelay2 = BinarySensorBINARY_SENSOR_SCHEMA;

export interface VbusBinarySensorConfigDeltasolBsPlusSensor1Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusSensor2Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusSensor3Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusSensor4Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusCollectorMax extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusCollectorMin extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusCollectorFrost extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusTubeCollector extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusRecooling extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlusHqm extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBsPlus {
    model: "deltasol_bs_plus" | "DELTASOL_BS_PLUS";
    id?: ID;
    vbus_id?: ID;
    relay1?: VbusBinarySensorConfigDeltasolBsPlusRelay1;
    relay2?: VbusBinarySensorConfigDeltasolBsPlusRelay2;
    sensor1_error?: VbusBinarySensorConfigDeltasolBsPlusSensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolBsPlusSensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolBsPlusSensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolBsPlusSensor4Error;
    collector_max?: VbusBinarySensorConfigDeltasolBsPlusCollectorMax;
    collector_min?: VbusBinarySensorConfigDeltasolBsPlusCollectorMin;
    collector_frost?: VbusBinarySensorConfigDeltasolBsPlusCollectorFrost;
    tube_collector?: VbusBinarySensorConfigDeltasolBsPlusTubeCollector;
    recooling?: VbusBinarySensorConfigDeltasolBsPlusRecooling;
    hqm?: VbusBinarySensorConfigDeltasolBsPlusHqm;
}

export interface VbusBinarySensorConfigDeltasolBs_2009Sensor1Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009Sensor2Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009Sensor3Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009Sensor4Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009FrostProtectionActive extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface VbusBinarySensorConfigDeltasolBs_2009 {
    model: "deltasol_bs_2009" | "DELTASOL_BS_2009";
    id?: ID;
    vbus_id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolBs_2009Sensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolBs_2009Sensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolBs_2009Sensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolBs_2009Sensor4Error;
    frost_protection_active?: VbusBinarySensorConfigDeltasolBs_2009FrostProtectionActive;
}

export interface VbusBinarySensorConfigDeltasolCSensor1Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCSensor2Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCSensor3Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCSensor4Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolC {
    model: "deltasol_c" | "DELTASOL_C";
    id?: ID;
    vbus_id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolCSensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolCSensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolCSensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolCSensor4Error;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor1Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor2Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor3Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2Sensor4Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCs2 {
    model: "deltasol_cs2" | "DELTASOL_CS2";
    id?: ID;
    vbus_id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolCs2Sensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolCs2Sensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolCs2Sensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolCs2Sensor4Error;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor1Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor2Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor3Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlusSensor4Error extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface VbusBinarySensorConfigDeltasolCsPlus {
    model: "deltasol_cs_plus" | "DELTASOL_CS_PLUS";
    id?: ID;
    vbus_id?: ID;
    sensor1_error?: VbusBinarySensorConfigDeltasolCsPlusSensor1Error;
    sensor2_error?: VbusBinarySensorConfigDeltasolCsPlusSensor2Error;
    sensor3_error?: VbusBinarySensorConfigDeltasolCsPlusSensor3Error;
    sensor4_error?: VbusBinarySensorConfigDeltasolCsPlusSensor4Error;
}

export interface VbusBinarySensorConfigCustomBinarySensors extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    lambda: string;
}

export interface VbusBinarySensorConfigCustom {
    model: "custom" | "CUSTOM";
    id?: ID;
    vbus_id?: ID;
    command?: number;
    source?: number;
    dest?: number;
    binary_sensors?: VbusBinarySensorConfigCustomBinarySensors[];
}
