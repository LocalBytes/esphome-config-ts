/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pzem004t.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pzem004t
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pzem004tSensor extends EsphomeComponent<Pzem004tSensorConfig> {
    componentName: string = "pzem004t.sensor";
}

export interface Pzem004tSensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pzem004tSensorConfigEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pzem004tSensorConfigPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pzem004tSensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pzem004tSensorConfig extends CoreCOMPONENT_SCHEMA {
    current?: Pzem004tSensorConfigCurrent;
    energy?: Pzem004tSensorConfigEnergy;
    id?: ID;
    power?: Pzem004tSensorConfigPower;
    uart_id?: ID;
    update_interval?: any;
    voltage?: Pzem004tSensorConfigVoltage;
}
