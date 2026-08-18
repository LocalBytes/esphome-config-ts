/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bl0940.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bl0940
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Button_BUTTON_SCHEMA } from "./button.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Bl0940Button extends EsphomeComponent<Bl0940ButtonConfig> {
    componentName: string = "bl0940.button";
}

export type Bl0940ButtonConfig = {
        bl0940_id?: ID;
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & Button_BUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class Bl0940Number extends EsphomeComponent<Bl0940NumberConfig> {
    componentName: string = "bl0940.number";
}

export type Bl0940NumberCALIBRATION_SCHEMA = {
        entity_category?: any;
        id?: ID;
        max_value?: any;
        min_value?: any;
        mode?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type Bl0940NumberConfigCurrentCalibration = Bl0940NumberCALIBRATION_SCHEMA;
export type Bl0940NumberConfigEnergyCalibration = Bl0940NumberCALIBRATION_SCHEMA;
export type Bl0940NumberConfigPowerCalibration = Bl0940NumberCALIBRATION_SCHEMA;
export type Bl0940NumberConfigVoltageCalibration = Bl0940NumberCALIBRATION_SCHEMA;

export interface Bl0940NumberConfig {
    bl0940_id?: ID;
    current_calibration?: Bl0940NumberConfigCurrentCalibration;
    energy_calibration?: Bl0940NumberConfigEnergyCalibration;
    id?: ID;
    power_calibration?: Bl0940NumberConfigPowerCalibration;
    voltage_calibration?: Bl0940NumberConfigVoltageCalibration;
}

export class Bl0940Sensor extends EsphomeComponent<Bl0940SensorConfig> {
    componentName: string = "bl0940.sensor";
}

export interface Bl0940SensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigExternalTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigInternalTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfig extends CoreCOMPONENT_SCHEMA {
    current?: Bl0940SensorConfigCurrent;
    current_reference?: any;
    energy?: Bl0940SensorConfigEnergy;
    energy_reference?: any;
    external_temperature?: Bl0940SensorConfigExternalTemperature;
    id?: ID;
    internal_temperature?: Bl0940SensorConfigInternalTemperature;
    legacy_mode?: boolean;
    power?: Bl0940SensorConfigPower;
    power_reference?: any;
    read_command?: any;
    reference_voltage?: any;
    resistor_one?: any;
    resistor_shunt?: any;
    resistor_two?: any;
    uart_id?: ID;
    update_interval?: any;
    voltage?: Bl0940SensorConfigVoltage;
    voltage_reference?: any;
    write_command?: any;
}
