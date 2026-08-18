/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hlw8012.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hlw8012
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Hlw8012Sensor extends EsphomeComponent<Hlw8012SensorConfig> {
    componentName: string = "hlw8012.sensor";
}

export interface Hlw8012SensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hlw8012SensorConfigEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Hlw8012SensorConfigInitialMode = 'current' | 'voltage';
export type Hlw8012SensorConfigModel = 'HLW8012' | 'CSE7759' | 'BL0937';

export interface Hlw8012SensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hlw8012SensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hlw8012SensorConfig extends CoreCOMPONENTSCHEMA {
    cf1_pin: Pin;
    cf_pin: Pin;
    change_mode_every?: number;
    current?: Hlw8012SensorConfigCurrent;
    current_resistor?: any;
    energy?: Hlw8012SensorConfigEnergy;
    id?: ID;
    initial_mode?: Hlw8012SensorConfigInitialMode;
    model?: Hlw8012SensorConfigModel;
    power?: Hlw8012SensorConfigPower;
    sel_pin: Pin;
    update_interval?: any;
    voltage?: Hlw8012SensorConfigVoltage;
    voltage_divider?: any;
}
