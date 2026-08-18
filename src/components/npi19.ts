/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: npi19.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/npi19
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Npi19Sensor extends EsphomeComponent<Npi19SensorConfig> {
    componentName: string = "npi19.sensor";
}

export interface Npi19SensorConfigRawPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Npi19SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Npi19SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    raw_pressure?: Npi19SensorConfigRawPressure;
    temperature?: Npi19SensorConfigTemperature;
    update_interval?: any;
}
