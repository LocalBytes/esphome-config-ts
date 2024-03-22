/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pzemac.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pzemac
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class PzemacSensor extends BaseComponent<PzemacSensorConfig> {
    componentName: string = "pzemac.sensor";
}

export interface PzemacSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voltage?: PzemacSensorConfigVoltage;
    current?: PzemacSensorConfigCurrent;
    power?: PzemacSensorConfigPower;
    energy?: PzemacSensorConfigEnergy;
    frequency?: PzemacSensorConfigFrequency;
    power_factor?: PzemacSensorConfigPowerFactor;
    update_interval?: any;
    modbus_id?: ID;
    address?: any;
}

export interface PzemacSensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PzemacSensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PzemacSensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PzemacSensorConfigEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PzemacSensorConfigFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface PzemacSensorConfigPowerFactor extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export abstract class Pzemac extends BaseComponent {
    componentName: string = "pzemac";
}
