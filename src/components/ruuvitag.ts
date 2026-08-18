/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ruuvitag.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ruuvitag
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class RuuvitagSensor extends EsphomeComponent<RuuvitagSensorConfig> {
    componentName: string = "ruuvitag.sensor";
}

export interface RuuvitagSensorConfigAcceleration extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigAccelerationX extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigAccelerationY extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigAccelerationZ extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigBatteryVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigMeasurementSequenceNumber extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface RuuvitagSensorConfigMovementCounter extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface RuuvitagSensorConfigPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface RuuvitagSensorConfigTxPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type RuuvitagSensorConfig = {
        acceleration?: RuuvitagSensorConfigAcceleration;
        acceleration_x?: RuuvitagSensorConfigAccelerationX;
        acceleration_y?: RuuvitagSensorConfigAccelerationY;
        acceleration_z?: RuuvitagSensorConfigAccelerationZ;
        battery_voltage?: RuuvitagSensorConfigBatteryVoltage;
        humidity?: RuuvitagSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        measurement_sequence_number?: RuuvitagSensorConfigMeasurementSequenceNumber;
        movement_counter?: RuuvitagSensorConfigMovementCounter;
        pressure?: RuuvitagSensorConfigPressure;
        temperature?: RuuvitagSensorConfigTemperature;
        tx_power?: RuuvitagSensorConfigTxPower;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
