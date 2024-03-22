/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hlw8012.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hlw8012
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hlw8012Sensor extends BaseComponent<Hlw8012SensorConfig> {
    componentName: string = "hlw8012.sensor";
}

export interface Hlw8012SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    sel_pin: Pin;
    cf_pin: Pin;
    cf1_pin: Pin;
    voltage?: Hlw8012SensorConfigVoltage;
    current?: Hlw8012SensorConfigCurrent;
    power?: Hlw8012SensorConfigPower;
    energy?: Hlw8012SensorConfigEnergy;
    current_resistor?: any;
    voltage_divider?: any;
    model?: Hlw8012SensorConfigModel;
    change_mode_every?: number;
    initial_mode?: Hlw8012SensorConfigInitialMode;
    update_interval?: any;
}

export interface Hlw8012SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hlw8012SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hlw8012SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hlw8012SensorConfigEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export type Hlw8012SensorConfigModel = 'HLW8012' | 'CSE7759' | 'BL0937';
export type Hlw8012SensorConfigInitialMode = 'current' | 'voltage';
