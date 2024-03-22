/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: duty_cycle.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/duty_cycle
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class DutyCycleSensor extends BaseComponent<DutyCycleSensorConfig> {
    componentName: string = "duty_cycle.sensor";
}

export interface DutyCycleSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    pin: Pin;
    update_interval?: any;
}
