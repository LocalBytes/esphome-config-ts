/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ttp229_bsf.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ttp229_bsf
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Ttp229Bsf extends EsphomeComponent<Ttp229BsfConfig> {
    componentName: string = "ttp229_bsf";
}

export interface Ttp229BsfConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    scl_pin: Pin;
    sdo_pin: Pin;
}

export class Ttp229BsfBinarySensor extends EsphomeComponent<Ttp229BsfBinarySensorConfig> {
    componentName: string = "ttp229_bsf.binary_sensor";
}

export interface Ttp229BsfBinarySensorConfig extends BinarySensor_BINARY_SENSOR_SCHEMA {
    channel: number;
    id?: any;
    ttp229_id?: ID;
}
