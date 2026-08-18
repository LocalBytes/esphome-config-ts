/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: safe_mode.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/safe_mode
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Button_BUTTON_SCHEMA } from "./button.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class SafeMode extends EsphomeComponent<SafeModeConfig> {
    componentName: string = "safe_mode";
}

export type SafeModeConfigBootIsGoodAfter = CorePositiveTimePeriodMilliseconds;
export type SafeModeConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;

export interface SafeModeConfig extends CoreCOMPONENT_SCHEMA {
    boot_is_good_after?: SafeModeConfigBootIsGoodAfter;
    disabled?: boolean;
    id?: ID;
    num_attempts?: number;
    on_safe_mode?: object[];
    reboot_timeout?: SafeModeConfigRebootTimeout;
}

export class SafeModeButton extends EsphomeComponent<SafeModeButtonConfig> {
    componentName: string = "safe_mode.button";
}

export type SafeModeButtonConfig = {
        device_class?: any;
        entity_category?: any;
        icon?: any;
        id?: ID;
        safe_mode?: ID;
    } & Button_BUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class SafeModeSwitch extends EsphomeComponent<SafeModeSwitchConfig> {
    componentName: string = "safe_mode.switch";
}

export type SafeModeSwitchConfig = {
        entity_category?: any;
        icon?: any;
        id?: ID;
        safe_mode?: ID;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
