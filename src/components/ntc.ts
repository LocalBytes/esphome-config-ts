/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ntc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ntc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class NtcSensor extends BaseComponent<NtcSensorConfig> {
    componentName: string = "ntc.sensor";
}

export type NtcSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        sensor: ID;
        calibration: string;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
