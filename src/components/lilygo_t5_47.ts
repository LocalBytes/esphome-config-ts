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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TouchscreenCALIBRATION_SCHEMA } from "./touchscreen.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class LilygoT5_47Touchscreen extends EsphomeComponent<LilygoT5_47TouchscreenConfig> {
    componentName: string = "lilygo_t5_47.touchscreen";
}

export type LilygoT5_47TouchscreenConfigCalibration = TouchscreenCALIBRATION_SCHEMA;
export type LilygoT5_47TouchscreenConfigTouchTimeout = CorePositiveTimePeriodMilliseconds;

export interface LilygoT5_47TouchscreenConfigTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface LilygoT5_47TouchscreenConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    calibration?: LilygoT5_47TouchscreenConfigCalibration;
    display?: ID;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin: Pin;
    on_release?: object[];
    on_touch?: object[];
    on_update?: object[];
    touch_timeout?: LilygoT5_47TouchscreenConfigTouchTimeout;
    transform?: LilygoT5_47TouchscreenConfigTransform;
    update_interval?: any;
}
