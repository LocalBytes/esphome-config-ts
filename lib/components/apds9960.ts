/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: apds9960.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/apds9960
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Apds9960 extends BaseComponent<Apds9960Config> {
    componentName: string = "apds9960";
}

export interface Apds9960Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    led_drive?: Apds9960ConfigLedDrive;
    proximity_gain?: Apds9960ConfigProximityGain;
    ambient_light_gain?: Apds9960ConfigAmbientLightGain;
    gesture_led_drive?: Apds9960ConfigGestureLedDrive;
    gesture_gain?: Apds9960ConfigGestureGain;
    gesture_wait_time?: Apds9960ConfigGestureWaitTime;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export type Apds9960ConfigLedDrive = '100ma' | '50ma' | '25ma' | '12.5ma';
export type Apds9960ConfigProximityGain = '1x' | '2x' | '4x' | '8x';
export type Apds9960ConfigAmbientLightGain = '1x' | '4x' | '16x' | '64x';
export type Apds9960ConfigGestureLedDrive = '100ma' | '50ma' | '25ma' | '12.5ma';
export type Apds9960ConfigGestureGain = '1x' | '2x' | '4x' | '8x';
export type Apds9960ConfigGestureWaitTime = '0ms' | '2.8ms' | '5.6ms' | '8.4ms' | '14ms' | '22.4ms' | '30.8ms' | '39.2ms';

export class Apds9960Sensor extends BaseComponent<Apds9960SensorConfig> {
    componentName: string = "apds9960.sensor";
}

export interface Apds9960SensorConfig extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    type: Apds9960SensorConfigType;
    apds9960_id?: ID;
}

export type Apds9960SensorConfigType = 'clear' | 'red' | 'green' | 'blue' | 'proximity';

export class Apds9960BinarySensor extends BaseComponent<Apds9960BinarySensorConfig> {
    componentName: string = "apds9960.binary_sensor";
}

export interface Apds9960BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
    apds9960_id?: ID;
    direction: Apds9960BinarySensorConfigDirection;
}

export type Apds9960BinarySensorConfigDirection = 'up' | 'down' | 'left' | 'right';
