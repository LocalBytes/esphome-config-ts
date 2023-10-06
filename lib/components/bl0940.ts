/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bl0940.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bl0940
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bl0940Sensor extends BaseComponent<Bl0940SensorConfig> {
    componentName: string = "bl0940.sensor";
}

export interface Bl0940SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voltage?: Bl0940SensorConfigVoltage;
    current?: Bl0940SensorConfigCurrent;
    power?: Bl0940SensorConfigPower;
    energy?: Bl0940SensorConfigEnergy;
    internal_temperature?: Bl0940SensorConfigInternalTemperature;
    external_temperature?: Bl0940SensorConfigExternalTemperature;
    update_interval?: any;
    uart_id?: ID;
}

export interface Bl0940SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bl0940SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bl0940SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bl0940SensorConfigEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Bl0940SensorConfigInternalTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bl0940SensorConfigExternalTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
