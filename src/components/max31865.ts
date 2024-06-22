/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max31865.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max31865
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Max31865Sensor extends EsphomeComponent<Max31865SensorConfig> {
    componentName: string = "max31865.sensor";
}

export type Max31865SensorConfigMainsFilter = '50HZ' | '60HZ';
export type Max31865SensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        reference_resistance: string;
        rtd_nominal_resistance: string;
        mains_filter?: Max31865SensorConfigMainsFilter;
        rtd_wires?: number;
        update_interval?: any;
        spi_id?: ID;
        cs_pin: Pin;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
