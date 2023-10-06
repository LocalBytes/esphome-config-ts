/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp8266_pwm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp8266_pwm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp8266PwmOutput extends BaseComponent<Esp8266PwmOutputConfig> {
    componentName: string = "esp8266_pwm.output";
}

export interface Esp8266PwmOutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id: string;
    pin: Pin;
    frequency?: any;
}
