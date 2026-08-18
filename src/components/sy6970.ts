/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sy6970.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sy6970
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Sy6970 extends EsphomeComponent<Sy6970Config> {
    componentName: string = "sy6970";
}

export interface Sy6970Config extends CoreCOMPONENT_SCHEMA {
    address?: any;
    charge_current?: number;
    charge_enabled?: boolean;
    charge_voltage?: number;
    enable_adc?: boolean;
    enable_status_led?: boolean;
    i2c_id?: ID;
    id?: ID;
    input_current_limit?: number;
    precharge_current?: number;
    update_interval?: any;
}

export class Sy6970BinarySensor extends EsphomeComponent<Sy6970BinarySensorConfig> {
    componentName: string = "sy6970.binary_sensor";
}

export interface Sy6970BinarySensorConfigChargeDone extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    id?: any;
}

export interface Sy6970BinarySensorConfigCharging extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    id?: any;
}

export interface Sy6970BinarySensorConfigVbusConnected extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    id?: any;
}

export interface Sy6970BinarySensorConfig {
    charge_done?: Sy6970BinarySensorConfigChargeDone;
    charging?: Sy6970BinarySensorConfigCharging;
    sy6970_id?: ID;
    vbus_connected?: Sy6970BinarySensorConfigVbusConnected;
}

export class Sy6970Sensor extends EsphomeComponent<Sy6970SensorConfig> {
    componentName: string = "sy6970.sensor";
}

export interface Sy6970SensorConfigBatteryVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sy6970SensorConfigChargeCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sy6970SensorConfigPrechargeCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sy6970SensorConfigSystemVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sy6970SensorConfigVbusVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sy6970SensorConfig {
    battery_voltage?: Sy6970SensorConfigBatteryVoltage;
    charge_current?: Sy6970SensorConfigChargeCurrent;
    precharge_current?: Sy6970SensorConfigPrechargeCurrent;
    sy6970_id?: ID;
    system_voltage?: Sy6970SensorConfigSystemVoltage;
    vbus_voltage?: Sy6970SensorConfigVbusVoltage;
}

export class Sy6970TextSensor extends EsphomeComponent<Sy6970TextSensorConfig> {
    componentName: string = "sy6970.text_sensor";
}

export interface Sy6970TextSensorConfigBusStatus extends TextSensor_TEXT_SENSOR_SCHEMA {
    id?: any;
}

export interface Sy6970TextSensorConfigChargeStatus extends TextSensor_TEXT_SENSOR_SCHEMA {
    id?: any;
}

export interface Sy6970TextSensorConfigNtcStatus extends TextSensor_TEXT_SENSOR_SCHEMA {
    id?: any;
}

export interface Sy6970TextSensorConfig {
    bus_status?: Sy6970TextSensorConfigBusStatus;
    charge_status?: Sy6970TextSensorConfigChargeStatus;
    ntc_status?: Sy6970TextSensorConfigNtcStatus;
    sy6970_id?: ID;
}
