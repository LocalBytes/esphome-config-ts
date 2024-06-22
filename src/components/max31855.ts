/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max31855.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max31855
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Max31855Sensor extends BaseComponent<Max31855SensorConfig> {
    componentName: string = "max31855.sensor";
}

export interface Max31855SensorConfigReferenceTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export type Max31855SensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        reference_temperature?: Max31855SensorConfigReferenceTemperature;
        update_interval?: any;
        spi_id?: ID;
        cs_pin: Pin;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
