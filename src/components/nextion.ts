/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: nextion.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/nextion
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";

export class NextionSensor extends EsphomeComponent<NextionSensorConfig> {
    componentName: string = "nextion.sensor";
}

export interface NextionSensorCONFIG_SENSOR_COMPONENT_SCHEMA {
    nextion_id?: ID;
    background_color?: ID;
    foreground_color?: ID;
    visible?: boolean;
    component_name?: any;
    variable_name?: any;
    font_id?: number;
}

export type NextionSensorConfig = {
        id?: any;
        accuracy_decimals?: any;
        precision?: number;
        wave_channel_id?: any;
        component_id?: number;
        wave_max_length?: number;
        wave_max_value?: number;
        waveform_send_last_value?: boolean;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & NextionSensorCONFIG_SENSOR_COMPONENT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class NextionBinarySensor extends EsphomeComponent<NextionBinarySensorConfig> {
    componentName: string = "nextion.binary_sensor";
}

export interface NextionBinarySensorConfig {
    id?: any;
    page_id?: number;
    component_id?: number;
    update_interval?: any;
    nextion_id?: ID;
    background_color?: ID;
    foreground_color?: ID;
    visible?: boolean;
    component_name?: any;
    variable_name?: any;
    name?: any;
}

export class NextionDisplay extends EsphomeComponent<NextionDisplayConfig> {
    componentName: string = "nextion.display";
}

export type NextionDisplayConfig = {
        id?: ID;
        tft_url?: string;
        brightness?: any;
        on_setup?: object[];
        on_sleep?: object[];
        on_wake?: object[];
        on_page?: object[];
        touch_sleep_timeout?: number;
        wake_up_page?: number;
        auto_wake_on_touch?: boolean;
        update_interval?: any;
        uart_id?: ID;
    } & DisplayBASIC_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;

export class NextionSwitch extends EsphomeComponent<NextionSwitchConfig> {
    componentName: string = "nextion.switch";
}

export type NextionSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface NextionSwitchConfig extends NextionSensorCONFIG_SENSOR_COMPONENT_SCHEMA {
    restore_mode?: NextionSwitchConfigRestoreMode;
    id?: ID;
    update_interval?: any;
    foreground_pressed_color?: ID;
    background_pressed_color?: ID;
    name?: any;
}

export class NextionTextSensor extends EsphomeComponent<NextionTextSensorConfig> {
    componentName: string = "nextion.text_sensor";
}

export interface NextionTextSensorConfig {
    id?: any;
    update_interval?: any;
    nextion_id?: ID;
    background_color?: ID;
    foreground_color?: ID;
    visible?: boolean;
    component_name: string;
    font_id?: number;
    name?: any;
}
