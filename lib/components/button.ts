/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: button.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/button
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Button extends BaseComponent {
    componentName: string = "button";
}

export interface ButtonBUTTON_SCHEMA extends CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA {
    mqtt_id?: any;
    device_class?: ButtonBUTTON_SCHEMADeviceClass;
    on_press?: object[];
}

export type ButtonBUTTON_SCHEMADeviceClass = '' | 'identify' | 'restart' | 'update';

export interface ButtonBUTTON_PRESS_SCHEMA {
    id: ID;
}
