/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pulse_counter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pulse_counter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";

export class PulseCounterSensor extends BaseComponent<PulseCounterSensorConfig> {
    componentName: string = "pulse_counter.sensor";
}

export interface PulseCounterSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    pin: string;
    count_mode?: PulseCounterSensorConfigCountMode;
    use_pcnt?: boolean;
    internal_filter?: PulseCounterSensorConfigInternalFilter;
    total?: PulseCounterSensorConfigTotal;
    update_interval?: any;
}

export interface PulseCounterSensorConfigCountMode {
    rising_edge: PulseCounterSensorConfigCountModeRisingEdge;
    falling_edge: PulseCounterSensorConfigCountModeFallingEdge;
}

export type PulseCounterSensorConfigCountModeRisingEdge = 'DISABLE' | 'INCREMENT' | 'DECREMENT';
export type PulseCounterSensorConfigCountModeFallingEdge = 'DISABLE' | 'INCREMENT' | 'DECREMENT';

export interface PulseCounterSensorConfigInternalFilter extends CorePositiveTimePeriodMicroseconds {
}

export interface PulseCounterSensorConfigTotal extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export abstract class PulseCounter extends BaseComponent {
    componentName: string = "pulse_counter";
}
