/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mics_4514.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mics_4514
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mics_4514Sensor extends EsphomeComponent<Mics_4514SensorConfig> {
    componentName: string = "mics_4514.sensor";
}

export interface Mics_4514SensorConfigAmmonia extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics_4514SensorConfigCarbonMonoxide extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics_4514SensorConfigEthanol extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics_4514SensorConfigHydrogen extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics_4514SensorConfigMethane extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics_4514SensorConfigNitrogenDioxide extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics_4514SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    ammonia?: Mics_4514SensorConfigAmmonia;
    carbon_monoxide?: Mics_4514SensorConfigCarbonMonoxide;
    ethanol?: Mics_4514SensorConfigEthanol;
    hydrogen?: Mics_4514SensorConfigHydrogen;
    i2c_id?: ID;
    id?: ID;
    methane?: Mics_4514SensorConfigMethane;
    nitrogen_dioxide?: Mics_4514SensorConfigNitrogenDioxide;
    update_interval?: any;
}
