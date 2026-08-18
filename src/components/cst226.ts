/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cst226.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cst226
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { TouchscreenCALIBRATION_SCHEMA } from "./touchscreen.js";

export class Cst226BinarySensor extends EsphomeComponent<Cst226BinarySensorConfig> {
    componentName: string = "cst226.binary_sensor";
}

export type Cst226BinarySensorConfig = {
        cst226_id?: ID;
        id?: any;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class Cst226Touchscreen extends EsphomeComponent<Cst226TouchscreenConfig> {
    componentName: string = "cst226.touchscreen";
}

export type Cst226TouchscreenConfigCalibration = TouchscreenCALIBRATION_SCHEMA;
export type Cst226TouchscreenConfigTouchTimeout = CorePositiveTimePeriodMilliseconds;

export interface Cst226TouchscreenConfigTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface Cst226TouchscreenConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    calibration?: Cst226TouchscreenConfigCalibration;
    display?: ID;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin?: Pin;
    on_release?: object[];
    on_touch?: object[];
    on_update?: object[];
    reset_pin?: Pin;
    touch_timeout?: Cst226TouchscreenConfigTouchTimeout;
    transform?: Cst226TouchscreenConfigTransform;
    update_interval?: any;
}
