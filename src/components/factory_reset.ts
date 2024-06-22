/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: factory_reset.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/factory_reset
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SwitchSWITCH_SCHEMA } from "./switch.js";

export class FactoryResetButton extends EsphomeComponent<FactoryResetButtonConfig> {
    componentName: string = "factory_reset.button";
}

export type FactoryResetButtonConfig = {
        id?: ID;
        icon?: any;
        entity_category?: any;
        device_class?: any;
    } & ButtonBUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class FactoryResetSwitch extends EsphomeComponent<FactoryResetSwitchConfig> {
    componentName: string = "factory_reset.switch";
}

export type FactoryResetSwitchConfig = {
        id?: ID;
        icon?: any;
        entity_category?: any;
    } & SwitchSWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
