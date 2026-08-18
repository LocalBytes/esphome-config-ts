/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pzemdc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pzemdc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Pzemdc extends EsphomeComponent {
    componentName: string = "pzemdc";
}

export class PzemdcSensor extends EsphomeComponent<PzemdcSensorConfig> {
    componentName: string = "pzemdc.sensor";
}

export interface PzemdcSensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PzemdcSensorConfigEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PzemdcSensorConfigPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PzemdcSensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PzemdcSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    current?: PzemdcSensorConfigCurrent;
    energy?: PzemdcSensorConfigEnergy;
    id?: ID;
    modbus_id?: ID;
    power?: PzemdcSensorConfigPower;
    update_interval?: any;
    voltage?: PzemdcSensorConfigVoltage;
}
