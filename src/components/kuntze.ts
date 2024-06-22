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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class KuntzeSensor extends EsphomeComponent<KuntzeSensorConfig> {
    componentName: string = "kuntze.sensor";
}

export interface KuntzeSensorConfigPh extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface KuntzeSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface KuntzeSensorConfigDis1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface KuntzeSensorConfigDis2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface KuntzeSensorConfigRedox extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface KuntzeSensorConfigEc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface KuntzeSensorConfigOci extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface KuntzeSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    ph?: KuntzeSensorConfigPh;
    temperature?: KuntzeSensorConfigTemperature;
    dis1?: KuntzeSensorConfigDis1;
    dis2?: KuntzeSensorConfigDis2;
    redox?: KuntzeSensorConfigRedox;
    ec?: KuntzeSensorConfigEc;
    oci?: KuntzeSensorConfigOci;
    update_interval?: any;
    modbus_id?: ID;
    address?: any;
}
