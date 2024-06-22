/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: libretiny_pwm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/libretiny_pwm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class LibretinyPwmOutput extends EsphomeComponent<LibretinyPwmOutputConfig> {
    componentName: string = "libretiny_pwm.output";
}

export type LibretinyPwmOutputConfig = {
        id: string;
        pin: Pin;
        frequency?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
