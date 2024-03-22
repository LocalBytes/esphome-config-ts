/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: status_led.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/status_led
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { LightBINARY_LIGHT_SCHEMA } from "./light.js";

export class StatusLed extends BaseComponent<StatusLedConfig> {
    componentName: string = "status_led";
}

export interface StatusLedConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pin: Pin;
}

export class StatusLedLight extends BaseComponent<StatusLedLightConfig> {
    componentName: string = "status_led.light";
}

export interface StatusLedLightConfig extends LightBINARY_LIGHT_SCHEMA {
    output_id?: ID;
    pin?: Pin;
    output?: ID;
}
