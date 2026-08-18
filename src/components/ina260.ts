/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina260.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina260
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ina260Sensor extends EsphomeComponent<Ina260SensorConfig> {
    componentName: string = "ina260.sensor";
}

export interface Ina260SensorConfigBusVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina260SensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina260SensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina260SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    bus_voltage?: Ina260SensorConfigBusVoltage;
    current?: Ina260SensorConfigCurrent;
    i2c_id?: ID;
    id?: ID;
    power?: Ina260SensorConfigPower;
    update_interval?: any;
}
