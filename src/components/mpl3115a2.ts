/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: mpl3115a2.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mpl3115a2
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mpl3115a2Sensor extends EsphomeComponent<Mpl3115a2SensorConfig> {
    componentName: string = "mpl3115a2.sensor";
}

export interface Mpl3115a2SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Mpl3115a2SensorConfigAltitude extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Mpl3115a2SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Mpl3115a2SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pressure?: Mpl3115a2SensorConfigPressure;
    altitude?: Mpl3115a2SensorConfigAltitude;
    temperature?: Mpl3115a2SensorConfigTemperature;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
