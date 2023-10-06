/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pulse_meter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pulse_meter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";

export class PulseMeterSensor extends BaseComponent<PulseMeterSensorConfig> {
    componentName: string = "pulse_meter.sensor";
}

export interface PulseMeterSensorConfig extends SensorSENSOR_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    pin: string;
    internal_filter?: any;
    timeout?: any;
    total?: PulseMeterSensorConfigTotal;
    internal_filter_mode?: PulseMeterSensorConfigInternalFilterMode;
}

export interface PulseMeterSensorConfigTotal extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type PulseMeterSensorConfigInternalFilterMode = 'EDGE' | 'PULSE';

export abstract class PulseMeter extends BaseComponent {
    componentName: string = "pulse_meter";
}
