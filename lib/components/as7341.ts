/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: as7341.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/as7341
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class As7341Sensor extends BaseComponent<As7341SensorConfig> {
    componentName: string = "as7341.sensor";
}

export interface As7341SensorSENSOR_SCHEMA extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface As7341SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    f1?: As7341SensorConfigF1;
    f2?: As7341SensorConfigF2;
    f3?: As7341SensorConfigF3;
    f4?: As7341SensorConfigF4;
    f5?: As7341SensorConfigF5;
    f6?: As7341SensorConfigF6;
    f7?: As7341SensorConfigF7;
    f8?: As7341SensorConfigF8;
    clear?: As7341SensorConfigClear;
    nir?: As7341SensorConfigNir;
    gain?: As7341SensorConfigGain;
    atime?: number;
    astep?: number;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface As7341SensorConfigF1 extends As7341SensorSENSOR_SCHEMA {
}

export interface As7341SensorConfigF2 extends As7341SensorSENSOR_SCHEMA {
}

export interface As7341SensorConfigF3 extends As7341SensorSENSOR_SCHEMA {
}

export interface As7341SensorConfigF4 extends As7341SensorSENSOR_SCHEMA {
}

export interface As7341SensorConfigF5 extends As7341SensorSENSOR_SCHEMA {
}

export interface As7341SensorConfigF6 extends As7341SensorSENSOR_SCHEMA {
}

export interface As7341SensorConfigF7 extends As7341SensorSENSOR_SCHEMA {
}

export interface As7341SensorConfigF8 extends As7341SensorSENSOR_SCHEMA {
}

export interface As7341SensorConfigClear extends As7341SensorSENSOR_SCHEMA {
}

export interface As7341SensorConfigNir extends As7341SensorSENSOR_SCHEMA {
}

export type As7341SensorConfigGain = 'X0.5' | 'X1' | 'X2' | 'X4' | 'X8' | 'X16' | 'X32' | 'X64' | 'X128' | 'X256' | 'X512';
