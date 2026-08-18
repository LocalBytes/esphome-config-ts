/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: duty_time.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/duty_time
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class DutyTimeSensor extends EsphomeComponent<DutyTimeSensorConfig> {
    componentName: string = "duty_time.sensor";
}

export interface DutyTimeSensorConfigLastTime extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type DutyTimeSensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        entity_category?: any;
        icon?: any;
        id?: any;
        lambda?: any;
        last_time?: DutyTimeSensorConfigLastTime;
        restore?: boolean;
        sensor?: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface DutyTimeSensorDUTY_TIME_ID_SCHEMA {
    id: ID;
}
