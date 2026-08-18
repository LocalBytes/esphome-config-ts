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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Sen6xSensor extends EsphomeComponent<Sen6xSensorConfig> {
    componentName: string = "sen6x.sensor";
}

export interface Sen6xSensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigFormaldehyde extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigNox extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface Sen6xSensorConfigPm100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigPm10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigPm40 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen6xSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Sen6xSensorConfigType = 'SEN62' | 'SEN63C' | 'SEN65' | 'SEN66' | 'SEN68' | 'SEN69C';

export interface Sen6xSensorConfigVoc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface Sen6xSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    co2?: Sen6xSensorConfigCo2;
    formaldehyde?: Sen6xSensorConfigFormaldehyde;
    humidity?: Sen6xSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    nox?: Sen6xSensorConfigNox;
    pm_10_0?: Sen6xSensorConfigPm100;
    pm_1_0?: Sen6xSensorConfigPm10;
    pm_2_5?: Sen6xSensorConfigPm25;
    pm_4_0?: Sen6xSensorConfigPm40;
    temperature?: Sen6xSensorConfigTemperature;
    type?: Sen6xSensorConfigType;
    update_interval?: any;
    voc?: Sen6xSensorConfigVoc;
}
