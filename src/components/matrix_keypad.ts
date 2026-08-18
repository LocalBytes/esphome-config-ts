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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export class MatrixKeypad extends EsphomeComponent<MatrixKeypadConfig> {
    componentName: string = "matrix_keypad";
}

export interface MatrixKeypadConfigColumns {
    pin: Pin;
}

export interface MatrixKeypadConfigRows {
    pin: Pin;
}

export interface MatrixKeypadConfig extends CoreCOMPONENTSCHEMA {
    columns: MatrixKeypadConfigColumns[];
    debounce_time?: number;
    has_diodes?: boolean;
    has_pulldowns?: boolean;
    id?: ID;
    keys?: string;
    on_key?: object[];
    rows: MatrixKeypadConfigRows[];
}

export class MatrixKeypadBinarySensor extends EsphomeComponent<MatrixKeypadBinarySensorConfig> {
    componentName: string = "matrix_keypad.binary_sensor";
}

export interface MatrixKeypadBinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    col?: number;
    id?: any;
    key?: string;
    keypad_id?: ID;
    row?: number;
}
