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
import type { SwitchSWITCHSCHEMA } from "./switch.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { NumberNUMBERSCHEMA } from "./number.js";

export class Sprinkler extends EsphomeComponent<SprinklerConfig> {
    componentName: string = "sprinkler";
}

export interface SprinklerConfigAutoAdvanceSwitch extends SwitchSWITCHSCHEMA {
    entity_category?: any;
    id?: ID;
    restore_mode?: any;
}

export interface SprinklerConfigMainSwitch extends SwitchSWITCHSCHEMA {
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
    } & NumberNUMBERSCHEMA & CoreCOMPONENTSCHEMA;
export type SprinklerConfigPumpStartPumpDelay = CorePositiveTimePeriodSeconds;
export type SprinklerConfigPumpStartValveDelay = CorePositiveTimePeriodSeconds;
export type SprinklerConfigPumpStopPumpDelay = CorePositiveTimePeriodSeconds;
export type SprinklerConfigPumpStopValveDelay = CorePositiveTimePeriodSeconds;

export interface SprinklerConfigQueueEnableSwitch extends SwitchSWITCHSCHEMA {
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
    } & NumberNUMBERSCHEMA & CoreCOMPONENTSCHEMA;

export interface SprinklerConfigReverseSwitch extends SwitchSWITCHSCHEMA {
    entity_category?: any;
    id?: ID;
    restore_mode?: any;
}

export interface SprinklerConfigStandbySwitch extends SwitchSWITCHSCHEMA {
    entity_category?: any;
    id?: ID;
    restore_mode?: any;
}

export type SprinklerConfigValveOpenDelay = CorePositiveTimePeriodSeconds;
export type SprinklerConfigValveOverlap = CorePositiveTimePeriodSeconds;

export interface SprinklerConfigValvesEnableSwitch extends SwitchSWITCHSCHEMA {
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
    } & NumberNUMBERSCHEMA & CoreCOMPONENTSCHEMA;

export interface SprinklerConfigValvesValveSwitch extends SwitchSWITCHSCHEMA {
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

export interface SprinklerConfig extends CoreCOMPONENTSCHEMA {
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

export interface SprinklerSPRINKLERACTIONSCHEMA {
    id: ID;
}
