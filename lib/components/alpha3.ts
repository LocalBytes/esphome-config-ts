/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: alpha3.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/alpha3
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Alpha3Sensor extends BaseComponent<Alpha3SensorConfig> {
    componentName: string = "alpha3.sensor";
}

export interface Alpha3SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    flow?: Alpha3SensorConfigFlow;
    head?: Alpha3SensorConfigHead;
    power?: Alpha3SensorConfigPower;
    current?: Alpha3SensorConfigCurrent;
    speed?: Alpha3SensorConfigSpeed;
    voltage?: Alpha3SensorConfigVoltage;
    ble_client_id?: ID;
    update_interval?: any;
}

export interface Alpha3SensorConfigFlow extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface Alpha3SensorConfigHead extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface Alpha3SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface Alpha3SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface Alpha3SensorConfigSpeed extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface Alpha3SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}
