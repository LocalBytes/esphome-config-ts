/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sen21231.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sen21231
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Sen21231Sensor extends EsphomeComponent<Sen21231SensorConfig> {
    componentName: string = "sen21231.sensor";
}

export type Sen21231SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        i2c_id?: ID;
        icon?: any;
        id?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
