/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pulse_meter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pulse_meter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export abstract class PulseMeter extends EsphomeComponent {
    componentName: string = "pulse_meter";
}

export class PulseMeterSensor extends EsphomeComponent<PulseMeterSensorConfig> {
    componentName: string = "pulse_meter.sensor";
}

export type PulseMeterSensorConfigInternalFilterMode = 'EDGE' | 'PULSE';

export interface PulseMeterSensorConfigTotal extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PulseMeterSensorConfig extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    id?: any;
    internal_filter?: any;
    internal_filter_mode?: PulseMeterSensorConfigInternalFilterMode;
    pin: string;
    state_class?: any;
    timeout?: any;
    total?: PulseMeterSensorConfigTotal;
    unit_of_measurement?: any;
}
