/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sen0321.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sen0321
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sen0321Sensor extends EsphomeComponent<Sen0321SensorConfig> {
    componentName: string = "sen0321.sensor";
}

export type Sen0321SensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
        state_class?: any;
        update_interval?: any;
        i2c_id?: ID;
        address?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
