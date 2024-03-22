/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sds011.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sds011
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodMinutes, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sds011Sensor extends BaseComponent<Sds011SensorConfig> {
    componentName: string = "sds011.sensor";
}

export interface Sds011SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pm_2_5?: Sds011SensorConfigPm_2_5;
    pm_10_0?: Sds011SensorConfigPm_10_0;
    rx_only?: boolean;
    update_interval?: Sds011SensorConfigUpdateInterval;
    uart_id?: ID;
}

export interface Sds011SensorConfigPm_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sds011SensorConfigPm_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sds011SensorConfigUpdateInterval extends CorePositiveTimePeriodMinutes {
}
