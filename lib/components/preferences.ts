/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: preferences.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/preferences
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Preferences extends BaseComponent<PreferencesConfig> {
    componentName: string = "preferences";
}

export interface PreferencesConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    flash_write_interval?: PreferencesConfigFlashWriteInterval;
}

export interface PreferencesConfigFlashWriteInterval extends CorePositiveTimePeriodMilliseconds {
}
