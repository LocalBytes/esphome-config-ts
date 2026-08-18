/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pzemac.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pzemac
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Pzemac extends EsphomeComponent {
    componentName: string = "pzemac";
}

export class PzemacSensor extends EsphomeComponent<PzemacSensorConfig> {
    componentName: string = "pzemac.sensor";
}

export interface PzemacSensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PzemacSensorConfigEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PzemacSensorConfigFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PzemacSensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PzemacSensorConfigPowerFactor extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PzemacSensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PzemacSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    current?: PzemacSensorConfigCurrent;
    energy?: PzemacSensorConfigEnergy;
    frequency?: PzemacSensorConfigFrequency;
    id?: ID;
    modbus_id?: ID;
    power?: PzemacSensorConfigPower;
    power_factor?: PzemacSensorConfigPowerFactor;
    update_interval?: any;
    voltage?: PzemacSensorConfigVoltage;
}
