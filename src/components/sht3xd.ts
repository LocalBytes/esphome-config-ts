/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sht3xd.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sht3xd
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sht3xdSensor extends EsphomeComponent<Sht3xdSensorConfig> {
    componentName: string = "sht3xd.sensor";
}

export interface Sht3xdSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sht3xdSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sht3xdSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature: Sht3xdSensorConfigTemperature;
    humidity: Sht3xdSensorConfigHumidity;
    heater_enabled?: boolean;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
