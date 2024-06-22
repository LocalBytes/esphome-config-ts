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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tmp1075Sensor extends EsphomeComponent<Tmp1075SensorConfig> {
    componentName: string = "tmp1075.sensor";
}

export type Tmp1075SensorConfigConversionRate = '27.5ms' | '55ms' | '110ms' | '220ms';
export type Tmp1075SensorConfigAlertPolarity = 'ACTIVE_LOW' | 'ACTIVE_HIGH';
export type Tmp1075SensorConfigAlertFunction = 'COMPARATOR' | 'INTERRUPT';

export interface Tmp1075SensorConfigAlert {
    limit_low?: any;
    limit_high?: any;
    fault_count?: number;
    polarity?: Tmp1075SensorConfigAlertPolarity;
    function?: Tmp1075SensorConfigAlertFunction;
}

export type Tmp1075SensorConfig = {
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
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
