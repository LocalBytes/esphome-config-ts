/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max17043.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max17043
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Max17043 extends EsphomeComponent {
    componentName: string = "max17043";
}

export class Max17043Sensor extends EsphomeComponent<Max17043SensorConfig> {
    componentName: string = "max17043.sensor";
}

export interface Max17043SensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Max17043SensorConfigBatteryVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Max17043SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    battery_level?: Max17043SensorConfigBatteryLevel;
    battery_voltage?: Max17043SensorConfigBatteryVoltage;
    i2c_id?: ID;
    id?: ID;
    update_interval?: any;
}
