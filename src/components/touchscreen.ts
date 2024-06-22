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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Touchscreen extends BaseComponent {
    componentName: string = "touchscreen";
}

export interface TouchscreenTOUCHSCREEN_SCHEMA {
    display?: ID;
    on_touch?: object[];
}

export class TouchscreenBinarySensor extends BaseComponent<TouchscreenBinarySensorConfig> {
    componentName: string = "touchscreen.binary_sensor";
}

export type TouchscreenBinarySensorConfig = {
        id?: any;
        touchscreen_id?: ID;
        x_min: number;
        x_max: number;
        y_min: number;
        y_max: number;
        page_id?: ID;
    } & BinarySensorBINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
