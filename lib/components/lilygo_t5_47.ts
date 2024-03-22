/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lilygo_t5_47.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lilygo_t5_47
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class LilygoT5_47Touchscreen extends BaseComponent<LilygoT5_47TouchscreenConfig> {
    componentName: string = "lilygo_t5_47.touchscreen";
}

export interface LilygoT5_47TouchscreenConfig extends TouchscreenTOUCHSCREEN_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    interrupt_pin: Pin;
    i2c_id?: ID;
    address?: any;
}
