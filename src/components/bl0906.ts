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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Bl0906 extends EsphomeComponent {
    componentName: string = "bl0906";
}

export class Bl0906Sensor extends EsphomeComponent<Bl0906SensorConfig> {
    componentName: string = "bl0906.sensor";
}

export interface Bl0906SensorConfigChannel_1Current extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_1Energy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_1Power extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_1 {
    current?: Bl0906SensorConfigChannel_1Current;
    energy?: Bl0906SensorConfigChannel_1Energy;
    power?: Bl0906SensorConfigChannel_1Power;
}

export interface Bl0906SensorConfigChannel_2Current extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_2Energy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_2Power extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_2 {
    current?: Bl0906SensorConfigChannel_2Current;
    energy?: Bl0906SensorConfigChannel_2Energy;
    power?: Bl0906SensorConfigChannel_2Power;
}

export interface Bl0906SensorConfigChannel_3Current extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_3Energy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_3Power extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_3 {
    current?: Bl0906SensorConfigChannel_3Current;
    energy?: Bl0906SensorConfigChannel_3Energy;
    power?: Bl0906SensorConfigChannel_3Power;
}

export interface Bl0906SensorConfigChannel_4Current extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_4Energy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_4Power extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_4 {
    current?: Bl0906SensorConfigChannel_4Current;
    energy?: Bl0906SensorConfigChannel_4Energy;
    power?: Bl0906SensorConfigChannel_4Power;
}

export interface Bl0906SensorConfigChannel_5Current extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_5Energy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_5Power extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_5 {
    current?: Bl0906SensorConfigChannel_5Current;
    energy?: Bl0906SensorConfigChannel_5Energy;
    power?: Bl0906SensorConfigChannel_5Power;
}

export interface Bl0906SensorConfigChannel_6Current extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_6Energy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_6Power extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigChannel_6 {
    current?: Bl0906SensorConfigChannel_6Current;
    energy?: Bl0906SensorConfigChannel_6Energy;
    power?: Bl0906SensorConfigChannel_6Power;
}

export interface Bl0906SensorConfigFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigTotalEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigTotalPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0906SensorConfig extends CoreCOMPONENT_SCHEMA {
    channel_1?: Bl0906SensorConfigChannel_1;
    channel_2?: Bl0906SensorConfigChannel_2;
    channel_3?: Bl0906SensorConfigChannel_3;
    channel_4?: Bl0906SensorConfigChannel_4;
    channel_5?: Bl0906SensorConfigChannel_5;
    channel_6?: Bl0906SensorConfigChannel_6;
    frequency?: Bl0906SensorConfigFrequency;
    id?: ID;
    temperature?: Bl0906SensorConfigTemperature;
    total_energy?: Bl0906SensorConfigTotalEnergy;
    total_power?: Bl0906SensorConfigTotalPower;
    uart_id?: ID;
    update_interval?: any;
    voltage?: Bl0906SensorConfigVoltage;
}
