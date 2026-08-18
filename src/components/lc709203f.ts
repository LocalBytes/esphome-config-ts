/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lc709203f.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lc709203f
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Lc709203fSensor extends EsphomeComponent<Lc709203fSensorConfig> {
    componentName: string = "lc709203f.sensor";
}

export interface Lc709203fSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Lc709203fSensorConfigBatteryVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Lc709203fSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    b_constant: number;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Lc709203fSensorConfigVoltage = '3.7' | '3.8';

export interface Lc709203fSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    battery_level?: Lc709203fSensorConfigBatteryLevel;
    battery_voltage?: Lc709203fSensorConfigBatteryVoltage;
    i2c_id?: ID;
    id?: ID;
    size?: number;
    temperature?: Lc709203fSensorConfigTemperature;
    update_interval?: any;
    voltage?: Lc709203fSensorConfigVoltage;
}
