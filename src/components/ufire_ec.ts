/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ufire_ec.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ufire_ec
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class UfireEc extends EsphomeComponent {
    componentName: string = "ufire_ec";
}

export class UfireEcSensor extends EsphomeComponent<UfireEcSensorConfig> {
    componentName: string = "ufire_ec.sensor";
}

export interface UfireEcSensorConfigEc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UfireEcSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface UfireEcSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    ec?: UfireEcSensorConfigEc;
    i2c_id?: ID;
    id?: ID;
    temperature?: UfireEcSensorConfigTemperature;
    temperature_coefficient?: any;
    temperature_compensation?: any;
    temperature_sensor?: ID;
    update_interval?: any;
}
