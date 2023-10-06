/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ccs811.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ccs811
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ccs811Sensor extends BaseComponent<Ccs811SensorConfig> {
    componentName: string = "ccs811.sensor";
}

export interface Ccs811SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    eco2: Ccs811SensorConfigEco2;
    tvoc: Ccs811SensorConfigTvoc;
    version?: Ccs811SensorConfigVersion;
    baseline?: any;
    temperature?: ID;
    humidity?: ID;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Ccs811SensorConfigEco2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ccs811SensorConfigTvoc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ccs811SensorConfigVersion extends TextSensorTEXT_SENSOR_SCHEMA {
    icon?: any;
}
