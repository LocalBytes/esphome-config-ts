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
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

export class FactoryReset extends EsphomeComponent<FactoryResetConfig> {
    componentName: string = "factory_reset";
}

export type FactoryResetConfigMaxDelay = CorePositiveTimePeriodSeconds;

export interface FactoryResetConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    max_delay?: FactoryResetConfigMaxDelay;
    on_increment?: object[];
    resets_required?: number;
}

export class FactoryResetButton extends EsphomeComponent<FactoryResetButtonConfig> {
    componentName: string = "factory_reset.button";
}

export type FactoryResetButtonConfig = {
        device_class?: any;
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & ButtonBUTTONSCHEMA & CoreCOMPONENTSCHEMA;

export class FactoryResetSwitch extends EsphomeComponent<FactoryResetSwitchConfig> {
    componentName: string = "factory_reset.switch";
}

export type FactoryResetSwitchConfig = {
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & SwitchSWITCHSCHEMA & CoreCOMPONENTSCHEMA;
