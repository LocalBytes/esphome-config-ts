/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: opt3001.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/opt3001
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Opt3001Sensor extends EsphomeComponent<Opt3001SensorConfig> {
    componentName: string = "opt3001.sensor";
}

export type Opt3001SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        device_class?: any;
        i2c_id?: ID;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
        name?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
