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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export abstract class Rc522 extends EsphomeComponent {
    componentName: string = "rc522";
}

export interface Rc522RC522SCHEMA extends CoreCOMPONENTSCHEMA {
    id?: ID;
    on_tag?: object[];
    on_tag_removed?: object[];
    reset_pin?: Pin;
    update_interval?: any;
}

export class Rc522BinarySensor extends EsphomeComponent<Rc522BinarySensorConfig> {
    componentName: string = "rc522.binary_sensor";
}

export interface Rc522BinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    id?: any;
    rc522_id?: ID;
    uid: string;
}
