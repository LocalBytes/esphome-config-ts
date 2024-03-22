/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sprinkler.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sprinkler
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { NumberNUMBER_SCHEMA } from "./number.js";

export class Sprinkler extends BaseComponent<SprinklerConfig> {
    componentName: string = "sprinkler";
}

export interface SprinklerConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    name?: string;
    auto_advance_switch?: SprinklerConfigAutoAdvanceSwitch;
    main_switch?: SprinklerConfigMainSwitch;
    queue_enable_switch?: SprinklerConfigQueueEnableSwitch;
    reverse_switch?: SprinklerConfigReverseSwitch;
    standby_switch?: SprinklerConfigStandbySwitch;
    next_prev_ignore_disabled?: boolean;
    manual_selection_delay?: SprinklerConfigManualSelectionDelay;
    multiplier_number?: SprinklerConfigMultiplierNumber;
    repeat?: number;
    repeat_number?: SprinklerConfigRepeatNumber;
    pump_pulse_duration?: SprinklerConfigPumpPulseDuration;
    valve_pulse_duration?: SprinklerConfigValvePulseDuration;
    pump_start_pump_delay?: SprinklerConfigPumpStartPumpDelay;
    pump_stop_pump_delay?: SprinklerConfigPumpStopPumpDelay;
    pump_switch_off_during_valve_open_delay?: boolean;
    pump_start_valve_delay?: SprinklerConfigPumpStartValveDelay;
    pump_stop_valve_delay?: SprinklerConfigPumpStopValveDelay;
    valve_overlap?: SprinklerConfigValveOverlap;
    valve_open_delay?: SprinklerConfigValveOpenDelay;
    valves: SprinklerConfigValves[];
}

export interface SprinklerConfigAutoAdvanceSwitch extends Switch_SWITCH_SCHEMA {
    restore_mode?: SprinklerConfigAutoAdvanceSwitchRestoreMode;
    id?: ID;
    entity_category?: any;
}

export type SprinklerConfigAutoAdvanceSwitchRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface SprinklerConfigMainSwitch extends Switch_SWITCH_SCHEMA {
    restore_mode?: SprinklerConfigMainSwitchRestoreMode;
    id?: ID;
}

export type SprinklerConfigMainSwitchRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface SprinklerConfigQueueEnableSwitch extends Switch_SWITCH_SCHEMA {
    restore_mode?: SprinklerConfigQueueEnableSwitchRestoreMode;
    id?: ID;
    entity_category?: any;
}

export type SprinklerConfigQueueEnableSwitchRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface SprinklerConfigReverseSwitch extends Switch_SWITCH_SCHEMA {
    restore_mode?: SprinklerConfigReverseSwitchRestoreMode;
    id?: ID;
    entity_category?: any;
}

export type SprinklerConfigReverseSwitchRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface SprinklerConfigStandbySwitch extends Switch_SWITCH_SCHEMA {
    restore_mode?: SprinklerConfigStandbySwitchRestoreMode;
    id?: ID;
    entity_category?: any;
}

export type SprinklerConfigStandbySwitchRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface SprinklerConfigManualSelectionDelay extends CorePositiveTimePeriodSeconds {
}

export interface SprinklerConfigMultiplierNumber extends NumberNUMBER_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    entity_category?: any;
    initial_value?: any;
    max_value?: any;
    min_value?: any;
    restore_value?: boolean;
    step?: any;
    set_action?: object[];
}

export interface SprinklerConfigRepeatNumber extends NumberNUMBER_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    entity_category?: any;
    initial_value?: number;
    max_value?: number;
    min_value?: number;
    restore_value?: boolean;
    step?: number;
    set_action?: object[];
}

export interface SprinklerConfigPumpPulseDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface SprinklerConfigValvePulseDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface SprinklerConfigPumpStartPumpDelay extends CorePositiveTimePeriodSeconds {
}

export interface SprinklerConfigPumpStopPumpDelay extends CorePositiveTimePeriodSeconds {
}

export interface SprinklerConfigPumpStartValveDelay extends CorePositiveTimePeriodSeconds {
}

export interface SprinklerConfigPumpStopValveDelay extends CorePositiveTimePeriodSeconds {
}

export interface SprinklerConfigValveOverlap extends CorePositiveTimePeriodSeconds {
}

export interface SprinklerConfigValveOpenDelay extends CorePositiveTimePeriodSeconds {
}

export interface SprinklerConfigValves {
    enable_switch?: SprinklerConfigValvesEnableSwitch;
    pump_off_switch_id?: ID;
    pump_on_switch_id?: ID;
    pump_switch_id?: ID;
    run_duration?: SprinklerConfigValvesRunDuration;
    run_duration_number?: SprinklerConfigValvesRunDurationNumber;
    valve_switch: SprinklerConfigValvesValveSwitch;
    valve_off_switch_id?: ID;
    valve_on_switch_id?: ID;
    valve_switch_id?: ID;
}

export interface SprinklerConfigValvesEnableSwitch extends Switch_SWITCH_SCHEMA {
    restore_mode?: SprinklerConfigValvesEnableSwitchRestoreMode;
    id?: ID;
    entity_category?: any;
}

export type SprinklerConfigValvesEnableSwitchRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface SprinklerConfigValvesRunDuration extends CorePositiveTimePeriodSeconds {
}

export interface SprinklerConfigValvesRunDurationNumber extends NumberNUMBER_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    entity_category?: any;
    initial_value?: number;
    max_value?: number;
    min_value?: number;
    restore_value?: boolean;
    step?: number;
    set_action?: object[];
    unit_of_measurement: SprinklerConfigValvesRunDurationNumberUnitOfMeasurement;
}

export type SprinklerConfigValvesRunDurationNumberUnitOfMeasurement = 'min' | 's';

export interface SprinklerConfigValvesValveSwitch extends Switch_SWITCH_SCHEMA {
    restore_mode?: SprinklerConfigValvesValveSwitchRestoreMode;
    id?: ID;
}

export type SprinklerConfigValvesValveSwitchRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface SprinklerSPRINKLER_ACTION_SCHEMA {
    id: ID;
}
