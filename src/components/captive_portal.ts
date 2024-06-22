/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: captive_portal.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/captive_portal
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class CaptivePortal extends EsphomeComponent<CaptivePortalConfig> {
    componentName: string = "captive_portal";
}

export interface CaptivePortalConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    web_server_base_id?: ID;
}
