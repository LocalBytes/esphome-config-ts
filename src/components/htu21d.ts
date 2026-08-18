/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: htu21d.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/htu21d
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Htu21d extends EsphomeComponent {
    componentName: string = "htu21d";
}

export class Htu21dSensor extends EsphomeComponent<Htu21dSensorConfig> {
    componentName: string = "htu21d.sensor";
}

export interface Htu21dSensorConfigHeater extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Htu21dSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Htu21dSensorConfigModel = 'HTU21D' | 'SI7021' | 'SHT21';

export interface Htu21dSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Htu21dSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    heater?: Htu21dSensorConfigHeater;
    humidity?: Htu21dSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    model?: Htu21dSensorConfigModel;
    temperature?: Htu21dSensorConfigTemperature;
    update_interval?: any;
}
