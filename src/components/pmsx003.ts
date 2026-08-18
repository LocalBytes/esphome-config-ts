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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Pmsx003Sensor extends EsphomeComponent<Pmsx003SensorConfig> {
    componentName: string = "pmsx003.sensor";
}

export interface Pmsx003SensorConfigFormaldehyde extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm03um extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm05um extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm100Std extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm100um extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm10Std extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm10um extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm25Std extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm25um extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigPm50um extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsx003SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Pmsx003SensorConfigType = 'PMS1003' | 'PMS3003' | 'PMSX003' | 'PMS5003S' | 'PMS5003T' | 'PMS5003ST' | 'PMS9003M';

export interface Pmsx003SensorConfig extends CoreCOMPONENTSCHEMA {
    formaldehyde?: Pmsx003SensorConfigFormaldehyde;
    humidity?: Pmsx003SensorConfigHumidity;
    id?: ID;
    pm_0_3um?: Pmsx003SensorConfigPm03um;
    pm_0_5um?: Pmsx003SensorConfigPm05um;
    pm_10_0?: Pmsx003SensorConfigPm100;
    pm_10_0_std?: Pmsx003SensorConfigPm100Std;
    pm_10_0um?: Pmsx003SensorConfigPm100um;
    pm_1_0?: Pmsx003SensorConfigPm10;
    pm_1_0_std?: Pmsx003SensorConfigPm10Std;
    pm_1_0um?: Pmsx003SensorConfigPm10um;
    pm_2_5?: Pmsx003SensorConfigPm25;
    pm_2_5_std?: Pmsx003SensorConfigPm25Std;
    pm_2_5um?: Pmsx003SensorConfigPm25um;
    pm_5_0um?: Pmsx003SensorConfigPm50um;
    temperature?: Pmsx003SensorConfigTemperature;
    type: Pmsx003SensorConfigType;
    uart_id?: ID;
    update_interval?: any;
}
