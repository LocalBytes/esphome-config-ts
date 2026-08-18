/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xpt2046.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xpt2046
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TouchscreenCALIBRATION_SCHEMA } from "./touchscreen.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Xpt2046Touchscreen extends EsphomeComponent<Xpt2046TouchscreenConfig> {
    componentName: string = "xpt2046.touchscreen";
}

export interface Xpt2046TouchscreenConfigCalibration extends TouchscreenCALIBRATION_SCHEMA {
    x_min: string;
    x_max: string;
    y_min: string;
    y_max: string;
}

export type Xpt2046TouchscreenConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Xpt2046TouchscreenConfigTouchTimeout = CorePositiveTimePeriodMilliseconds;

export interface Xpt2046TouchscreenConfigTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface Xpt2046TouchscreenConfig extends CoreCOMPONENT_SCHEMA {
    calibration: Xpt2046TouchscreenConfigCalibration;
    cs_pin?: Pin;
    data_rate?: any;
    display?: ID;
    id?: ID;
    interrupt_pin?: Pin;
    on_release?: object[];
    on_touch?: object[];
    on_update?: object[];
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Xpt2046TouchscreenConfigSpiMode;
    threshold?: number;
    touch_timeout?: Xpt2046TouchscreenConfigTouchTimeout;
    transform?: Xpt2046TouchscreenConfigTransform;
    update_interval?: any;
}
