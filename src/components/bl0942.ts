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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bl0942Sensor extends BaseComponent<Bl0942SensorConfig> {
    componentName: string = "bl0942.sensor";
}

export interface Bl0942SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bl0942SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bl0942SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bl0942SensorConfigEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Bl0942SensorConfigFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bl0942SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voltage?: Bl0942SensorConfigVoltage;
    current?: Bl0942SensorConfigCurrent;
    power?: Bl0942SensorConfigPower;
    energy?: Bl0942SensorConfigEnergy;
    frequency?: Bl0942SensorConfigFrequency;
    update_interval?: any;
    uart_id?: ID;
}
