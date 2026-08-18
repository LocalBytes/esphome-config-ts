/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ens210.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ens210
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ens210Sensor extends EsphomeComponent<Ens210SensorConfig> {
    componentName: string = "ens210.sensor";
}

export interface Ens210SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ens210SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ens210SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: Ens210SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Ens210SensorConfigTemperature;
    update_interval?: any;
}
