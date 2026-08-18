/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: template.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/template
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { AlarmControlPanel_ALARM_CONTROL_PANEL_SCHEMA } from "./alarm_control_panel.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Button_BUTTON_SCHEMA } from "./button.js";
import type { Cover_COVER_SCHEMA } from "./cover.js";
import type { Event_EVENT_SCHEMA } from "./event.js";
import type { Fan_FAN_SCHEMA } from "./fan.js";
import type { Lock_LOCK_SCHEMA } from "./lock.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { Select_SELECT_SCHEMA } from "./select.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { Text_TEXT_SCHEMA } from "./text.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { Valve_VALVE_SCHEMA } from "./valve.js";
import type { WaterHeater_WATER_HEATER_SCHEMA } from "./water_heater.js";

export class TemplateAlarmControlPanel extends EsphomeComponent<TemplateAlarmControlPanelConfig> {
    componentName: string = "template.alarm_control_panel";
}

export type TemplateAlarmControlPanelConfigArmingAwayTime = CorePositiveTimePeriodMilliseconds;
export type TemplateAlarmControlPanelConfigArmingHomeTime = CorePositiveTimePeriodMilliseconds;
export type TemplateAlarmControlPanelConfigArmingNightTime = CorePositiveTimePeriodMilliseconds;
export type TemplateAlarmControlPanelConfigBinarySensorsTriggerMode = 'DELAYED' | 'INSTANT' | 'DELAYED_FOLLOWER' | 'INSTANT_ALWAYS';

export interface TemplateAlarmControlPanelConfigBinarySensors {
    bypass_armed_home?: boolean;
    bypass_armed_night?: boolean;
    bypass_auto?: boolean;
    chime?: boolean;
    input: ID;
    trigger_mode?: TemplateAlarmControlPanelConfigBinarySensorsTriggerMode;
}

export type TemplateAlarmControlPanelConfigPendingTime = CorePositiveTimePeriodMilliseconds;
export type TemplateAlarmControlPanelConfigRestoreMode = 'ALWAYS_DISARMED' | 'RESTORE_DEFAULT_DISARMED';
export type TemplateAlarmControlPanelConfigTriggerTime = CorePositiveTimePeriodMilliseconds;
export type TemplateAlarmControlPanelConfig = {
        arming_away_time?: TemplateAlarmControlPanelConfigArmingAwayTime;
        arming_home_time?: TemplateAlarmControlPanelConfigArmingHomeTime;
        arming_night_time?: TemplateAlarmControlPanelConfigArmingNightTime;
        binary_sensors?: TemplateAlarmControlPanelConfigBinarySensors[];
        codes?: string[];
        id?: ID;
        pending_time?: TemplateAlarmControlPanelConfigPendingTime;
        requires_code_to_arm?: boolean;
        restore_mode?: TemplateAlarmControlPanelConfigRestoreMode;
        trigger_time?: TemplateAlarmControlPanelConfigTriggerTime;
    } & AlarmControlPanel_ALARM_CONTROL_PANEL_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateBinarySensor extends EsphomeComponent<TemplateBinarySensorConfig> {
    componentName: string = "template.binary_sensor";
}

