/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: kamstrup_kmp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/kamstrup_kmp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class KamstrupKmpSensor extends EsphomeComponent<KamstrupKmpSensorConfig> {
    componentName: string = "kamstrup_kmp.sensor";
}

export interface KamstrupKmpSensorConfigCustom extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    command: string;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KamstrupKmpSensorConfigFlow extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KamstrupKmpSensorConfigHeatEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KamstrupKmpSensorConfigPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KamstrupKmpSensorConfigTemp1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KamstrupKmpSensorConfigTemp2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KamstrupKmpSensorConfigTempDiff extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KamstrupKmpSensorConfigVolume extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface KamstrupKmpSensorConfig extends CoreCOMPONENT_SCHEMA {
    custom?: KamstrupKmpSensorConfigCustom[];
    flow?: KamstrupKmpSensorConfigFlow;
    heat_energy?: KamstrupKmpSensorConfigHeatEnergy;
    id?: ID;
    power?: KamstrupKmpSensorConfigPower;
    temp1?: KamstrupKmpSensorConfigTemp1;
    temp2?: KamstrupKmpSensorConfigTemp2;
    temp_diff?: KamstrupKmpSensorConfigTempDiff;
    uart_id?: ID;
    update_interval?: any;
    volume?: KamstrupKmpSensorConfigVolume;
}
