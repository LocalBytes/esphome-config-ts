/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ultrasonic.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ultrasonic
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class UltrasonicSensor extends EsphomeComponent<UltrasonicSensorConfig> {
    componentName: string = "ultrasonic.sensor";
}

export type UltrasonicSensorConfigPulseTime = CorePositiveTimePeriodMicroseconds;
export type UltrasonicSensorConfig = {
        accuracy_decimals?: any;
        echo_pin: Pin;
        icon?: any;
        id?: any;
        pulse_time?: UltrasonicSensorConfigPulseTime;
        state_class?: any;
        timeout?: any;
        trigger_pin: Pin;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
