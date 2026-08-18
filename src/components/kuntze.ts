/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: kuntze.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/kuntze
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class KuntzeSensor extends EsphomeComponent<KuntzeSensorConfig> {
    componentName: string = "kuntze.sensor";
}

export interface KuntzeSensorConfigDis1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigDis2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigEc extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigOci extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigPh extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigRedox extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    dis1?: KuntzeSensorConfigDis1;
    dis2?: KuntzeSensorConfigDis2;
    ec?: KuntzeSensorConfigEc;
    id?: ID;
    modbus_id?: ID;
    oci?: KuntzeSensorConfigOci;
    ph?: KuntzeSensorConfigPh;
    redox?: KuntzeSensorConfigRedox;
    temperature?: KuntzeSensorConfigTemperature;
    update_interval?: any;
}
