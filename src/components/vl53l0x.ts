/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: vl53l0x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/vl53l0x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Vl53l0xSensor extends EsphomeComponent<Vl53l0xSensorConfig> {
    componentName: string = "vl53l0x.sensor";
}

export type Vl53l0xSensorConfigTimingBudget = CorePositiveTimePeriodMicroseconds;
export type Vl53l0xSensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        enable_pin?: Pin;
        i2c_id?: ID;
        icon?: any;
        id?: any;
        long_range?: boolean;
        signal_rate_limit?: any;
        state_class?: any;
        timeout?: any;
        timing_budget?: Vl53l0xSensorConfigTimingBudget;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
