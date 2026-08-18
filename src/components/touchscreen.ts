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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export abstract class Touchscreen extends EsphomeComponent {
    componentName: string = "touchscreen";
}

export interface TouchscreenCALIBRATIONSCHEMA {
    x_max: number;
    x_min: number;
    y_max: number;
    y_min: number;
}

export type TouchscreenTOUCHSCREENSCHEMACalibration = TouchscreenCALIBRATIONSCHEMA;
export type TouchscreenTOUCHSCREENSCHEMATouchTimeout = CorePositiveTimePeriodMilliseconds;

export interface TouchscreenTOUCHSCREENSCHEMATransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface TouchscreenTOUCHSCREENSCHEMA extends CoreCOMPONENTSCHEMA {
    calibration?: TouchscreenTOUCHSCREENSCHEMACalibration;
    display?: ID;
    on_release?: object[];
    on_touch?: object[];
    on_update?: object[];
    touch_timeout?: TouchscreenTOUCHSCREENSCHEMATouchTimeout;
    transform?: TouchscreenTOUCHSCREENSCHEMATransform;
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
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;
