/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tmp117.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tmp117
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tmp117Sensor extends EsphomeComponent<Tmp117SensorConfig> {
    componentName: string = "tmp117.sensor";
}

export type Tmp117SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        device_class?: any;
        i2c_id?: ID;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
