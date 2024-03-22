/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pm1006.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pm1006
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pm1006Sensor extends BaseComponent<Pm1006SensorConfig> {
    componentName: string = "pm1006.sensor";
}

export interface Pm1006SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pm_2_5?: Pm1006SensorConfigPm_2_5;
    uart_id?: ID;
    update_interval?: any;
}

export interface Pm1006SensorConfigPm_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
