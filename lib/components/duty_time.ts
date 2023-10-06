/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: duty_time.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/duty_time
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class DutyTimeSensor extends BaseComponent<DutyTimeSensorConfig> {
    componentName: string = "duty_time.sensor";
}

export interface DutyTimeSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
    sensor?: ID;
    lambda?: any;
    restore?: boolean;
    last_time?: DutyTimeSensorConfigLastTime;
    update_interval?: any;
}

export interface DutyTimeSensorConfigLastTime extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface DutyTimeSensorDUTY_TIME_ID_SCHEMA {
    id: ID;
}
