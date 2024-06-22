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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export abstract class As3935 extends BaseComponent {
    componentName: string = "as3935";
}

export type As3935AS3935_SCHEMALightningThreshold = '1' | '5' | '9' | '16';
export type As3935AS3935_SCHEMADivRatio = '0' | '16' | '32' | '64' | '128';

export interface As3935AS3935_SCHEMA {
    id?: ID;
    irq_pin: Pin;
    indoor?: boolean;
    noise_level?: number;
    watchdog_threshold?: number;
    spike_rejection?: number;
    lightning_threshold?: As3935AS3935_SCHEMALightningThreshold;
    mask_disturber?: boolean;
    div_ratio?: As3935AS3935_SCHEMADivRatio;
    capacitance?: number;
}

export class As3935Sensor extends BaseComponent<As3935SensorConfig> {
    componentName: string = "as3935.sensor";
}

export interface As3935SensorConfigDistance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface As3935SensorConfigLightningEnergy extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
}

export interface As3935SensorConfig extends CoreCOMPONENT_SCHEMA {
    as3935_id?: ID;
    distance?: As3935SensorConfigDistance;
    lightning_energy?: As3935SensorConfigLightningEnergy;
}

export class As3935BinarySensor extends BaseComponent<As3935BinarySensorConfig> {
    componentName: string = "as3935.binary_sensor";
}

export interface As3935BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    as3935_id?: ID;
}