export type TemplateBinarySensorConfig = {
        condition?: any;
        id?: any;
        lambda?: any;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateButton extends EsphomeComponent<TemplateButtonConfig> {
    componentName: string = "template.button";
}

export interface TemplateButtonConfig extends Button_BUTTON_SCHEMA {
    id?: ID;
}

export class TemplateCover extends EsphomeComponent<TemplateCoverConfig> {
    componentName: string = "template.cover";
}

export type TemplateCoverConfigRestoreMode = 'NO_RESTORE' | 'RESTORE' | 'RESTORE_AND_CALL';
export type TemplateCoverConfig = {
        assumed_state?: boolean;
        close_action?: object[];
        has_position?: boolean;
        id?: ID;
        lambda?: any;
        open_action?: object[];
        optimistic?: boolean;
        position_action?: object[];
        restore_mode?: TemplateCoverConfigRestoreMode;
        stop_action?: object[];
        tilt_action?: object[];
        tilt_lambda?: any;
        toggle_action?: object[];
    } & Cover_COVER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateDatetime extends EsphomeComponent<TemplateDatetimeConfig> {
    componentName: string = "template.datetime";
}

export type TemplateDatetimeConfig = TemplateDatetimeConfigDATE | TemplateDatetimeConfigDATETIME | TemplateDatetimeConfigTIME;
export type TemplateDatetimeConfigDATEType = 'DATE';

export interface TemplateDatetimeConfigDATE {
    type: "DATE" | "DATE";
    id?: ID;
    initial_value?: any;
    mqtt_id?: any;
    type?: TemplateDatetimeConfigDATEType;
}

export type TemplateDatetimeConfigDATETIMEType = 'DATETIME';

export interface TemplateDatetimeConfigDATETIME {
    type: "DATETIME" | "DATETIME";
    id?: ID;
    initial_value?: any;
    mqtt_id?: any;
    on_time?: object[];
    type?: TemplateDatetimeConfigDATETIMEType;
}

export type TemplateDatetimeConfigTIMEType = 'TIME';

export interface TemplateDatetimeConfigTIME {
    type: "TIME" | "TIME";
    id?: ID;
    initial_value?: any;
    mqtt_id?: any;
    on_time?: object[];
    type?: TemplateDatetimeConfigTIMEType;
}

export interface TemplateDatetime_BASE_SCHEMA extends CoreCOMPONENT_SCHEMA {
    lambda?: any;
    optimistic?: boolean;
    restore_value?: boolean;
    set_action?: object[];
    update_interval?: any;
}

export class TemplateEvent extends EsphomeComponent<TemplateEventConfig> {
    componentName: string = "template.event";
}

export interface TemplateEventConfig extends Event_EVENT_SCHEMA {
    event_types: string[];
    id?: any;
}

export class TemplateFan extends EsphomeComponent<TemplateFanConfig> {
    componentName: string = "template.fan";
}

export type TemplateFanConfig = {
        has_direction?: boolean;
        has_oscillating?: boolean;
        id?: ID;
        preset_modes?: any;
        speed_count?: number;
    } & Fan_FAN_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateLock extends EsphomeComponent<TemplateLockConfig> {
    componentName: string = "template.lock";
}

export type TemplateLockConfig = {
        assumed_state?: boolean;
        id?: ID;
        lambda?: any;
        lock_action?: object[];
        open_action?: object[];
        optimistic?: boolean;
        unlock_action?: object[];
    } & Lock_LOCK_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateNumber extends EsphomeComponent<TemplateNumberConfig> {
    componentName: string = "template.number";
}

export type TemplateNumberConfig = {
        id?: ID;
        initial_value?: any;
        lambda?: any;
        max_value: string;
        min_value: string;
        optimistic?: boolean;
        restore_value?: boolean;
        set_action?: object[];
        step: string;
        update_interval?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateOutput extends EsphomeComponent<TemplateOutputConfig> {
    componentName: string = "template.output";
}

export type TemplateOutputConfig = TemplateOutputConfigBinary | TemplateOutputConfigFloat;

export interface TemplateOutputConfigBinary {
    type: "binary" | "BINARY";
    id?: ID;
    write_action: object[];
}

export interface TemplateOutputConfigFloat {
    type: "float" | "FLOAT";
    id?: ID;
    write_action: object[];
}

export class TemplateSelect extends EsphomeComponent<TemplateSelectConfig> {
    componentName: string = "template.select";
}

export type TemplateSelectConfig = {
        id?: any;
        initial_option?: string;
        lambda?: any;
        optimistic?: boolean;
        options: string[];
        restore_value?: boolean;
        set_action?: object[];
        update_interval?: any;
    } & Select_SELECT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateSensor extends EsphomeComponent<TemplateSensorConfig> {
    componentName: string = "template.sensor";
}

export type TemplateSensorConfig = {
        accuracy_decimals?: any;
        id?: any;
        lambda?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateSwitch extends EsphomeComponent<TemplateSwitchConfig> {
    componentName: string = "template.switch";
}

export type TemplateSwitchConfig = {
        assumed_state?: boolean;
        id?: ID;
        lambda?: any;
        optimistic?: boolean;
        turn_off_action?: object[];
        turn_on_action?: object[];
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateText extends EsphomeComponent<TemplateTextConfig> {
    componentName: string = "template.text";
}

export type TemplateTextConfig = {
        id?: any;
        initial_value?: string;
        lambda?: any;
        max_length?: number;
        min_length?: number;
        optimistic?: boolean;
        pattern?: string;
        restore_value?: boolean;
        set_action?: object[];
        update_interval?: any;
    } & Text_TEXT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateTextSensor extends EsphomeComponent<TemplateTextSensorConfig> {
    componentName: string = "template.text_sensor";
}

export type TemplateTextSensorConfig = {
        id?: any;
        lambda?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateValve extends EsphomeComponent<TemplateValveConfig> {
    componentName: string = "template.valve";
}

export type TemplateValveConfigRestoreMode = 'NO_RESTORE' | 'RESTORE' | 'RESTORE_AND_CALL';
export type TemplateValveConfig = {
        assumed_state?: boolean;
        close_action?: object[];
        has_position?: boolean;
        id?: any;
        lambda?: any;
        open_action?: object[];
        optimistic?: boolean;
        position_action?: object[];
        restore_mode?: TemplateValveConfigRestoreMode;
        stop_action?: object[];
        toggle_action?: object[];
    } & Valve_VALVE_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateWaterHeater extends EsphomeComponent<TemplateWaterHeaterConfig> {
    componentName: string = "template.water_heater";
}

export type TemplateWaterHeaterConfigRestoreMode = 'NO_RESTORE' | 'RESTORE' | 'RESTORE_AND_CALL';
export type TemplateWaterHeaterConfigSupportedModes = 'OFF' | 'ECO' | 'ELECTRIC' | 'PERFORMANCE' | 'HIGH_DEMAND' | 'HEAT_PUMP' | 'GAS';
export type TemplateWaterHeaterConfig = {
        away?: any;
        current_temperature?: any;
        id?: ID;
        is_on?: any;
        mode?: any;
        optimistic?: boolean;
        restore_mode?: TemplateWaterHeaterConfigRestoreMode;
        set_action?: object[];
        supported_modes?: TemplateWaterHeaterConfigSupportedModes[];
        target_temperature?: any;
    } & WaterHeater_WATER_HEATER_SCHEMA & CoreCOMPONENT_SCHEMA;
