/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tof10120.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tof10120
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tof10120Sensor extends EsphomeComponent<Tof10120SensorConfig> {
    componentName: string = "tof10120.sensor";
}

export type Tof10120SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        i2c_id?: ID;
        icon?: any;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
