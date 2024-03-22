/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pzem004t.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pzem004t
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pzem004tSensor extends BaseComponent<Pzem004tSensorConfig> {
    componentName: string = "pzem004t.sensor";
}

export interface Pzem004tSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voltage?: Pzem004tSensorConfigVoltage;
    current?: Pzem004tSensorConfigCurrent;
    power?: Pzem004tSensorConfigPower;
    energy?: Pzem004tSensorConfigEnergy;
    update_interval?: any;
    uart_id?: ID;
}

export interface Pzem004tSensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Pzem004tSensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Pzem004tSensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Pzem004tSensorConfigEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
