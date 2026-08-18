/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: alarm_control_panel.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/alarm_control_panel
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class AlarmControlPanel extends EsphomeComponent {
    componentName: string = "alarm_control_panel";
}

export interface AlarmControlPanelALARM_CONTROL_PANEL_ACTION_SCHEMA {
    code?: string;
    id?: ID;
}

export interface AlarmControlPanelALARM_CONTROL_PANEL_CONDITION_SCHEMA {
    id?: ID;
}

export interface AlarmControlPanel_ALARM_CONTROL_PANEL_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type AlarmControlPanel_ALARM_CONTROL_PANEL_SCHEMA = {
        mqtt_id?: any;
        on_armed_away?: object[];
        on_armed_home?: object[];
        on_armed_night?: object[];
        on_arming?: object[];
        on_chime?: object[];
        on_cleared?: object[];
        on_disarmed?: object[];
        on_pending?: object[];
        on_ready?: object[];
        on_state?: object[];
        on_triggered?: object[];
        web_server?: AlarmControlPanel_ALARM_CONTROL_PANEL_SCHEMAWebServer;
        id?: any;
        name?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
