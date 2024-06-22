/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: script.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/script
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Script extends EsphomeComponent<ScriptConfig> {
    componentName: string = "script";
}

export type ScriptConfigMode = 'single' | 'restart' | 'queued' | 'parallel';
export type ScriptConfigParameters = Record<string, string>;

export interface ScriptConfig {
    id: string;
    mode?: ScriptConfigMode;
    max_runs?: number;
    parameters: ScriptConfigParameters;
    then: object[];
}
