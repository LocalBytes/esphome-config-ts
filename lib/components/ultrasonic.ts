/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ultrasonic.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ultrasonic
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";

export class UltrasonicSensor extends BaseComponent<UltrasonicSensorConfig> {
    componentName: string = "ultrasonic.sensor";
}

export interface UltrasonicSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
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
}

export interface UltrasonicSensorConfigPulseTime extends CorePositiveTimePeriodMicroseconds {
}
