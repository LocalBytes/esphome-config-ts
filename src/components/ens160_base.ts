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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Ens160Base extends EsphomeComponent {
    componentName: string = "ens160_base";
}

export interface Ens160BaseCONFIGSCHEMABASEAqi extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
}

export interface Ens160BaseCONFIGSCHEMABASECompensation {
    humidity: ID;
    temperature: ID;
}

export interface Ens160BaseCONFIGSCHEMABASEEco2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ens160BaseCONFIGSCHEMABASETvoc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ens160BaseCONFIGSCHEMABASE extends CoreCOMPONENTSCHEMA {
    aqi?: Ens160BaseCONFIGSCHEMABASEAqi;
    compensation?: Ens160BaseCONFIGSCHEMABASECompensation;
    eco2?: Ens160BaseCONFIGSCHEMABASEEco2;
    tvoc?: Ens160BaseCONFIGSCHEMABASETvoc;
    update_interval?: any;
}
