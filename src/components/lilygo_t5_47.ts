/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lilygo_t5_47.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lilygo_t5_47
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class LilygoT5_47Touchscreen extends BaseComponent<LilygoT5_47TouchscreenConfig> {
    componentName: string = "lilygo_t5_47.touchscreen";
}

export type LilygoT5_47TouchscreenConfig = {
        id?: ID;
        interrupt_pin: Pin;
        i2c_id?: ID;
        address?: any;
    } & TouchscreenTOUCHSCREEN_SCHEMA & CoreCOMPONENT_SCHEMA;
