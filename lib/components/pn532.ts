/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pn532.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pn532
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Pn532 extends BaseComponent<any> {
    componentName: string = "pn532";
}

export interface Pn532PN532_SCHEMA extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    on_tag?: object[];
    on_finished_write?: object[];
    on_tag_removed?: object[];
    update_interval?: any;
}

export class Pn532BinarySensor extends BaseComponent<Pn532BinarySensorConfig> {
    componentName: string = "pn532.binary_sensor";
}

export interface Pn532BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    pn532_id?: ID;
    uid: string;
}
