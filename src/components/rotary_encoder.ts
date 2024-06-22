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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class RotaryEncoderSensor extends BaseComponent<RotaryEncoderSensorConfig> {
    componentName: string = "rotary_encoder.sensor";
}

export type RotaryEncoderSensorConfigResolution = '1' | '2' | '4';
export type RotaryEncoderSensorConfigRestoreMode = 'RESTORE_DEFAULT_ZERO' | 'ALWAYS_ZERO';
export type RotaryEncoderSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
        pin_a: Pin;
        pin_b: Pin;
        pin_reset?: Pin;
        resolution?: RotaryEncoderSensorConfigResolution;
        min_value?: number;
        max_value?: number;
        publish_initial_value?: boolean;
        restore_mode?: RotaryEncoderSensorConfigRestoreMode;
        on_clockwise?: object[];
        on_anticlockwise?: object[];
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
