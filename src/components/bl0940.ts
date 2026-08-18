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
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { NumberNUMBERSCHEMA } from "./number.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class Bl0940Button extends EsphomeComponent<Bl0940ButtonConfig> {
    componentName: string = "bl0940.button";
}

export type Bl0940ButtonConfig = {
        bl0940_id?: ID;
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & ButtonBUTTONSCHEMA & CoreCOMPONENTSCHEMA;

export class Bl0940Number extends EsphomeComponent<Bl0940NumberConfig> {
    componentName: string = "bl0940.number";
}

export type Bl0940NumberCALIBRATIONSCHEMA = {
        entity_category?: any;
        id?: ID;
        max_value?: any;
        min_value?: any;
        mode?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & NumberNUMBERSCHEMA & CoreCOMPONENTSCHEMA;
export type Bl0940NumberConfigCurrentCalibration = Bl0940NumberCALIBRATIONSCHEMA;
export type Bl0940NumberConfigEnergyCalibration = Bl0940NumberCALIBRATIONSCHEMA;
export type Bl0940NumberConfigPowerCalibration = Bl0940NumberCALIBRATIONSCHEMA;
export type Bl0940NumberConfigVoltageCalibration = Bl0940NumberCALIBRATIONSCHEMA;

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

export interface Bl0940SensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigExternalTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigInternalTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0940SensorConfig extends CoreCOMPONENTSCHEMA {
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
