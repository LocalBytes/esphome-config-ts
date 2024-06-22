/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: internal_temperature.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/internal_temperature
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class InternalTemperatureSensor extends EsphomeComponent<InternalTemperatureSensorConfig> {
    componentName: string = "internal_temperature.sensor";
}

export type InternalTemperatureSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        entity_category?: any;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
