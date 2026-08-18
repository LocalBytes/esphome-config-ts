/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ledc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ledc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class LedcOutput extends EsphomeComponent<LedcOutputConfig> {
    componentName: string = "ledc.output";
}

export type LedcOutputConfig = {
        channel?: number;
        frequency?: any;
        id: string;
        phase_angle?: any;
        pin: Pin;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
