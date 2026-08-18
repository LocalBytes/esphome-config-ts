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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

export class SafeMode extends EsphomeComponent<SafeModeConfig> {
    componentName: string = "safe_mode";
}

export type SafeModeConfigBootIsGoodAfter = CorePositiveTimePeriodMilliseconds;
export type SafeModeConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;

export interface SafeModeConfig extends CoreCOMPONENTSCHEMA {
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
    } & ButtonBUTTONSCHEMA & CoreCOMPONENTSCHEMA;

export class SafeModeSwitch extends EsphomeComponent<SafeModeSwitchConfig> {
    componentName: string = "safe_mode.switch";
}

export type SafeModeSwitchConfig = {
        entity_category?: any;
        icon?: any;
        id?: ID;
        safe_mode?: ID;
    } & SwitchSWITCHSCHEMA & CoreCOMPONENTSCHEMA;
