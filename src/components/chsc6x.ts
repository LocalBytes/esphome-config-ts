/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: chsc6x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/chsc6x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TouchscreenCALIBRATION_SCHEMA } from "./touchscreen.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Chsc6xTouchscreen extends EsphomeComponent<Chsc6xTouchscreenConfig> {
    componentName: string = "chsc6x.touchscreen";
}

export type Chsc6xTouchscreenConfigCalibration = TouchscreenCALIBRATION_SCHEMA;
export type Chsc6xTouchscreenConfigTouchTimeout = CorePositiveTimePeriodMilliseconds;

export interface Chsc6xTouchscreenConfigTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface Chsc6xTouchscreenConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    calibration?: Chsc6xTouchscreenConfigCalibration;
    display?: ID;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin?: Pin;
    on_release?: object[];
    on_touch?: object[];
    on_update?: object[];
    touch_timeout?: Chsc6xTouchscreenConfigTouchTimeout;
    transform?: Chsc6xTouchscreenConfigTransform;
    update_interval?: any;
}
