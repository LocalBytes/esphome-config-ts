/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: vl53l0x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/vl53l0x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Vl53l0xSensor extends EsphomeComponent<Vl53l0xSensorConfig> {
    componentName: string = "vl53l0x.sensor";
}

export type Vl53l0xSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
        state_class?: any;
        signal_rate_limit?: any;
        long_range?: boolean;
        timeout?: any;
        enable_pin?: Pin;
        update_interval?: any;
        i2c_id?: ID;
        address?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
