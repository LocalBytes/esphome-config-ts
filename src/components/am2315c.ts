/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: am2315c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/am2315c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Am2315cSensor extends EsphomeComponent<Am2315cSensorConfig> {
    componentName: string = "am2315c.sensor";
}

export interface Am2315cSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Am2315cSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Am2315cSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    humidity?: Am2315cSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Am2315cSensorConfigTemperature;
    update_interval?: any;
}
