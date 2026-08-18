/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sen6x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sen6x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sen6xSensor extends EsphomeComponent<Sen6xSensorConfig> {
    componentName: string = "sen6x.sensor";
}

export interface Sen6xSensorConfigCo2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigFormaldehyde extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigNox extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface Sen6xSensorConfigPm_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigPm_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigPm_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigPm_4_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Sen6xSensorConfigType = 'SEN62' | 'SEN63C' | 'SEN65' | 'SEN66' | 'SEN68' | 'SEN69C';

export interface Sen6xSensorConfigVoc extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface Sen6xSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    co2?: Sen6xSensorConfigCo2;
    formaldehyde?: Sen6xSensorConfigFormaldehyde;
    humidity?: Sen6xSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    nox?: Sen6xSensorConfigNox;
    pm_10_0?: Sen6xSensorConfigPm_10_0;
    pm_1_0?: Sen6xSensorConfigPm_1_0;
    pm_2_5?: Sen6xSensorConfigPm_2_5;
    pm_4_0?: Sen6xSensorConfigPm_4_0;
    temperature?: Sen6xSensorConfigTemperature;
    type?: Sen6xSensorConfigType;
    update_interval?: any;
    voc?: Sen6xSensorConfigVoc;
}
