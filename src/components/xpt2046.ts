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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Xpt2046 extends BaseComponent<any> {
    componentName: string = "xpt2046";
}

export class Xpt2046Touchscreen extends BaseComponent<Xpt2046TouchscreenConfig> {
    componentName: string = "xpt2046.touchscreen";
}

export type Xpt2046TouchscreenConfig = {
        id?: ID;
        interrupt_pin?: Pin;
        calibration_x_min?: number;
        calibration_x_max?: number;
        calibration_y_min?: number;
        calibration_y_max?: number;
        threshold?: number;
        report_interval?: any;
        swap_x_y?: boolean;
        update_interval?: any;
        spi_id?: ID;
        cs_pin: Pin;
    } & TouchscreenTOUCHSCREEN_SCHEMA & CoreCOMPONENT_SCHEMA;
