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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export class Rdm6300 extends EsphomeComponent<Rdm6300Config> {
    componentName: string = "rdm6300";
}

export interface Rdm6300Config extends CoreCOMPONENTSCHEMA {
    id?: ID;
    on_tag?: object[];
    uart_id?: ID;
}

export class Rdm6300BinarySensor extends EsphomeComponent<Rdm6300BinarySensorConfig> {
    componentName: string = "rdm6300.binary_sensor";
}

export interface Rdm6300BinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    id?: any;
    rdm6300_id?: ID;
    uid: number;
}
