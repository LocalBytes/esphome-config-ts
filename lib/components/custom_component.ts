/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: custom_component.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/custom_component
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class CustomComponent extends BaseComponent<CustomComponentConfig> {
    componentName: string = "custom_component";
}

export interface CustomComponentConfig {
    id?: ID;
    lambda: string;
    components?: CustomComponentConfigComponents[];
}

export interface CustomComponentConfigComponents extends CoreCOMPONENT_SCHEMA {
    id?: ID;
}
