/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sprinkler.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sprinkler
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";

export class Sprinkler extends EsphomeComponent<SprinklerConfig> {
    componentName: string = "sprinkler";
}

export interface SprinklerConfigAutoAdvanceSwitch extends Switch_SWITCH_SCHEMA {
    entity_category?: any;
    id?: ID;
    restore_mode?: any;
}

export interface SprinklerConfigMainSwitch extends Switch_SWITCH_SCHEMA {
    id?: ID;
}

export type SprinklerConfigManualSelectionDelay = CorePositiveTimePeriodSeconds;
export type SprinklerConfigMultiplierNumber = {
        entity_category?: any;
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        set_action?: object[];
        step?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type SprinklerConfigPumpStartPumpDelay = CorePositiveTimePeriodSeconds;
export type SprinklerConfigPumpStartValveDelay = CorePositiveTimePeriodSeconds;
export type SprinklerConfigPumpStopPumpDelay = CorePositiveTimePeriodSeconds;
export type SprinklerConfigPumpStopValveDelay = CorePositiveTimePeriodSeconds;

export interface SprinklerConfigQueueEnableSwitch extends Switch_SWITCH_SCHEMA {
    entity_category?: any;
    id?: ID;
    restore_mode?: any;
}

export type SprinklerConfigRepeatNumber = {
        entity_category?: any;
        id?: ID;
        initial_value?: number;
        max_value?: number;
        min_value?: number;
        restore_value?: boolean;
        set_action?: object[];
        step?: number;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface SprinklerConfigReverseSwitch extends Switch_SWITCH_SCHEMA {
    entity_category?: any;
    id?: ID;
    restore_mode?: any;
}

export interface SprinklerConfigStandbySwitch extends Switch_SWITCH_SCHEMA {
    entity_category?: any;
    id?: ID;
    restore_mode?: any;
}

export type SprinklerConfigValveOpenDelay = CorePositiveTimePeriodSeconds;
export type SprinklerConfigValveOverlap = CorePositiveTimePeriodSeconds;

export interface SprinklerConfigValvesEnableSwitch extends Switch_SWITCH_SCHEMA {
    entity_category?: any;
    id?: ID;
    restore_mode?: any;
}

export type SprinklerConfigValvesRunDuration = CorePositiveTimePeriodSeconds;
export type SprinklerConfigValvesRunDurationNumberUnitOfMeasurement = 'min' | 's';
export type SprinklerConfigValvesRunDurationNumber = {
        entity_category?: any;
        id?: ID;
        initial_value?: number;
        max_value?: number;
        min_value?: number;
        restore_value?: boolean;
        set_action?: object[];
        step?: number;
        unit_of_measurement: SprinklerConfigValvesRunDurationNumberUnitOfMeasurement;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface SprinklerConfigValvesValveSwitch extends Switch_SWITCH_SCHEMA {
    id?: ID;
}

export interface SprinklerConfigValves {
    enable_switch?: SprinklerConfigValvesEnableSwitch;
    pump_switch_id?: ID;
    run_duration?: SprinklerConfigValvesRunDuration;
    run_duration_number?: SprinklerConfigValvesRunDurationNumber;
    valve_switch: SprinklerConfigValvesValveSwitch;
    valve_switch_id?: ID;
}

export interface SprinklerConfig extends CoreCOMPONENT_SCHEMA {
    auto_advance_switch?: SprinklerConfigAutoAdvanceSwitch;
    id?: ID;
    main_switch?: SprinklerConfigMainSwitch;
    manual_selection_delay?: SprinklerConfigManualSelectionDelay;
    multiplier_number?: SprinklerConfigMultiplierNumber;
    name?: string;
    next_prev_ignore_disabled?: boolean;
    pump_start_pump_delay?: SprinklerConfigPumpStartPumpDelay;
    pump_start_valve_delay?: SprinklerConfigPumpStartValveDelay;
    pump_stop_pump_delay?: SprinklerConfigPumpStopPumpDelay;
    pump_stop_valve_delay?: SprinklerConfigPumpStopValveDelay;
    pump_switch_off_during_valve_open_delay?: boolean;
    queue_enable_switch?: SprinklerConfigQueueEnableSwitch;
    repeat?: number;
    repeat_number?: SprinklerConfigRepeatNumber;
    reverse_switch?: SprinklerConfigReverseSwitch;
    standby_switch?: SprinklerConfigStandbySwitch;
    valve_open_delay?: SprinklerConfigValveOpenDelay;
    valve_overlap?: SprinklerConfigValveOverlap;
    valves: SprinklerConfigValves[];
}

export interface SprinklerSPRINKLER_ACTION_SCHEMA {
    id: ID;
}
