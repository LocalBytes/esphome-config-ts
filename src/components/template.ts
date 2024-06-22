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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { AlarmControlPanelALARM_CONTROL_PANEL_SCHEMA } from "./alarm_control_panel.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { CoverCOVER_SCHEMA } from "./cover.js";
import type { LockLOCK_SCHEMA } from "./lock.js";
import type { NumberNUMBER_SCHEMA } from "./number.js";
import type { SelectSELECT_SCHEMA } from "./select.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class TemplateSensor extends BaseComponent<TemplateSensorConfig> {
    componentName: string = "template.sensor";
}

export type TemplateSensorConfig = {
        id?: any;
        accuracy_decimals?: any;
        lambda?: any;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateAlarmControlPanel extends BaseComponent<TemplateAlarmControlPanelConfig> {
    componentName: string = "template.alarm_control_panel";
}

export type TemplateAlarmControlPanelConfigArmingHomeTime = CorePositiveTimePeriodMilliseconds;
export type TemplateAlarmControlPanelConfigArmingNightTime = CorePositiveTimePeriodMilliseconds;
export type TemplateAlarmControlPanelConfigArmingAwayTime = CorePositiveTimePeriodMilliseconds;
export type TemplateAlarmControlPanelConfigPendingTime = CorePositiveTimePeriodMilliseconds;
export type TemplateAlarmControlPanelConfigTriggerTime = CorePositiveTimePeriodMilliseconds;

export interface TemplateAlarmControlPanelConfigBinarySensors {
    input: ID;
    bypass_armed_home?: boolean;
    bypass_armed_night?: boolean;
}

export type TemplateAlarmControlPanelConfigRestoreMode = 'ALWAYS_DISARMED' | 'RESTORE_DEFAULT_DISARMED';
export type TemplateAlarmControlPanelConfig = {
        id?: any;
        codes?: string[];
        requires_code_to_arm?: boolean;
        arming_home_time?: TemplateAlarmControlPanelConfigArmingHomeTime;
        arming_night_time?: TemplateAlarmControlPanelConfigArmingNightTime;
        arming_away_time?: TemplateAlarmControlPanelConfigArmingAwayTime;
        pending_time?: TemplateAlarmControlPanelConfigPendingTime;
        trigger_time?: TemplateAlarmControlPanelConfigTriggerTime;
        binary_sensors?: TemplateAlarmControlPanelConfigBinarySensors[];
        restore_mode?: TemplateAlarmControlPanelConfigRestoreMode;
    } & AlarmControlPanelALARM_CONTROL_PANEL_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateBinarySensor extends BaseComponent<TemplateBinarySensorConfig> {
    componentName: string = "template.binary_sensor";
}

export type TemplateBinarySensorConfig = {
        id?: any;
        lambda?: any;
    } & BinarySensorBINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateButton extends BaseComponent<TemplateButtonConfig> {
    componentName: string = "template.button";
}

export interface TemplateButtonConfig extends ButtonBUTTON_SCHEMA {
    id?: ID;
}

export class TemplateCover extends BaseComponent<TemplateCoverConfig> {
    componentName: string = "template.cover";
}

export type TemplateCoverConfigRestoreMode = 'NO_RESTORE' | 'RESTORE' | 'RESTORE_AND_CALL';
export type TemplateCoverConfig = {
        id?: any;
        lambda?: any;
        optimistic?: boolean;
        assumed_state?: boolean;
        has_position?: boolean;
        open_action?: object[];
        close_action?: object[];
        stop_action?: object[];
        tilt_action?: object[];
        tilt_lambda?: any;
        position_action?: object[];
        restore_mode?: TemplateCoverConfigRestoreMode;
    } & CoverCOVER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateLock extends BaseComponent<TemplateLockConfig> {
    componentName: string = "template.lock";
}

export type TemplateLockConfig = {
        id?: ID;
        lambda?: any;
        optimistic?: boolean;
        assumed_state?: boolean;
        unlock_action?: object[];
        lock_action?: object[];
        open_action?: object[];
    } & LockLOCK_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateNumber extends BaseComponent<TemplateNumberConfig> {
    componentName: string = "template.number";
}

export type TemplateNumberConfig = {
        id?: ID;
        max_value: string;
        min_value: string;
        step: string;
        lambda?: any;
        optimistic?: boolean;
        set_action?: object[];
        initial_value?: any;
        restore_value?: boolean;
        update_interval?: any;
    } & NumberNUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateOutput extends BaseComponent<TemplateOutputConfig> {
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

export class TemplateSelect extends BaseComponent<TemplateSelectConfig> {
    componentName: string = "template.select";
}

export type TemplateSelectConfig = {
        id?: any;
        options: string[];
        lambda?: any;
        optimistic?: boolean;
        set_action?: object[];
        initial_option?: string;
        restore_value?: boolean;
        update_interval?: any;
    } & SelectSELECT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateSwitch extends BaseComponent<TemplateSwitchConfig> {
    componentName: string = "template.switch";
}

export type TemplateSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type TemplateSwitchConfig = {
        restore_mode?: TemplateSwitchConfigRestoreMode;
        id?: ID;
        lambda?: any;
        optimistic?: boolean;
        assumed_state?: boolean;
        turn_off_action?: object[];
        turn_on_action?: object[];
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;

export class TemplateTextSensor extends BaseComponent<TemplateTextSensorConfig> {
    componentName: string = "template.text_sensor";
}

export type TemplateTextSensorConfig = {
        id?: any;
        lambda?: any;
        update_interval?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
