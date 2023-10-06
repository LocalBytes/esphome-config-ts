/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cse7766.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cse7766
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Cse7766Sensor extends BaseComponent<Cse7766SensorConfig> {
    componentName: string = "cse7766.sensor";
}

export interface Cse7766SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voltage?: Cse7766SensorConfigVoltage;
    current?: Cse7766SensorConfigCurrent;
    power?: Cse7766SensorConfigPower;
    energy?: Cse7766SensorConfigEnergy;
    update_interval?: any;
    uart_id?: ID;
}

export interface Cse7766SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Cse7766SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Cse7766SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Cse7766SensorConfigEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
