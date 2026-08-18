/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: senseair.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/senseair
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Senseair extends EsphomeComponent {
    componentName: string = "senseair";
}

export class SenseairSensor extends EsphomeComponent<SenseairSensorConfig> {
    componentName: string = "senseair.sensor";
}

export interface SenseairSensorCALIBRATION_ACTION_SCHEMA {
    id: ID;
}

export interface SenseairSensorConfigCo2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SenseairSensorConfig extends CoreCOMPONENT_SCHEMA {
    co2?: SenseairSensorConfigCo2;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}
