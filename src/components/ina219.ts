/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina219.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina219
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ina219Sensor extends EsphomeComponent<Ina219SensorConfig> {
    componentName: string = "ina219.sensor";
}

export interface Ina219SensorConfigBusVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina219SensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina219SensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina219SensorConfigShuntVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina219SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    bus_voltage?: Ina219SensorConfigBusVoltage;
    current?: Ina219SensorConfigCurrent;
    i2c_id?: ID;
    id?: ID;
    max_current?: any;
    max_voltage?: any;
    power?: Ina219SensorConfigPower;
    shunt_resistance?: any;
    shunt_voltage?: Ina219SensorConfigShuntVoltage;
    update_interval?: any;
}
