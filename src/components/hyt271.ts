/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hyt271.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hyt271
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Hyt271Sensor extends EsphomeComponent<Hyt271SensorConfig> {
    componentName: string = "hyt271.sensor";
}

export interface Hyt271SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hyt271SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hyt271SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: Hyt271SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Hyt271SensorConfigTemperature;
    update_interval?: any;
}
