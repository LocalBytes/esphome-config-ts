/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tt21100.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tt21100
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tt21100BinarySensor extends BaseComponent<Tt21100BinarySensorConfig> {
    componentName: string = "tt21100.binary_sensor";
}

export interface Tt21100BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    tt21100_id?: ID;
    index: number;
}

export class Tt21100Touchscreen extends BaseComponent<Tt21100TouchscreenConfig> {
    componentName: string = "tt21100.touchscreen";
}

export interface Tt21100TouchscreenConfig extends TouchscreenTOUCHSCREEN_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    interrupt_pin: Pin;
    reset_pin?: Pin;
    i2c_id?: ID;
    address?: any;
}
