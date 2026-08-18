/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rp2040_pwm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rp2040_pwm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Rp2040PwmOutput extends EsphomeComponent<Rp2040PwmOutputConfig> {
    componentName: string = "rp2040_pwm.output";
}

export type Rp2040PwmOutputConfig = {
        frequency?: any;
        id: string;
        pin: Pin;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
