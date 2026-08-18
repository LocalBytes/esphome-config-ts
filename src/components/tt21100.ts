/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tt21100.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tt21100
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";

export class Tt21100BinarySensor extends EsphomeComponent<Tt21100BinarySensorConfig> {
    componentName: string = "tt21100.binary_sensor";
}

export type Tt21100BinarySensorConfig = {
        id?: any;
        index: number;
        tt21100_id?: ID;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class Tt21100Touchscreen extends EsphomeComponent<Tt21100TouchscreenConfig> {
    componentName: string = "tt21100.touchscreen";
}

export interface Tt21100TouchscreenConfig extends TouchscreenTOUCHSCREEN_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin?: Pin;
    reset_pin?: Pin;
}
