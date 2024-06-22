/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: tsl2561.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tsl2561
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tsl2561Sensor extends EsphomeComponent<Tsl2561SensorConfig> {
    componentName: string = "tsl2561.sensor";
}

export type Tsl2561SensorConfigGain = '1X' | '16X';
export type Tsl2561SensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        integration_time?: any;
        gain?: Tsl2561SensorConfigGain;
        is_cs_package?: boolean;
        update_interval?: any;
        i2c_id?: ID;
        address?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
