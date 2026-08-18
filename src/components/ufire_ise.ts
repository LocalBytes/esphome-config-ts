/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ufire_ise.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ufire_ise
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class UfireIse extends EsphomeComponent {
    componentName: string = "ufire_ise";
}

export class UfireIseSensor extends EsphomeComponent<UfireIseSensorConfig> {
    componentName: string = "ufire_ise.sensor";
}

export interface UfireIseSensorConfigPh extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UfireIseSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UfireIseSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    ph?: UfireIseSensorConfigPh;
    temperature?: UfireIseSensorConfigTemperature;
    temperature_sensor?: ID;
    update_interval?: any;
}

export interface UfireIseSensorUFIREISECALIBRATEPROBESCHEMA {
    id?: ID;
    solution: string;
}
