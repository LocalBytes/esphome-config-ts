/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gpio.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gpio
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { OutputBINARY_OUTPUT_SCHEMA } from "./output.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class GpioBinarySensor extends BaseComponent<GpioBinarySensorConfig> {
    componentName: string = "gpio.binary_sensor";
}

export interface GpioBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    pin: Pin;
}

export class GpioOutput extends BaseComponent<GpioOutputConfig> {
    componentName: string = "gpio.output";
}

export interface GpioOutputConfig extends OutputBINARY_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id: string;
    pin: Pin;
}

export class GpioSwitch extends BaseComponent<GpioSwitchConfig> {
    componentName: string = "gpio.switch";
}

export interface GpioSwitchConfig extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    restore_mode?: GpioSwitchConfigRestoreMode;
    id?: ID;
    pin: Pin;
    interlock?: ID[];
    interlock_wait_time?: GpioSwitchConfigInterlockWaitTime;
}

export type GpioSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface GpioSwitchConfigInterlockWaitTime extends CorePositiveTimePeriodMilliseconds {
}
