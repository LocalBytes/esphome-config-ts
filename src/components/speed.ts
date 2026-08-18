/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: speed.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/speed
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { FanFANSCHEMA } from "./fan.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class SpeedFan extends EsphomeComponent<SpeedFanConfig> {
    componentName: string = "speed.fan";
}

export type SpeedFanConfig = {
        direction_output?: ID;
        id?: ID;
        oscillation_output?: ID;
        output: ID;
        preset_modes?: any;
        speed_count?: number;
    } & FanFANSCHEMA & CoreCOMPONENTSCHEMA;
