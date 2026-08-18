/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tmp1075.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tmp1075
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tmp1075Sensor extends EsphomeComponent<Tmp1075SensorConfig> {
    componentName: string = "tmp1075.sensor";
}

export type Tmp1075SensorConfigAlertFunction = 'COMPARATOR' | 'INTERRUPT';
export type Tmp1075SensorConfigAlertPolarity = 'ACTIVE_LOW' | 'ACTIVE_HIGH';

export interface Tmp1075SensorConfigAlert {
    fault_count?: number;
    function?: Tmp1075SensorConfigAlertFunction;
    limit_high?: any;
    limit_low?: any;
    polarity?: Tmp1075SensorConfigAlertPolarity;
}

export type Tmp1075SensorConfigConversionRate = '27.5ms' | '55ms' | '110ms' | '220ms';
export type Tmp1075SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        alert?: Tmp1075SensorConfigAlert;
        conversion_rate?: Tmp1075SensorConfigConversionRate;
        device_class?: any;
        i2c_id?: ID;
        icon?: any;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
