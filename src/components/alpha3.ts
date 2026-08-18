/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: alpha3.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/alpha3
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Alpha3Sensor extends EsphomeComponent<Alpha3SensorConfig> {
    componentName: string = "alpha3.sensor";
}

export interface Alpha3SensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Alpha3SensorConfigFlow extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Alpha3SensorConfigHead extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Alpha3SensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Alpha3SensorConfigSpeed extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Alpha3SensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Alpha3SensorConfig extends CoreCOMPONENTSCHEMA {
    ble_client_id?: ID;
    current?: Alpha3SensorConfigCurrent;
    flow?: Alpha3SensorConfigFlow;
    head?: Alpha3SensorConfigHead;
    id?: ID;
    power?: Alpha3SensorConfigPower;
    speed?: Alpha3SensorConfigSpeed;
    update_interval?: any;
    voltage?: Alpha3SensorConfigVoltage;
}
