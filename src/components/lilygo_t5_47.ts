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
import type { TouchscreenCALIBRATIONSCHEMA } from "./touchscreen.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class LilygoT547Touchscreen extends EsphomeComponent<LilygoT547TouchscreenConfig> {
    componentName: string = "lilygo_t5_47.touchscreen";
}

export type LilygoT547TouchscreenConfigCalibration = TouchscreenCALIBRATIONSCHEMA;
export type LilygoT547TouchscreenConfigTouchTimeout = CorePositiveTimePeriodMilliseconds;

export interface LilygoT547TouchscreenConfigTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface LilygoT547TouchscreenConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    calibration?: LilygoT547TouchscreenConfigCalibration;
    display?: ID;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin: Pin;
    on_release?: object[];
    on_touch?: object[];
    on_update?: object[];
    touch_timeout?: LilygoT547TouchscreenConfigTouchTimeout;
    transform?: LilygoT547TouchscreenConfigTransform;
    update_interval?: any;
}
