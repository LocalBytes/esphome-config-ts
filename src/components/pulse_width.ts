/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: pulse_width.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pulse_width
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class PulseWidthSensor extends EsphomeComponent<PulseWidthSensorConfig> {
    componentName: string = "pulse_width.sensor";
}

export type PulseWidthSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
        state_class?: any;
        pin: Pin;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
