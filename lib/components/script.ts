/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: script.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/script
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";

export class Script extends BaseComponent<ScriptConfig> {
    componentName: string = "script";
}

export interface ScriptConfig {
    id: string;
    mode?: ScriptConfigMode;
    max_runs?: number;
    parameters: ScriptConfigParameters;
    then: object[];
}

export type ScriptConfigMode = 'single' | 'restart' | 'queued' | 'parallel';
export type ScriptConfigParameters = Record<string, string>;
