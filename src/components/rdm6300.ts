/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rdm6300.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rdm6300
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Rdm6300 extends BaseComponent<Rdm6300Config> {
    componentName: string = "rdm6300";
}

export interface Rdm6300Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    on_tag?: object[];
    uart_id?: ID;
}

export class Rdm6300BinarySensor extends BaseComponent<Rdm6300BinarySensorConfig> {
    componentName: string = "rdm6300.binary_sensor";
}

export interface Rdm6300BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    rdm6300_id?: ID;
    uid: number;
}
