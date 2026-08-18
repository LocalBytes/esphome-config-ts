/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cap1188.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cap1188
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export class Cap1188 extends EsphomeComponent<Cap1188Config> {
    componentName: string = "cap1188";
}

export interface Cap1188Config extends CoreCOMPONENTSCHEMA {
    address?: any;
    allow_multiple_touches?: boolean;
    i2c_id?: ID;
    id?: ID;
    reset_pin?: Pin;
    touch_threshold?: number;
}

export class Cap1188BinarySensor extends EsphomeComponent<Cap1188BinarySensorConfig> {
    componentName: string = "cap1188.binary_sensor";
}

export interface Cap1188BinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    cap1188_id?: ID;
    channel: number;
    id?: any;
}
