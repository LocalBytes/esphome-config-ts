/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: button.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/button
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Button extends EsphomeComponent {
    componentName: string = "button";
}

export interface ButtonBUTTON_PRESS_SCHEMA {
    id: ID;
}

export type Button_BUTTON_SCHEMADeviceClass = '' | 'identify' | 'restart' | 'update';

export interface Button_BUTTON_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Button_BUTTON_SCHEMA = {
        device_class?: Button_BUTTON_SCHEMADeviceClass;
        mqtt_id?: any;
        on_press?: object[];
        web_server?: Button_BUTTON_SCHEMAWebServer;
        id?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
