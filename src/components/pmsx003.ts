/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pmsx003.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pmsx003
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pmsx003Sensor extends EsphomeComponent<Pmsx003SensorConfig> {
    componentName: string = "pmsx003.sensor";
}

export interface Pmsx003SensorConfigFormaldehyde extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_0_3um extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_0_5um extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_10_0Std extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_10_0um extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_1_0Std extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_1_0um extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_2_5Std extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_2_5um extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm_5_0um extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Pmsx003SensorConfigType = 'PMS1003' | 'PMS3003' | 'PMSX003' | 'PMS5003S' | 'PMS5003T' | 'PMS5003ST' | 'PMS9003M';

export interface Pmsx003SensorConfig extends CoreCOMPONENT_SCHEMA {
    formaldehyde?: Pmsx003SensorConfigFormaldehyde;
    humidity?: Pmsx003SensorConfigHumidity;
    id?: ID;
    pm_0_3um?: Pmsx003SensorConfigPm_0_3um;
    pm_0_5um?: Pmsx003SensorConfigPm_0_5um;
    pm_10_0?: Pmsx003SensorConfigPm_10_0;
    pm_10_0_std?: Pmsx003SensorConfigPm_10_0Std;
    pm_10_0um?: Pmsx003SensorConfigPm_10_0um;
    pm_1_0?: Pmsx003SensorConfigPm_1_0;
    pm_1_0_std?: Pmsx003SensorConfigPm_1_0Std;
    pm_1_0um?: Pmsx003SensorConfigPm_1_0um;
    pm_2_5?: Pmsx003SensorConfigPm_2_5;
    pm_2_5_std?: Pmsx003SensorConfigPm_2_5Std;
    pm_2_5um?: Pmsx003SensorConfigPm_2_5um;
    pm_5_0um?: Pmsx003SensorConfigPm_5_0um;
    temperature?: Pmsx003SensorConfigTemperature;
    type: Pmsx003SensorConfigType;
    uart_id?: ID;
    update_interval?: any;
}
