/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sim800l.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sim800l
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Sim800l extends BaseComponent<Sim800lConfig> {
    componentName: string = "sim800l";
}

export interface Sim800lConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    on_sms_received?: object[];
    on_incoming_call?: object[];
    on_call_connected?: object[];
    on_call_disconnected?: object[];
    on_ussd_received?: object[];
    update_interval?: any;
    uart_id?: ID;
}

export class Sim800lSensor extends BaseComponent<Sim800lSensorConfig> {
    componentName: string = "sim800l.sensor";
}

export interface Sim800lSensorConfig {
    sim800l_id?: ID;
    rssi?: Sim800lSensorConfigRssi;
}

export interface Sim800lSensorConfigRssi extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export class Sim800lBinarySensor extends BaseComponent<Sim800lBinarySensorConfig> {
    componentName: string = "sim800l.binary_sensor";
}

export interface Sim800lBinarySensorConfig {
    sim800l_id?: ID;
    registered?: Sim800lBinarySensorConfigRegistered;
}

export interface Sim800lBinarySensorConfigRegistered extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}
