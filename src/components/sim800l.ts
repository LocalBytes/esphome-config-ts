/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sim800l.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sim800l
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class Sim800l extends EsphomeComponent<Sim800lConfig> {
    componentName: string = "sim800l";
}

export interface Sim800lConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    on_call_connected?: object[];
    on_call_disconnected?: object[];
    on_incoming_call?: object[];
    on_sms_received?: object[];
    on_ussd_received?: object[];
    uart_id?: ID;
    update_interval?: any;
}

export class Sim800lBinarySensor extends EsphomeComponent<Sim800lBinarySensorConfig> {
    componentName: string = "sim800l.binary_sensor";
}

export interface Sim800lBinarySensorConfigRegistered extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface Sim800lBinarySensorConfig {
    registered?: Sim800lBinarySensorConfigRegistered;
    sim800l_id?: ID;
}

export class Sim800lSensor extends EsphomeComponent<Sim800lSensorConfig> {
    componentName: string = "sim800l.sensor";
}

export interface Sim800lSensorConfigRssi extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sim800lSensorConfig {
    rssi?: Sim800lSensorConfigRssi;
    sim800l_id?: ID;
}
