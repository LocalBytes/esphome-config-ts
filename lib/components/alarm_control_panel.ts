/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: alarm_control_panel.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/alarm_control_panel
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreENTITY_BASE_SCHEMA } from "./esphome.js";

export abstract class AlarmControlPanel extends BaseComponent {
    componentName: string = "alarm_control_panel";
}

export interface AlarmControlPanelALARM_CONTROL_PANEL_SCHEMA extends CoreENTITY_BASE_SCHEMA {
    id?: ID;
    on_state?: object[];
    on_triggered?: object[];
    on_arming?: object[];
    on_pending?: object[];
    on_armed_home?: object[];
    on_armed_night?: object[];
    on_armed_away?: object[];
    on_disarmed?: object[];
    on_cleared?: object[];
}

export interface AlarmControlPanelALARM_CONTROL_PANEL_ACTION_SCHEMA {
    id?: ID;
    code?: string;
}

export interface AlarmControlPanelALARM_CONTROL_PANEL_CONDITION_SCHEMA {
    id?: ID;
}
