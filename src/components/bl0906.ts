/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bl0906.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bl0906
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Bl0906 extends EsphomeComponent {
    componentName: string = "bl0906";
}

export class Bl0906Sensor extends EsphomeComponent<Bl0906SensorConfig> {
    componentName: string = "bl0906.sensor";
}

export interface Bl0906SensorConfigChannel1Current extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel1Energy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel1Power extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel1 {
    current?: Bl0906SensorConfigChannel1Current;
    energy?: Bl0906SensorConfigChannel1Energy;
    power?: Bl0906SensorConfigChannel1Power;
}

export interface Bl0906SensorConfigChannel2Current extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel2Energy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel2Power extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel2 {
    current?: Bl0906SensorConfigChannel2Current;
    energy?: Bl0906SensorConfigChannel2Energy;
    power?: Bl0906SensorConfigChannel2Power;
}

export interface Bl0906SensorConfigChannel3Current extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel3Energy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel3Power extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel3 {
    current?: Bl0906SensorConfigChannel3Current;
    energy?: Bl0906SensorConfigChannel3Energy;
    power?: Bl0906SensorConfigChannel3Power;
}

export interface Bl0906SensorConfigChannel4Current extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel4Energy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel4Power extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel4 {
    current?: Bl0906SensorConfigChannel4Current;
    energy?: Bl0906SensorConfigChannel4Energy;
    power?: Bl0906SensorConfigChannel4Power;
}

export interface Bl0906SensorConfigChannel5Current extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel5Energy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel5Power extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel5 {
    current?: Bl0906SensorConfigChannel5Current;
    energy?: Bl0906SensorConfigChannel5Energy;
    power?: Bl0906SensorConfigChannel5Power;
}

export interface Bl0906SensorConfigChannel6Current extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel6Energy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel6Power extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel6 {
    current?: Bl0906SensorConfigChannel6Current;
    energy?: Bl0906SensorConfigChannel6Energy;
    power?: Bl0906SensorConfigChannel6Power;
}

export interface Bl0906SensorConfigFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigTotalEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigTotalPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfig extends CoreCOMPONENTSCHEMA {
    channel_1?: Bl0906SensorConfigChannel1;
    channel_2?: Bl0906SensorConfigChannel2;
    channel_3?: Bl0906SensorConfigChannel3;
    channel_4?: Bl0906SensorConfigChannel4;
    channel_5?: Bl0906SensorConfigChannel5;
    channel_6?: Bl0906SensorConfigChannel6;
    frequency?: Bl0906SensorConfigFrequency;
    id?: ID;
    temperature?: Bl0906SensorConfigTemperature;
    total_energy?: Bl0906SensorConfigTotalEnergy;
    total_power?: Bl0906SensorConfigTotalPower;
    uart_id?: ID;
    update_interval?: any;
    voltage?: Bl0906SensorConfigVoltage;
}
