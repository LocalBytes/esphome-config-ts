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
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class NextionBinarySensor extends EsphomeComponent<NextionBinarySensorConfig> {
    componentName: string = "nextion.binary_sensor";
}

export interface NextionBinarySensorCONFIG_BINARY_SENSOR_SCHEMA {
    background_color?: ID;
    component_name?: any;
    foreground_color?: ID;
    nextion_id?: ID;
    variable_name?: any;
    visible?: boolean;
}

export type NextionBinarySensorConfig = {
        component_id?: number;
        id?: any;
        page_id?: number;
        update_interval?: any;
        nextion_id?: ID;
        component_name?: any;
        variable_name?: any;
        background_color?: any;
        foreground_color?: any;
        visible?: any;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & NextionBinarySensorCONFIG_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class NextionDisplay extends EsphomeComponent<NextionDisplayConfig> {
    componentName: string = "nextion.display";
}

export type NextionDisplayConfigCommandSpacing = CorePositiveTimePeriodMilliseconds;
export type NextionDisplayConfigMaxQueueAge = CorePositiveTimePeriodMilliseconds;
export type NextionDisplayConfigStartupOverrideMs = CorePositiveTimePeriodMilliseconds;
export type NextionDisplayConfigTftUploadHttpTimeout = CorePositiveTimePeriodMilliseconds;
export type NextionDisplayConfigTftUploadWatchdogTimeout = CorePositiveTimePeriodMilliseconds;
export type NextionDisplayConfig = {
        auto_wake_on_touch?: boolean;
        brightness?: any;
        command_spacing?: NextionDisplayConfigCommandSpacing;
        dump_device_info?: boolean;
        exit_reparse_on_start?: boolean;
        id?: ID;
        max_commands_per_loop?: number;
        max_queue_age?: NextionDisplayConfigMaxQueueAge;
        max_queue_size?: number;
        on_buffer_overflow?: object[];
        on_custom_binary_sensor?: object[];
        on_custom_sensor?: object[];
        on_custom_switch?: object[];
        on_custom_text_sensor?: object[];
        on_page?: object[];
        on_setup?: object[];
        on_sleep?: object[];
        on_touch?: object[];
        on_wake?: object[];
        skip_connection_handshake?: boolean;
        start_up_page?: number;
        startup_override_ms?: NextionDisplayConfigStartupOverrideMs;
        tft_upload_http_retries?: number;
        tft_upload_http_timeout?: NextionDisplayConfigTftUploadHttpTimeout;
        tft_upload_watchdog_timeout?: NextionDisplayConfigTftUploadWatchdogTimeout;
        tft_url?: any;
        touch_sleep_timeout?: number;
        uart_id?: ID;
        update_interval?: any;
        wake_up_page?: number;
        lambda?: any;
    } & DisplayBASIC_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;

export class NextionSensor extends EsphomeComponent<NextionSensorConfig> {
    componentName: string = "nextion.sensor";
}

export type NextionSensorConfig = {
        accuracy_decimals?: any;
        component_id?: number;
        id?: any;
        precision?: number;
        update_interval?: any;
        wave_channel_id?: any;
        wave_max_length?: number;
        wave_max_value?: number;
        waveform_send_last_value?: boolean;
    } & Sensor_SENSOR_SCHEMA & NextionSensorCONFIG_SENSOR_COMPONENT_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface NextionSensorCONFIG_SENSOR_COMPONENT_SCHEMA extends NextionBinarySensorCONFIG_BINARY_SENSOR_SCHEMA {
    font_id?: number;
}

export class NextionSwitch extends EsphomeComponent<NextionSwitchConfig> {
    componentName: string = "nextion.switch";
}

export interface NextionSwitchConfig extends NextionSensorCONFIG_SENSOR_COMPONENT_SCHEMA {
    background_pressed_color?: ID;
    foreground_pressed_color?: ID;
    id?: ID;
    update_interval?: any;
    nextion_id?: ID;
    component_name?: any;
    variable_name?: any;
    background_color?: any;
    foreground_color?: any;
    visible?: any;
}

export class NextionTextSensor extends EsphomeComponent<NextionTextSensorConfig> {
    componentName: string = "nextion.text_sensor";
}

export interface NextionTextSensorConfig {
    background_color?: ID;
    component_name: string;
    font_id?: number;
    foreground_color?: ID;
    id?: any;
    nextion_id?: ID;
    update_interval?: any;
    visible?: boolean;
}
