/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: status_led.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/status_led
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { LightBINARYLIGHTSCHEMA } from "./light.js";

export class StatusLed extends EsphomeComponent<StatusLedConfig> {
    componentName: string = "status_led";
}

export interface StatusLedConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    pin?: Pin;
}

export class StatusLedLight extends EsphomeComponent<StatusLedLightConfig> {
    componentName: string = "status_led.light";
}

export interface StatusLedLightConfig extends LightBINARYLIGHTSCHEMA {
    output?: ID;
    output_id?: ID;
    pin?: Pin;
}
