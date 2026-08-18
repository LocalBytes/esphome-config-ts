/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: external_components.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/external_components
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class ExternalComponents extends EsphomeComponent<ExternalComponentsConfig> {
    componentName: string = "external_components";
}

export type ExternalComponentsConfigSource = ExternalComponentsConfigSourceGit | ExternalComponentsConfigSourceLocal;

export interface ExternalComponentsConfigSourceGit {
    type: "git" | "GIT";
    path: string;
}

export interface ExternalComponentsConfigSourceLocal {
    type: "local" | "LOCAL";
    path: string;
}

export interface ExternalComponentsConfig {
    components?: string[];
    refresh?: string;
    source: ExternalComponentsConfigSource;
}
