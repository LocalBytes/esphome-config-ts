/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pulse_counter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pulse_counter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export abstract class PulseCounter extends EsphomeComponent {
    componentName: string = "pulse_counter";
}

export class PulseCounterSensor extends EsphomeComponent<PulseCounterSensorConfig> {
    componentName: string = "pulse_counter.sensor";
}

export type PulseCounterSensorConfigCountModeFallingEdge = 'DISABLE' | 'INCREMENT' | 'DECREMENT';
export type PulseCounterSensorConfigCountModeRisingEdge = 'DISABLE' | 'INCREMENT' | 'DECREMENT';

export interface PulseCounterSensorConfigCountMode {
    falling_edge: PulseCounterSensorConfigCountModeFallingEdge;
    rising_edge: PulseCounterSensorConfigCountModeRisingEdge;
}

export type PulseCounterSensorConfigInternalFilter = CorePositiveTimePeriodMicroseconds;

export interface PulseCounterSensorConfigTotal extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type PulseCounterSensorConfig = {
        accuracy_decimals?: any;
        count_mode?: PulseCounterSensorConfigCountMode;
        icon?: any;
        id?: any;
        internal_filter?: PulseCounterSensorConfigInternalFilter;
        pin: string;
        state_class?: any;
        total?: PulseCounterSensorConfigTotal;
        unit_of_measurement?: any;
        update_interval?: any;
        use_pcnt?: boolean;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
