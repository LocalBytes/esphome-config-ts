/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm300d2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm300d2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Sm300d2Sensor extends EsphomeComponent<Sm300d2SensorConfig> {
    componentName: string = "sm300d2.sensor";
}

export interface Sm300d2SensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sm300d2SensorConfigFormaldehyde extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sm300d2SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sm300d2SensorConfigPm100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sm300d2SensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sm300d2SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sm300d2SensorConfigTvoc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sm300d2SensorConfig extends CoreCOMPONENTSCHEMA {
    co2?: Sm300d2SensorConfigCo2;
    formaldehyde?: Sm300d2SensorConfigFormaldehyde;
    humidity?: Sm300d2SensorConfigHumidity;
    id?: ID;
    pm_10_0?: Sm300d2SensorConfigPm100;
    pm_2_5?: Sm300d2SensorConfigPm25;
    temperature?: Sm300d2SensorConfigTemperature;
    tvoc?: Sm300d2SensorConfigTvoc;
    uart_id?: ID;
    update_interval?: any;
}
