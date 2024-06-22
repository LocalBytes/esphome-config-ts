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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";

export class UltrasonicSensor extends EsphomeComponent<UltrasonicSensorConfig> {
    componentName: string = "ultrasonic.sensor";
}

export type UltrasonicSensorConfigPulseTime = CorePositiveTimePeriodMicroseconds;
export type UltrasonicSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
        state_class?: any;
        trigger_pin: Pin;
        echo_pin: Pin;
        timeout?: any;
        pulse_time?: UltrasonicSensorConfigPulseTime;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
