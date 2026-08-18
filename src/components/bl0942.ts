/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bl0942.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bl0942
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Bl0942Sensor extends EsphomeComponent<Bl0942SensorConfig> {
    componentName: string = "bl0942.sensor";
}

export interface Bl0942SensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0942SensorConfigEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0942SensorConfigFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bl0942SensorConfigLineFrequency = '50' | '60';

export interface Bl0942SensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0942SensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0942SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: number;
    current?: Bl0942SensorConfigCurrent;
    current_reference?: any;
    energy?: Bl0942SensorConfigEnergy;
    energy_reference?: any;
    frequency?: Bl0942SensorConfigFrequency;
    id?: ID;
    line_frequency?: Bl0942SensorConfigLineFrequency;
    power?: Bl0942SensorConfigPower;
    power_reference?: any;
    reset?: boolean;
    uart_id?: ID;
    update_interval?: any;
    voltage?: Bl0942SensorConfigVoltage;
    voltage_reference?: any;
}
