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
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class LibretinyPwmOutput extends EsphomeComponent<LibretinyPwmOutputConfig> {
    componentName: string = "libretiny_pwm.output";
}

export type LibretinyPwmOutputConfig = {
        frequency?: any;
        id: string;
        pin: Pin;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
