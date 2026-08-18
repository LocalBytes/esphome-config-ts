/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dallas_temp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dallas_temp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class DallasTempSensor extends EsphomeComponent<DallasTempSensorConfig> {
    componentName: string = "dallas_temp.sensor";
}

export type DallasTempSensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        device_class?: any;
        id?: any;
        index?: number;
        one_wire_id?: ID;
        resolution?: number;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
