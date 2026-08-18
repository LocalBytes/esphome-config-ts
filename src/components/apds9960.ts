/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: apds9960.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/apds9960
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Apds9960 extends EsphomeComponent<Apds9960Config> {
    componentName: string = "apds9960";
}

export type Apds9960ConfigAmbientLightGain = '1x' | '4x' | '16x' | '64x';
export type Apds9960ConfigGestureGain = '1x' | '2x' | '4x' | '8x';
export type Apds9960ConfigGestureLedDrive = '100ma' | '50ma' | '25ma' | '12.5ma';
export type Apds9960ConfigGestureWaitTime = '0ms' | '2.8ms' | '5.6ms' | '8.4ms' | '14ms' | '22.4ms' | '30.8ms' | '39.2ms';
export type Apds9960ConfigLedDrive = '100ma' | '50ma' | '25ma' | '12.5ma';
export type Apds9960ConfigProximityGain = '1x' | '2x' | '4x' | '8x';

export interface Apds9960Config extends CoreCOMPONENT_SCHEMA {
    address?: any;
    ambient_light_gain?: Apds9960ConfigAmbientLightGain;
    gesture_gain?: Apds9960ConfigGestureGain;
    gesture_led_drive?: Apds9960ConfigGestureLedDrive;
    gesture_wait_time?: Apds9960ConfigGestureWaitTime;
    i2c_id?: ID;
    id?: ID;
    led_drive?: Apds9960ConfigLedDrive;
    proximity_gain?: Apds9960ConfigProximityGain;
    update_interval?: any;
}

export class Apds9960BinarySensor extends EsphomeComponent<Apds9960BinarySensorConfig> {
    componentName: string = "apds9960.binary_sensor";
}

export type Apds9960BinarySensorConfigDirection = 'up' | 'down' | 'left' | 'right';

export interface Apds9960BinarySensorConfig extends BinarySensor_BINARY_SENSOR_SCHEMA {
    apds9960_id?: ID;
    device_class?: any;
    direction: Apds9960BinarySensorConfigDirection;
}

export class Apds9960Sensor extends EsphomeComponent<Apds9960SensorConfig> {
    componentName: string = "apds9960.sensor";
}

export type Apds9960SensorConfigType = 'clear' | 'red' | 'green' | 'blue' | 'proximity';

export interface Apds9960SensorConfig extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    apds9960_id?: ID;
    icon?: any;
    state_class?: any;
    type: Apds9960SensorConfigType;
    unit_of_measurement?: any;
}
