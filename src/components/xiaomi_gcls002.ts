/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_gcls002.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_gcls002
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiGcls002Sensor extends EsphomeComponent<XiaomiGcls002SensorConfig> {
    componentName: string = "xiaomi_gcls002.sensor";
}

export interface XiaomiGcls002SensorConfigConductivity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiGcls002SensorConfigIlluminance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiGcls002SensorConfigMoisture extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiGcls002SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiGcls002SensorConfig = {
        conductivity?: XiaomiGcls002SensorConfigConductivity;
        id?: ID;
        illuminance?: XiaomiGcls002SensorConfigIlluminance;
        mac_address: string;
        moisture?: XiaomiGcls002SensorConfigMoisture;
        temperature?: XiaomiGcls002SensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
