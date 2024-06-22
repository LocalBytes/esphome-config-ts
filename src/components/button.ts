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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Button extends BaseComponent {
    componentName: string = "button";
}

export type ButtonBUTTON_SCHEMADeviceClass = '' | 'identify' | 'restart' | 'update';
export type ButtonBUTTON_SCHEMA = {
        mqtt_id?: any;
        device_class?: ButtonBUTTON_SCHEMADeviceClass;
        on_press?: object[];
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;

export interface ButtonBUTTON_PRESS_SCHEMA {
    id: ID;
}
