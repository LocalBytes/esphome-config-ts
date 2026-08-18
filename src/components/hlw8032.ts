/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hlw8032.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hlw8032
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Hlw8032Sensor extends EsphomeComponent<Hlw8032SensorConfig> {
    componentName: string = "hlw8032.sensor";
}

export interface Hlw8032SensorConfigApparentPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hlw8032SensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hlw8032SensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hlw8032SensorConfigPowerFactor extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hlw8032SensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hlw8032SensorConfig extends CoreCOMPONENTSCHEMA {
    apparent_power?: Hlw8032SensorConfigApparentPower;
    current?: Hlw8032SensorConfigCurrent;
    current_resistor?: any;
    id?: ID;
    power?: Hlw8032SensorConfigPower;
    power_factor?: Hlw8032SensorConfigPowerFactor;
    uart_id?: ID;
    voltage?: Hlw8032SensorConfigVoltage;
    voltage_divider?: any;
}
