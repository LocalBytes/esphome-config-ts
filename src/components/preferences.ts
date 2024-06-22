/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: preferences.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/preferences
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Preferences extends BaseComponent<PreferencesConfig> {
    componentName: string = "preferences";
}

export type PreferencesConfigFlashWriteInterval = CorePositiveTimePeriodMilliseconds;

export interface PreferencesConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    flash_write_interval?: PreferencesConfigFlashWriteInterval;
}