/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ct_clamp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ct_clamp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";

export class CtClampSensor extends BaseComponent<CtClampSensorConfig> {
    componentName: string = "ct_clamp.sensor";
}

export type CtClampSensorConfigSampleDuration = CorePositiveTimePeriodMilliseconds;
export type CtClampSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        sensor: ID;
        sample_duration?: CtClampSensorConfigSampleDuration;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
