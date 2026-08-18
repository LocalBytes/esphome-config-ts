/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rotary_encoder.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rotary_encoder
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class RotaryEncoderSensor extends EsphomeComponent<RotaryEncoderSensorConfig> {
    componentName: string = "rotary_encoder.sensor";
}

export type RotaryEncoderSensorConfigResolution = '1' | '2' | '4';
export type RotaryEncoderSensorConfigRestoreMode = 'RESTORE_DEFAULT_ZERO' | 'ALWAYS_ZERO';
export type RotaryEncoderSensorConfig = {
        accuracy_decimals?: any;
        icon?: any;
        id?: any;
        max_value?: number;
        min_value?: number;
        on_anticlockwise?: object[];
        on_clockwise?: object[];
        pin_a: Pin;
        pin_b: Pin;
        pin_reset?: Pin;
        publish_initial_value?: boolean;
        resolution?: RotaryEncoderSensorConfigResolution;
        restore_mode?: RotaryEncoderSensorConfigRestoreMode;
        state_class?: any;
        unit_of_measurement?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
