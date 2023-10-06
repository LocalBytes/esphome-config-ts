/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ektf2232.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ektf2232
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ektf2232Touchscreen extends BaseComponent<Ektf2232TouchscreenConfig> {
    componentName: string = "ektf2232.touchscreen";
}

export interface Ektf2232TouchscreenConfig extends TouchscreenTOUCHSCREEN_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    interrupt_pin: Pin;
    rts_pin: Pin;
    i2c_id?: ID;
    address?: any;
}
