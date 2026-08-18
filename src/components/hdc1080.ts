/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hdc1080.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hdc1080
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Hdc1080Sensor extends EsphomeComponent<Hdc1080SensorConfig> {
    componentName: string = "hdc1080.sensor";
}

export interface Hdc1080SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hdc1080SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hdc1080SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: Hdc1080SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Hdc1080SensorConfigTemperature;
    update_interval?: any;
}
