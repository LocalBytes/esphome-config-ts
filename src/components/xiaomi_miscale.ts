/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_miscale.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_miscale
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiMiscaleSensor extends EsphomeComponent<XiaomiMiscaleSensorConfig> {
    componentName: string = "xiaomi_miscale.sensor";
}

export interface XiaomiMiscaleSensorConfigImpedance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiMiscaleSensorConfigWeight extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiMiscaleSensorConfig = {
        clear_impedance?: boolean;
        id?: ID;
        impedance?: XiaomiMiscaleSensorConfigImpedance;
        mac_address: string;
        weight?: XiaomiMiscaleSensorConfigWeight;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
