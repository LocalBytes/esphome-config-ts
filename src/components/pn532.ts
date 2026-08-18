/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pn532.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pn532
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export class Pn532 extends EsphomeComponent<any> {
    componentName: string = "pn532";
}

export interface Pn532PN532SCHEMA extends CoreCOMPONENTSCHEMA {
    id?: ID;
    on_finished_write?: object[];
    on_tag?: object[];
    on_tag_removed?: object[];
    update_interval?: any;
}

export class Pn532BinarySensor extends EsphomeComponent<Pn532BinarySensorConfig> {
    componentName: string = "pn532.binary_sensor";
}

export interface Pn532BinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    id?: any;
    pn532_id?: ID;
    uid: string;
}
