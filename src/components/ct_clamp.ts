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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class CtClampSensor extends EsphomeComponent<CtClampSensorConfig> {
    componentName: string = "ct_clamp.sensor";
}

export type CtClampSensorConfigSampleDuration = CorePositiveTimePeriodMilliseconds;
export type CtClampSensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        id?: any;
        sample_duration?: CtClampSensorConfigSampleDuration;
        sensor: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
