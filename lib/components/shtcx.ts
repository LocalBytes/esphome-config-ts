/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: shtcx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/shtcx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class ShtcxSensor extends BaseComponent<ShtcxSensorConfig> {
    componentName: string = "shtcx.sensor";
}

export interface ShtcxSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature: ShtcxSensorConfigTemperature;
    humidity: ShtcxSensorConfigHumidity;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface ShtcxSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface ShtcxSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
