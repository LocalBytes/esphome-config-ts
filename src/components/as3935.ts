/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: as3935.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/as3935
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export abstract class As3935 extends EsphomeComponent {
    componentName: string = "as3935";
}

export type As3935AS3935SCHEMADivRatio = '0' | '16' | '32' | '64' | '128';
export type As3935AS3935SCHEMALightningThreshold = '1' | '5' | '9' | '16';

export interface As3935AS3935SCHEMA {
    calibration?: boolean;
    capacitance?: number;
    div_ratio?: As3935AS3935SCHEMADivRatio;
    id?: ID;
    indoor?: boolean;
    irq_pin: Pin;
    lightning_threshold?: As3935AS3935SCHEMALightningThreshold;
    mask_disturber?: boolean;
    noise_level?: number;
    spike_rejection?: number;
    tune_antenna?: boolean;
    watchdog_threshold?: number;
}

export class As3935BinarySensor extends EsphomeComponent<As3935BinarySensorConfig> {
    componentName: string = "as3935.binary_sensor";
}

export interface As3935BinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    as3935_id?: ID;
}

export class As3935Sensor extends EsphomeComponent<As3935SensorConfig> {
    componentName: string = "as3935.sensor";
}

export interface As3935SensorConfigDistance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface As3935SensorConfigLightningEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
}

export interface As3935SensorConfig {
    as3935_id?: ID;
    distance?: As3935SensorConfigDistance;
    lightning_energy?: As3935SensorConfigLightningEnergy;
}
