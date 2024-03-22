/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rf_bridge.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rf_bridge
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class RfBridge extends BaseComponent<RfBridgeConfig> {
    componentName: string = "rf_bridge";
}

export interface RfBridgeConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    on_code_received?: object[];
    on_advanced_code_received?: object[];
    uart_id?: ID;
}

export interface RfBridgeRFBRIDGE_ID_SCHEMA {
    id?: ID;
}
