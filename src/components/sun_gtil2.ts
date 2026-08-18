/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sun_gtil2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sun_gtil2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class SunGtil2 extends EsphomeComponent<SunGtil2Config> {
    componentName: string = "sun_gtil2";
}

export interface SunGtil2Config extends CoreCOMPONENTSCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class SunGtil2Sensor extends EsphomeComponent<SunGtil2SensorConfig> {
    componentName: string = "sun_gtil2.sensor";
}

export interface SunGtil2SensorConfigAcPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SunGtil2SensorConfigAcVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SunGtil2SensorConfigDcPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SunGtil2SensorConfigDcVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SunGtil2SensorConfigLimiterPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SunGtil2SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SunGtil2SensorConfig extends CoreCOMPONENTSCHEMA {
    ac_power?: SunGtil2SensorConfigAcPower;
    ac_voltage?: SunGtil2SensorConfigAcVoltage;
    dc_power?: SunGtil2SensorConfigDcPower;
    dc_voltage?: SunGtil2SensorConfigDcVoltage;
    limiter_power?: SunGtil2SensorConfigLimiterPower;
    sun_gtil2_id?: ID;
    temperature?: SunGtil2SensorConfigTemperature;
}

export class SunGtil2TextSensor extends EsphomeComponent<SunGtil2TextSensorConfig> {
    componentName: string = "sun_gtil2.text_sensor";
}

export interface SunGtil2TextSensorConfigSerialNumber extends TextSensorTEXTSENSORSCHEMA {
    id?: any;
}

export interface SunGtil2TextSensorConfigState extends TextSensorTEXTSENSORSCHEMA {
    id?: any;
}

export interface SunGtil2TextSensorConfig extends CoreCOMPONENTSCHEMA {
    serial_number?: SunGtil2TextSensorConfigSerialNumber;
    state?: SunGtil2TextSensorConfigState;
    sun_gtil2_id?: ID;
}
