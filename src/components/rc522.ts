/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rc522.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rc522
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export abstract class Rc522 extends BaseComponent {
    componentName: string = "rc522";
}

export interface Rc522RC522_SCHEMA extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    reset_pin?: Pin;
    on_tag?: object[];
    on_tag_removed?: object[];
    update_interval?: any;
}

export class Rc522BinarySensor extends BaseComponent<Rc522BinarySensorConfig> {
    componentName: string = "rc522.binary_sensor";
}

export interface Rc522BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    rc522_id?: ID;
    uid: string;
}
