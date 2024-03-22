/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tmp1075.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tmp1075
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tmp1075Sensor extends BaseComponent<Tmp1075SensorConfig> {
    componentName: string = "tmp1075.sensor";
}

export interface Tmp1075SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    conversion_rate?: Tmp1075SensorConfigConversionRate;
    alert?: Tmp1075SensorConfigAlert;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export type Tmp1075SensorConfigConversionRate = '27.5ms' | '55ms' | '110ms' | '220ms';

export interface Tmp1075SensorConfigAlert {
    limit_low?: any;
    limit_high?: any;
    fault_count?: number;
    polarity?: Tmp1075SensorConfigAlertPolarity;
    function?: Tmp1075SensorConfigAlertFunction;
}

export type Tmp1075SensorConfigAlertPolarity = 'ACTIVE_LOW' | 'ACTIVE_HIGH';
export type Tmp1075SensorConfigAlertFunction = 'COMPARATOR' | 'INTERRUPT';
