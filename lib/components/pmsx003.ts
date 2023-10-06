/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pmsx003.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pmsx003
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pmsx003Sensor extends BaseComponent<Pmsx003SensorConfig> {
    componentName: string = "pmsx003.sensor";
}

export interface Pmsx003SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    type: Pmsx003SensorConfigType;
    pm_1_0_std?: Pmsx003SensorConfigPm_1_0Std;
    pm_2_5_std?: Pmsx003SensorConfigPm_2_5Std;
    pm_10_0_std?: Pmsx003SensorConfigPm_10_0Std;
    pm_1_0?: Pmsx003SensorConfigPm_1_0;
    pm_2_5?: Pmsx003SensorConfigPm_2_5;
    pm_10_0?: Pmsx003SensorConfigPm_10_0;
    pm_0_3um?: Pmsx003SensorConfigPm_0_3um;
    pm_0_5um?: Pmsx003SensorConfigPm_0_5um;
    pm_1_0um?: Pmsx003SensorConfigPm_1_0um;
    pm_2_5um?: Pmsx003SensorConfigPm_2_5um;
    pm_5_0um?: Pmsx003SensorConfigPm_5_0um;
    pm_10_0um?: Pmsx003SensorConfigPm_10_0um;
    temperature?: Pmsx003SensorConfigTemperature;
    humidity?: Pmsx003SensorConfigHumidity;
    formaldehyde?: Pmsx003SensorConfigFormaldehyde;
    update_interval?: any;
    uart_id?: ID;
}

export type Pmsx003SensorConfigType = 'PMSX003' | 'PMS5003T' | 'PMS5003ST' | 'PMS5003S';

export interface Pmsx003SensorConfigPm_1_0Std extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Pmsx003SensorConfigPm_2_5Std extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Pmsx003SensorConfigPm_10_0Std extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Pmsx003SensorConfigPm_1_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmsx003SensorConfigPm_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmsx003SensorConfigPm_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmsx003SensorConfigPm_0_3um extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface Pmsx003SensorConfigPm_0_5um extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface Pmsx003SensorConfigPm_1_0um extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface Pmsx003SensorConfigPm_2_5um extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface Pmsx003SensorConfigPm_5_0um extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface Pmsx003SensorConfigPm_10_0um extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface Pmsx003SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Pmsx003SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Pmsx003SensorConfigFormaldehyde extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}
