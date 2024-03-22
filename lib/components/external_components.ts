/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: external_components.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/external_components
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreSOURCE_SCHEMA } from "./esphome.js";

export class ExternalComponents extends BaseComponent<ExternalComponentsConfig> {
    componentName: string = "external_components";
}

export interface ExternalComponentsConfig {
    source: ExternalComponentsConfigSource;
    refresh?: string;
    components?: string[];
}

export type ExternalComponentsConfigSource = CoreSOURCE_SCHEMA & {
}
