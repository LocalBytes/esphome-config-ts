/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: touchscreen.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/touchscreen
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export abstract class Touchscreen extends EsphomeComponent {
    componentName: string = "touchscreen";
}

export interface TouchscreenCALIBRATION_SCHEMA {
    x_max: number;
    x_min: number;
    y_max: number;
    y_min: number;
}

export type TouchscreenTOUCHSCREEN_SCHEMACalibration = TouchscreenCALIBRATION_SCHEMA;
export type TouchscreenTOUCHSCREEN_SCHEMATouchTimeout = CorePositiveTimePeriodMilliseconds;

export interface TouchscreenTOUCHSCREEN_SCHEMATransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface TouchscreenTOUCHSCREEN_SCHEMA extends CoreCOMPONENT_SCHEMA {
    calibration?: TouchscreenTOUCHSCREEN_SCHEMACalibration;
    display?: ID;
    on_release?: object[];
    on_touch?: object[];
    on_update?: object[];
    touch_timeout?: TouchscreenTOUCHSCREEN_SCHEMATouchTimeout;
    transform?: TouchscreenTOUCHSCREEN_SCHEMATransform;
    update_interval?: any;
}

export class TouchscreenBinarySensor extends EsphomeComponent<TouchscreenBinarySensorConfig> {
    componentName: string = "touchscreen.binary_sensor";
}

export type TouchscreenBinarySensorConfig = {
        id?: any;
        page_id?: ID;
        pages?: ID[];
        touchscreen_id?: ID;
        use_raw?: boolean;
        x_max: number;
        x_min: number;
        y_max: number;
        y_min: number;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
