/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp8266_pwm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp8266_pwm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Esp8266PwmOutput extends EsphomeComponent<Esp8266PwmOutputConfig> {
    componentName: string = "esp8266_pwm.output";
}

export type Esp8266PwmOutputConfig = {
        frequency?: any;
        id: string;
        pin: Pin;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
