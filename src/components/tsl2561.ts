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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tsl2561Sensor extends EsphomeComponent<Tsl2561SensorConfig> {
    componentName: string = "tsl2561.sensor";
}

export type Tsl2561SensorConfigGain = '1X' | '16X';
export type Tsl2561SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        device_class?: any;
        gain?: Tsl2561SensorConfigGain;
        i2c_id?: ID;
        id?: any;
        integration_time?: any;
        is_cs_package?: boolean;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
