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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class KuntzeSensor extends EsphomeComponent<KuntzeSensorConfig> {
    componentName: string = "kuntze.sensor";
}

export interface KuntzeSensorConfigDis1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigDis2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigEc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigOci extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigPh extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigRedox extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KuntzeSensorConfig extends CoreCOMPONENTSCHEMA {
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
