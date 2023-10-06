/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: factory_reset.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/factory_reset
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { ButtonBUTTON_SCHEMA } from "./button.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { SwitchSWITCH_SCHEMA } from "./switch.js";

export class FactoryResetButton extends BaseComponent<FactoryResetButtonConfig> {
    componentName: string = "factory_reset.button";
}

export interface FactoryResetButtonConfig extends ButtonBUTTON_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
}

export class FactoryResetSwitch extends BaseComponent<FactoryResetSwitchConfig> {
    componentName: string = "factory_reset.switch";
}

export interface FactoryResetSwitchConfig extends SwitchSWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
}
