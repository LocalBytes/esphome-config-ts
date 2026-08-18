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
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA } from "./esphome.js";

export abstract class AlarmControlPanel extends EsphomeComponent {
    componentName: string = "alarm_control_panel";
}

export interface AlarmControlPanelALARMCONTROLPANELACTIONSCHEMA {
    code?: string;
    id?: ID;
}

export interface AlarmControlPanelALARMCONTROLPANELCONDITIONSCHEMA {
    id?: ID;
}

export interface AlarmControlPanelALARMCONTROLPANELSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type AlarmControlPanelALARMCONTROLPANELSCHEMA = {
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
        web_server?: AlarmControlPanelALARMCONTROLPANELSCHEMAWebServer;
        id?: any;
        name?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;
