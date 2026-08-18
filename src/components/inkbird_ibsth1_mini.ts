/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: inkbird_ibsth1_mini.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/inkbird_ibsth1_mini
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class InkbirdIbsth1MiniSensor extends EsphomeComponent<InkbirdIbsth1MiniSensorConfig> {
    componentName: string = "inkbird_ibsth1_mini.sensor";
}

export interface InkbirdIbsth1MiniSensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface InkbirdIbsth1MiniSensorConfigExternalTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface InkbirdIbsth1MiniSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface InkbirdIbsth1MiniSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type InkbirdIbsth1MiniSensorConfig = {
        battery_level?: InkbirdIbsth1MiniSensorConfigBatteryLevel;
        external_temperature?: InkbirdIbsth1MiniSensorConfigExternalTemperature;
        humidity?: InkbirdIbsth1MiniSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: InkbirdIbsth1MiniSensorConfigTemperature;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
