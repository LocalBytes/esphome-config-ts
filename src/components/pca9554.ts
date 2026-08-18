/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pca9554.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pca9554
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Pca9554 extends EsphomeComponent<Pca9554Config> {
    componentName: string = "pca9554";
}

export type Pca9554ConfigPinCount = '4' | '8' | '16';

export interface Pca9554Config extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id: string;
    interrupt_pin?: Pin;
    pin_count?: Pca9554ConfigPinCount;
}
