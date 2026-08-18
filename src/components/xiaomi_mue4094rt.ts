/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_mue4094rt.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_mue4094rt
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";

export class XiaomiMue4094rtBinarySensor extends EsphomeComponent<XiaomiMue4094rtBinarySensorConfig> {
    componentName: string = "xiaomi_mue4094rt.binary_sensor";
}

export type XiaomiMue4094rtBinarySensorConfigTimeout = CorePositiveTimePeriodMilliseconds;
export type XiaomiMue4094rtBinarySensorConfig = {
        device_class?: any;
        id?: any;
        mac_address: string;
        timeout?: XiaomiMue4094rtBinarySensorConfigTimeout;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
