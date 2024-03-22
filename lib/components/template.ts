/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: template.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/template
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
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

export interface TemplateSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    accuracy_decimals?: any;
    lambda?: any;
    update_interval?: any;
}

export class TemplateAlarmControlPanel extends BaseComponent<TemplateAlarmControlPanelConfig> {
    componentName: string = "template.alarm_control_panel";
}

export interface TemplateAlarmControlPanelConfig extends AlarmControlPanelALARM_CONTROL_PANEL_SCHEMA, CoreCOMPONENT_SCHEMA {
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
}

export interface TemplateAlarmControlPanelConfigArmingHomeTime extends CorePositiveTimePeriodMilliseconds {
}

export interface TemplateAlarmControlPanelConfigArmingNightTime extends CorePositiveTimePeriodMilliseconds {
}

export interface TemplateAlarmControlPanelConfigArmingAwayTime extends CorePositiveTimePeriodMilliseconds {
}

export interface TemplateAlarmControlPanelConfigPendingTime extends CorePositiveTimePeriodMilliseconds {
}

export interface TemplateAlarmControlPanelConfigTriggerTime extends CorePositiveTimePeriodMilliseconds {
}

export interface TemplateAlarmControlPanelConfigBinarySensors {
    input: ID;
    bypass_armed_home?: boolean;
    bypass_armed_night?: boolean;
}

export type TemplateAlarmControlPanelConfigRestoreMode = 'ALWAYS_DISARMED' | 'RESTORE_DEFAULT_DISARMED';

export class TemplateBinarySensor extends BaseComponent<TemplateBinarySensorConfig> {
    componentName: string = "template.binary_sensor";
}

export interface TemplateBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    lambda?: any;
}

export class TemplateButton extends BaseComponent<TemplateButtonConfig> {
    componentName: string = "template.button";
}

export interface TemplateButtonConfig extends ButtonBUTTON_SCHEMA {
    id?: ID;
}

export class TemplateCover extends BaseComponent<TemplateCoverConfig> {
    componentName: string = "template.cover";
}

export interface TemplateCoverConfig extends CoverCOVER_SCHEMA, CoreCOMPONENT_SCHEMA {
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
}

export type TemplateCoverConfigRestoreMode = 'NO_RESTORE' | 'RESTORE' | 'RESTORE_AND_CALL';

export class TemplateLock extends BaseComponent<TemplateLockConfig> {
    componentName: string = "template.lock";
}

export interface TemplateLockConfig extends LockLOCK_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    lambda?: any;
    optimistic?: boolean;
    assumed_state?: boolean;
    unlock_action?: object[];
    lock_action?: object[];
    open_action?: object[];
}

export class TemplateNumber extends BaseComponent<TemplateNumberConfig> {
    componentName: string = "template.number";
}

export interface TemplateNumberConfig extends NumberNUMBER_SCHEMA, CoreCOMPONENT_SCHEMA {
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
}

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

export interface TemplateSelectConfig extends SelectSELECT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    options: string[];
    lambda?: any;
    optimistic?: boolean;
    set_action?: object[];
    initial_option?: string;
    restore_value?: boolean;
    update_interval?: any;
}

export class TemplateSwitch extends BaseComponent<TemplateSwitchConfig> {
    componentName: string = "template.switch";
}

export interface TemplateSwitchConfig extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    restore_mode?: TemplateSwitchConfigRestoreMode;
    id?: ID;
    lambda?: any;
    optimistic?: boolean;
    assumed_state?: boolean;
    turn_off_action?: object[];
    turn_on_action?: object[];
}

export type TemplateSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export class TemplateTextSensor extends BaseComponent<TemplateTextSensorConfig> {
    componentName: string = "template.text_sensor";
}

export interface TemplateTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    lambda?: any;
    update_interval?: any;
}
