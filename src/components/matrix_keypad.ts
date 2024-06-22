/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: matrix_keypad.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/matrix_keypad
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class MatrixKeypad extends EsphomeComponent<MatrixKeypadConfig> {
    componentName: string = "matrix_keypad";
}

export interface MatrixKeypadConfigRows {
    pin: Pin;
}

export interface MatrixKeypadConfigColumns {
    pin: Pin;
}

export interface MatrixKeypadConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    rows: MatrixKeypadConfigRows[];
    columns: MatrixKeypadConfigColumns[];
    keys?: string;
    debounce_time?: number;
    has_diodes?: boolean;
}

export class MatrixKeypadBinarySensor extends EsphomeComponent<MatrixKeypadBinarySensorConfig> {
    componentName: string = "matrix_keypad.binary_sensor";
}

export interface MatrixKeypadBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    keypad_id?: ID;
    row?: number;
    col?: number;
    key?: string;
}
