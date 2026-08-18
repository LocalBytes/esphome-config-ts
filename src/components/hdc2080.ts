/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hdc2080.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hdc2080
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Hdc2080Sensor extends EsphomeComponent<Hdc2080SensorConfig> {
    componentName: string = "hdc2080.sensor";
}

export interface Hdc2080SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hdc2080SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hdc2080SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: Hdc2080SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Hdc2080SensorConfigTemperature;
    update_interval?: any;
}
