/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max6956.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max6956
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";

export class Max6956 extends EsphomeComponent<Max6956Config> {
    componentName: string = "max6956";
}

export type Max6956ConfigBrightnessMode = 'global' | 'segment';

export interface Max6956Config extends CoreCOMPONENTSCHEMA {
    address?: any;
    brightness_global?: number;
    brightness_mode?: Max6956ConfigBrightnessMode;
    i2c_id?: ID;
    id: string;
}

export class Max6956Output extends EsphomeComponent<Max6956OutputConfig> {
    componentName: string = "max6956.output";
}

export type Max6956OutputConfig = {
        id: string;
        max6956?: ID;
        pin: number;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
