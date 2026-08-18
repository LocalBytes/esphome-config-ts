/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tx20.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tx20
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tx20Sensor extends EsphomeComponent<Tx20SensorConfig> {
    componentName: string = "tx20.sensor";
}

export interface Tx20SensorConfigWindDirectionDegrees extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Tx20SensorConfigWindSpeed extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Tx20SensorConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    pin: Pin;
    wind_direction_degrees?: Tx20SensorConfigWindDirectionDegrees;
    wind_speed?: Tx20SensorConfigWindSpeed;
}
