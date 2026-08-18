/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tmp102.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tmp102
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tmp102Sensor extends EsphomeComponent<Tmp102SensorConfig> {
    componentName: string = "tmp102.sensor";
}

export type Tmp102SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        device_class?: any;
        i2c_id?: ID;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
