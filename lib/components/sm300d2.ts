/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm300d2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm300d2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sm300d2Sensor extends BaseComponent<Sm300d2SensorConfig> {
    componentName: string = "sm300d2.sensor";
}

export interface Sm300d2SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    co2?: Sm300d2SensorConfigCo2;
    formaldehyde?: Sm300d2SensorConfigFormaldehyde;
    tvoc?: Sm300d2SensorConfigTvoc;
    pm_2_5?: Sm300d2SensorConfigPm_2_5;
    pm_10_0?: Sm300d2SensorConfigPm_10_0;
    temperature?: Sm300d2SensorConfigTemperature;
    humidity?: Sm300d2SensorConfigHumidity;
    update_interval?: any;
    uart_id?: ID;
}

export interface Sm300d2SensorConfigCo2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sm300d2SensorConfigFormaldehyde extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Sm300d2SensorConfigTvoc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sm300d2SensorConfigPm_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sm300d2SensorConfigPm_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sm300d2SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sm300d2SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
