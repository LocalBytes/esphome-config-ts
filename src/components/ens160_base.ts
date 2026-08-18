/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ens160_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ens160_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Ens160Base extends EsphomeComponent {
    componentName: string = "ens160_base";
}

export interface Ens160BaseCONFIG_SCHEMA_BASEAqi extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
}

export interface Ens160BaseCONFIG_SCHEMA_BASECompensation {
    humidity: ID;
    temperature: ID;
}

export interface Ens160BaseCONFIG_SCHEMA_BASEEco2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ens160BaseCONFIG_SCHEMA_BASETvoc extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ens160BaseCONFIG_SCHEMA_BASE extends CoreCOMPONENT_SCHEMA {
    aqi?: Ens160BaseCONFIG_SCHEMA_BASEAqi;
    compensation?: Ens160BaseCONFIG_SCHEMA_BASECompensation;
    eco2?: Ens160BaseCONFIG_SCHEMA_BASEEco2;
    tvoc?: Ens160BaseCONFIG_SCHEMA_BASETvoc;
    update_interval?: any;
}
