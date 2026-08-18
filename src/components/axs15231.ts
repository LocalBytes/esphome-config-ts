/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: axs15231.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/axs15231
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TouchscreenCALIBRATIONSCHEMA } from "./touchscreen.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Axs15231Touchscreen extends EsphomeComponent<Axs15231TouchscreenConfig> {
    componentName: string = "axs15231.touchscreen";
}

export type Axs15231TouchscreenConfigCalibration = TouchscreenCALIBRATIONSCHEMA;
export type Axs15231TouchscreenConfigTouchTimeout = CorePositiveTimePeriodMilliseconds;

export interface Axs15231TouchscreenConfigTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface Axs15231TouchscreenConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    calibration?: Axs15231TouchscreenConfigCalibration;
    display?: ID;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin?: Pin;
    on_release?: object[];
    on_touch?: object[];
    on_update?: object[];
    reset_pin?: Pin;
    touch_timeout?: Axs15231TouchscreenConfigTouchTimeout;
    transform?: Axs15231TouchscreenConfigTransform;
    update_interval?: any;
}
