/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: kmeteriso.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/kmeteriso
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class KmeterisoSensor extends EsphomeComponent<KmeterisoSensorConfig> {
    componentName: string = "kmeteriso.sensor";
}

export interface KmeterisoSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface KmeterisoSensorConfigInternalTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface KmeterisoSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: KmeterisoSensorConfigTemperature;
    internal_temperature?: KmeterisoSensorConfigInternalTemperature;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
