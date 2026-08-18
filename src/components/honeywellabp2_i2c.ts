/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: honeywellabp2_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/honeywellabp2_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Honeywellabp2I2cSensor extends EsphomeComponent<Honeywellabp2I2cSensorConfig> {
    componentName: string = "honeywellabp2_i2c.sensor";
}

export type Honeywellabp2I2cSensorConfigPressureTransferFunction = 'A' | 'B';

export interface Honeywellabp2I2cSensorConfigPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    max_pressure: string;
    min_pressure: string;
    state_class?: any;
    transfer_function: Honeywellabp2I2cSensorConfigPressureTransferFunction;
    unit_of_measurement?: any;
}

export interface Honeywellabp2I2cSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Honeywellabp2I2cSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    pressure?: Honeywellabp2I2cSensorConfigPressure;
    temperature?: Honeywellabp2I2cSensorConfigTemperature;
    update_interval?: any;
}
